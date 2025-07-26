//////// API ////////

import { getContext, removeContext, setContext } from "."
import { CONTEXT_IN_PREFIX, CONTEXT_OUT_PREFIX } from "./context"
import { bind, derive, State } from "./reactivity"
import {
	BindingFunc,
	ChildDom,
	ElementProps,
	Elements,
	NativeChildDom,
	Optional,
	Primitive,
	PropValueOrDerived,
} from "./reactivity.types"

//////// State ////////

/** Dynamic cache of setter functions for different element types and their various properties to improve prop performance of repeated element props. */
const ELEMENT_PROP_SETTER_CACHE_BY_NAME: Record<
	string,
	((v: any) => void) | undefined
> = {}

//////// API ////////

/** Repository of all standard HTML element functions. */
export const html: Elements<HTMLElementTagNameMap> = new Proxy({}, tagHandler())

/** Repository of all SVG namespace element functions. */
export const svg: Elements<SVGElementTagNameMap> = new Proxy(
	{},
	tagHandler("http://www.w3.org/2000/svg"),
)

/** Repository of all MathML namespace element functions. */
export const math: Elements<MathMLElementTagNameMap> = new Proxy(
	{},
	tagHandler("http://www.w3.org/1998/Math/MathML"),
)

/** Adds the given children elements or effects to the given DOM element and returns it. */
export function mount(dom: Element, ...children: readonly ChildDom[]): Element {
	// @ts-ignore ts-2589 because nesting needs to be limitless
	for (const rawChild of children.flat(Infinity) as (
		| NativeChildDom
		| State<Optional<Primitive>>
		| BindingFunc
	)[]) {
		let child = undefined

		if (rawChild instanceof State) child = bind(() => rawChild.val)
		else if (typeof rawChild === "function") child = bind(rawChild)
		else if (rawChild instanceof Node) child = rawChild
		else if (
			["boolean", "string", "number", "bigint"].includes(typeof rawChild)
		)
			child = String(rawChild)

		if (child != undefined) dom.append(child)
	}

	return dom
}

/** Replaces the given DOM element via the given reactive function. */
export function hydrate(
	dom: ChildNode,
	func: (dom: ChildNode) => Optional<ChildNode>,
): void {
	// @ts-ignore ts-2345 because this specific use case of direct replacement is extremely difficult to annotate type
	return update(dom, bind(func, dom))
}

//////// Internals ////////

/** Creates a proxy object that returns an element creation function for the accessed property for the given element namespace. */
function tagHandler(namespace?: string) {
	return {
		get: (_: any, name: string) => tag.bind(undefined, namespace, name),
	}
}

/** Replaces the given target DOM element with the given replacement if defined, otherwise removes target element from DOM. */
export function update(target: ChildNode, replacement: Optional<ChildNode>) {
	if (!replacement) return target.remove()

	if (replacement !== target) return target.replaceWith(replacement)
}

/** Create a new DOM element of the given namespace, kind and with the given props and children. */
function tag<T>(
	namespace: string | undefined,
	elementName: string,
	propsOrChild?: ElementProps<T> | ChildDom,
	...restChildren: readonly ChildDom[]
): globalThis.Element {
	// Of all potential `propsOrChild` values, only a props object will *directly* inherit Object
	const hasProps =
		propsOrChild !== undefined &&
		Object.getPrototypeOf(propsOrChild) === Object.prototype

	// Figure out if any props were given
	const [{ is, ...props }, ...children] = hasProps
		? [propsOrChild as ElementProps<T>, restChildren]
		: [{} as ElementProps<T>, [propsOrChild as ChildDom, ...restChildren]]

	const dom = namespace
		? document.createElementNS(namespace, elementName, { is })
		: document.createElement(elementName, { is })

	// Apply any given props
	Object.entries(props).forEach(([key, value]) => applyProp(dom, key, value))

	return mount(dom, children)
}

/** Applies the given property to the given DOM element, using the appropriate setter function or attribute. */
function applyProp<T>(
	dom: Element,
	propName: string,
	propValue: ElementProps<T>[string],
) {
	const isOptional = propName.startsWith("$")
	const isEventHandler = propName.startsWith("on")

	propName = isOptional ? propName.slice(1) : propName

	if (propName.startsWith(CONTEXT_OUT_PREFIX)) {
		return setTimeout(() => {
			const retrievedContext = getContext(
				dom as HTMLElement,
				propName.slice(CONTEXT_OUT_PREFIX.length),
			)

			if (typeof propValue === "object" && propValue instanceof State) {
				propValue.val = retrievedContext.val
			} else if (typeof propValue === "function") {
				propValue(retrievedContext)
			} else {
				console.warn(
					`Context out property "${propName}" on element <${dom.tagName}> expects a function or State, but got ${typeof propValue}.`,
				)
			}
		})
	}

	if (propName.startsWith(CONTEXT_IN_PREFIX))
		return bind(
			() => (
				!isOptional ||
				(typeof propValue === "object" &&
					propValue instanceof State &&
					propValue.val)
					? setContext(
							dom as HTMLElement,
							propName.slice(CONTEXT_IN_PREFIX.length),
							propValue,
						)
					: removeContext(
							dom as HTMLElement,
							propName.slice(CONTEXT_IN_PREFIX.length),
						),
				dom
			),
		)

	const setter = getPropSetter(dom, propName, isEventHandler)

	if (!isEventHandler && typeof propValue === "function")
		propValue = derive(propValue as PropValueOrDerived<any>)

	if (typeof propValue === "object" && propValue instanceof State)
		return bind(
			() => (
				!isOptional || propValue.val
					? setter(propValue.val, propValue._old)
					: dom.removeAttribute(propName),
				dom
			),
		)

	if (isOptional)
		return bind(
			() => (
				propValue.val
					? setter(propValue)
					: dom.removeAttribute(propName),
				dom
			),
		)

	setter(propValue)
}

/** Gets the appropriate setter function for the given property name on the given DOM element, caching it in case of re-use. */
function getPropSetter(
	dom: Element,
	propName: string,
	isEventHandler: boolean,
): (value: any, oldValue?: any) => void {
	const cacheKey = `${dom.tagName}:${propName}`

	let propSetter = ELEMENT_PROP_SETTER_CACHE_BY_NAME[cacheKey]

	if (!propSetter) {
		propSetter = getPropDescriptor(
			Object.getPrototypeOf(dom),
			propName,
		)?.set

		ELEMENT_PROP_SETTER_CACHE_BY_NAME[cacheKey] = propSetter
	}

	if (isEventHandler)
		return <T>(value: (arg?: any) => T, oldValue?: (arg?: any) => T) => {
			const eventName = propName.slice(2)

			if (oldValue) dom.removeEventListener(eventName, oldValue)

			dom.addEventListener(eventName, value)
		}

	return propSetter?.bind(dom) ?? dom.setAttribute.bind(dom, propName)
}
/** Gets the descriptor for the given property name for the given object via its prototype chain. */
function getPropDescriptor(
	proto: any,
	propName: string,
): PropertyDescriptor | undefined {
	if (!proto || proto === Object.prototype) return undefined

	const descriptor = Object.getOwnPropertyDescriptor(proto, propName)

	if (descriptor) return descriptor

	return getPropDescriptor(Object.getPrototypeOf(proto), propName)
}
