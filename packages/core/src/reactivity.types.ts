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

export type NativeChildDom = Optional<Primitive | ChildNode>

export type BindingFunc = (dom?: ChildDom) => ChildDom

export type ChildDom =
	| NativeChildDom
	| Readonly<State<Optional<Primitive>>>
	| BindingFunc
	| readonly ChildDom[]

export type ElementFunction<Result> = (
	propsOrChild?: ElementProps<Result> | ChildDom,
	...rest: readonly ChildDom[]
) => Result

export type Elements<T> = Readonly<Record<string, ElementFunction<Element>>> & {
	[K in keyof T]: ElementFunction<T[K]>
}

export interface ReactiveScope {
	/** Any states which have been read within the current reactive scope. */
	getters: Set<State<any>>

	/** Any states which have been written within the current reactive scope. */
	setters: Set<State<any>>
}

export interface StateListener<T = any> {
	func: () => T
	state: State<T>
	dom?: ChildNode
}

export interface DomListener {
	func: (dom: ChildDom) => Optional<ChildDom>
	dom: ChildNode
}
