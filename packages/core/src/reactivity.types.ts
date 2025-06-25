import { State } from "./reactivity"

export type Optional<T> = T | null | undefined

export type Primitive = string | number | boolean | bigint

export type Val<T> = State<T> | T

export type PropValue<T> = Optional<T> | ((e: any) => T)

export type PropValueOrDerived<T> =
	| PropValue<T>
	| Readonly<State<Optional<T>>>
	| (() => PropValue<T>)

export type GenericProps = Record<
	string,
	PropValueOrDerived<Primitive> | ChildDom | any
> & {
	class?: PropValueOrDerived<string>
	is?: string
	context?: Record<string, Val<unknown>>
}

export type SpecificProps<ElementType> = Partial<{
	[K in keyof ElementType]: PropValueOrDerived<ElementType[K] | Primitive>
}>

/** All known properties and attributes for a given element tag.
 * Attributes prefixed with `$` will reactively remove the attribute whenever the given value returns falsy.
 * */
export type ElementProps<T = Element> = GenericProps & SpecificProps<T>

export type ValidChildDomValue = Optional<Primitive | ChildNode>

export type BindingFunc = (dom?: ChildDom) => ChildDom

export type ChildDom =
	| ValidChildDomValue
	| Readonly<State<Optional<Primitive>>>
	| BindingFunc
	| readonly ChildDom[]

export type TagFunc<Result> = (
	propsOrChild?: ElementProps<Result> | ChildDom,
	...rest: readonly ChildDom[]
) => Result

export type Tags<T> = Readonly<Record<string, TagFunc<Element>>> & {
	[K in keyof T]: TagFunc<T[K]>
}

export interface DependencyBundle {
	_getters: Set<State<any>>
	_setters: Set<State<any>>
}

export interface Binding<T = any> {
	func: (dom: ChildNode) => Optional<T>
	state: State<T> | undefined
	_dom: Optional<{ isConnected: boolean }>
}

export interface ConnectedBinding<T = any> extends Binding<T> {
	_dom: { isConnected: boolean }
}
