//////// Types & Interfaces ////////

export type Optional<T> = T | null | undefined

export type Primitive = string | number | boolean | bigint

export type Val<T> = State<T> | T

export type PropValue<T> =
    | Optional<T>
    | ((e: any) => T)
    | OptionalAttribute<Optional<T>>

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
}

export type SpecificProps<ElementType> = Partial<{
    [K in keyof ElementType]: PropValueOrDerived<ElementType[K] | Primitive>
}>

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

type Tags<T> = Readonly<Record<string, TagFunc<Element>>> & {
    [K in keyof T]: TagFunc<T[K]>
}

type DependencyBundle = {
    _getters: Set<State<any>>
    _setters: Set<State<any>>
}

type Binding<T = any> = {
    func: (dom: ChildNode) => Optional<T>
    state: State<T> | undefined
    _dom: Optional<{ isConnected: boolean }>
}

type ConnectedBinding<T = any> = Binding<T> & {
    _dom: { isConnected: boolean }
}

//////// State & Reactivity Classes ////////

export class State<T> {
    _rawVal: T
    _oldVal: T

    _bindings: Binding[]
    _listeners: Binding[]

    _onDestroy?: () => void

    constructor(value: T, onDestroy?: () => void) {
        this._rawVal = value
        this._oldVal = value

        this._bindings = []
        this._listeners = []

        this._onDestroy = onDestroy
    }

    /** Gets the state's current value and adds its accessor to the state's reactive effects. */
    get val(): T {
        curDependencies?._getters?.add(this)
        return this._rawVal
    }

    /** Gets the state's current value *without* adding any reactive effects to its accessor. */
    get rawVal(): T {
        return this._rawVal
    }

    /** Gets the state's previous value and adds its accessor to the state's reactive effects. */
    get oldVal(): T {
        curDependencies?._getters?.add(this)
        return this._oldVal
    }

    /** Sets the state's value and adds its assigner to the state's reactive dependencies. */
    set val(v) {
        curDependencies?._setters?.add(this)

        if (v === this.rawVal) return

        this._rawVal = v

        if (this._bindings.length + this._listeners.length === 0) {
            this._oldVal = v

            return
        }

        derivedStates?.add(this)
        changedStates = addAndScheduleOnFirst(changedStates, this, updateDoms)
    }

    /** Sets the state's value without creating or triggering any reactivity. */
    set rawVal(v) {
        if (v === this.rawVal) return

        this._rawVal = v

        if (this._bindings.length + this._listeners.length === 0) {
            this._oldVal = v

            return
        }
    }
}

class OptionalAttribute<T> {
    func: () => T

    constructor(func: () => T) {
        this.func = func
    }
}

///////// Constants ////////

const DELETE_CYCLE_INTERVAL_MS = 1000
const ALWAYS_CONNECTED_DOM = { isConnected: true }

//////// Internal State ////////

let changedStates: Set<State<any>> | undefined = undefined
let derivedStates: Set<State<any>> | undefined = undefined
let curDependencies: DependencyBundle | undefined = undefined
let curNewDerives: Binding[] | undefined = undefined

let statesToDelete: Set<State<any>> | undefined = undefined

/** Dynamic cache of setter functions for different element types and their various properties. */
let elementPropSetterCache: Record<string, ((v: any) => void) | undefined> = {}

///////// Utility Functions ////////

function addAndScheduleOnFirst(
    set: Set<State<any>> | undefined,
    s: State<any>,
    f: () => void,
    waitMs?: number,
) {
    if (!set) setTimeout(f, waitMs)

    return (set ?? new Set()).add(s)
}

/** Executes the given function with an optional initial value and captures any accessed states as dependencies. */
function runAndCaptureDeps<T, V>(
    func: (value: V) => T,
    dependencies: DependencyBundle,
    value: V,
): T {
    let prevDeps = curDependencies

    curDependencies = dependencies

    // Execute the function, any accessed states will add themselves to `curDependencies`
    const result = func(value)

    curDependencies = prevDeps

    return result
}

/** Filters all DOM-disconnected bindings from the given array of bindings. */
function filterDisconnected<T>(l: Binding<T>[]): ConnectedBinding<T>[] {
    return l.filter((b) => b._dom?.isConnected) as ConnectedBinding<T>[]
}

/** Queues the given state for deletion. */
function deleteStates<T>(dependency: State<T>) {
    statesToDelete = addAndScheduleOnFirst(
        statesToDelete,
        dependency,
        () => {
            for (let state of statesToDelete ?? []) {
                state._bindings = filterDisconnected(state._bindings)
                state._listeners = filterDisconnected(state._listeners)

                if (
                    state._bindings.length === 0 &&
                    state._listeners.length === 0
                )
                    state._onDestroy?.()
            }

            statesToDelete = undefined
        },
        DELETE_CYCLE_INTERVAL_MS,
    )
}

///////// Core Reactivity API ////////

/** Creates a piece of reactive data with the given initial value. */
export function state<T>(value: T, onDestroy?: () => void): State<T> {
    return new State(value, onDestroy)
}

/** Applies an attribute as normal except will reactively remove the attribute whenever the given function returns a nullish value. */
export function optionalAttribute<T>(val: () => T): OptionalAttribute<T> {
    return new OptionalAttribute(val)
}

/** Binds the given element-creation function and any states created within with a given element. */
function bind(
    func: (dom: ChildDom) => Optional<ChildDom>,
    dom?: ChildDom,
): ChildNode {
    const dependencies: DependencyBundle = {
        _getters: new Set<State<any>>(),
        _setters: new Set<State<any>>(),
    }
    const binding: Binding<ChildDom> = {
        func,
        state: undefined,
        _dom: undefined,
    }
    const prevNewDerives = curNewDerives

    curNewDerives = []

    const newDomBase = runAndCaptureDeps(func, dependencies, dom)

    const newDom =
        (newDomBase ?? document) instanceof Node
            ? (newDomBase as ChildNode)
            : new Text(String(newDomBase))

    for (const getter of dependencies._getters)
        if (!dependencies._setters.has(getter)) {
            deleteStates(getter)
            getter._bindings.push(binding)
        }

    for (let newDerive of curNewDerives) newDerive._dom = newDom

    curNewDerives = prevNewDerives

    return (binding._dom = newDom)
}

/** Create a functional association which automatically reacts to any stateful data it accesses. */
function deriveDom<T extends ChildNode>(
    func: (dom: ChildNode) => T,
    resultState: State<T>,
    dom?: ChildNode,
): State<T> {
    const dependencies: DependencyBundle = {
        _getters: new Set<State<any>>(),
        _setters: new Set<State<any>>(),
    }

    resultState.val = runAndCaptureDeps(func, dependencies, resultState.rawVal)

    const listener: Binding<T> = {
        func,
        state: resultState,
        _dom: dom,
    }

    if (!listener._dom)
        if (!curNewDerives) listener._dom = ALWAYS_CONNECTED_DOM
        else curNewDerives.push(listener)

    for (let getter of dependencies._getters)
        if (!dependencies._setters.has(getter)) {
            deleteStates(getter)
            getter._listeners.push(listener)
        }

    return resultState as State<T>
}

/** Create a derived state or effect which reacts to changes to any states it depends on. */
export function derive<T>(func: () => T, onDestroy?: () => void): State<T> {
    const dependencies: DependencyBundle = {
        _getters: new Set<State<any>>(),
        _setters: new Set<State<any>>(),
    }

    const resultState = state(
        runAndCaptureDeps(func, dependencies, undefined),
        onDestroy,
    )

    const listener: Binding<T> = {
        func,
        state: resultState,
        _dom: undefined,
    }

    if (!listener._dom)
        if (!curNewDerives) listener._dom = document.getRootNode().firstChild
        else curNewDerives.push(listener)

    for (let getter of dependencies._getters)
        if (!dependencies._setters.has(getter)) {
            deleteStates(getter)
            getter._listeners.push(listener)
        }

    return resultState
}

//////// DOM Manipulation ////////

/** Adds the given children elements or effects to the given DOM element and returns it. */
export function add(dom: Element, ...children: readonly ChildDom[]): Element {
    // @ts-ignore ts-2589 because nesting needs to be limitless
    for (const rawChild of children.flat(Infinity) as (
        | ValidChildDomValue
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

/** Create a new DOM element of the given namespace, kind and with the given props and children. */
function tag<T>(
    ns: string | undefined,
    name: string,
    propsOrChild?: ElementProps<T> | ChildDom,
    ...restChildren: readonly ChildDom[]
): globalThis.Element {
    // Of all potential `propsOrChild` values, only a props object will *directly* inherit Object
    const hasProps = Object.getPrototypeOf(propsOrChild) === Object.prototype

    const [{ is, ...props }, ...children] = hasProps
        ? [propsOrChild as ElementProps<T>, restChildren]
        : [{}, [propsOrChild as ChildDom, ...restChildren]]

    const dom = ns
        ? document.createElementNS(ns, name, { is })
        : document.createElement(name, { is })

    for (let [propName, propValue] of Object.entries(props)) {
        const getPropDescriptor: (
            proto: any,
        ) => PropertyDescriptor | undefined = (proto: any) =>
            proto
                ? (Object.getOwnPropertyDescriptor(proto, propName) ??
                  getPropDescriptor(Object.getPrototypeOf(proto)))
                : undefined

        const cacheKey = `${name},${propName}`

        // Set prop via proper function if existent
        const elementPropSetter = (elementPropSetterCache[cacheKey] ??=
            getPropDescriptor(Object.getPrototypeOf(dom))?.set)

        const setter = propName.startsWith("on")
            ? <T>(value: (arg?: any) => T, oldValue?: (arg?: any) => T) => {
                  const eventName = propName.slice(2)

                  if (oldValue) dom.removeEventListener(eventName, oldValue)

                  dom.addEventListener(eventName, value)
              }
            : (elementPropSetter?.bind(dom) ??
              dom.setAttribute.bind(dom, propName))

        if (!propName.startsWith("on") && typeof propValue === "function") {
            propValue = derive(propValue as PropValueOrDerived<any>)
            bind(() => (setter(propValue.val, propValue._oldVal), dom))
            continue
        }

        if (typeof propValue === "object" && propValue instanceof State) {
            bind(() => (setter(propValue.val, propValue._oldVal), dom))
            continue
        }

        if (
            typeof propValue === "object" &&
            propValue instanceof OptionalAttribute
        ) {
            const binding = derive(propValue.func)
            bind(
                () => (
                    binding.val
                        ? setter(binding.val, binding._oldVal)
                        : dom.removeAttribute(propName),
                    dom
                ),
            )
            continue
        }

        // @ts-expect-error Argument type may not match setter signature
        setter(propValue)
    }

    return add(dom, children)
}

function update(dom: ChildNode, newDom: Optional<ChildNode>) {
    if (!newDom) return dom.remove()

    if (newDom !== dom) return dom.replaceWith(newDom)
}

function updateDoms() {
    let iter = 0

    let changedDerivedStates = [...(changedStates ?? [])].filter(
        (s) => s.rawVal !== s._oldVal,
    )

    do {
        derivedStates = new Set()

        const connectedDerivedStates = new Set(
            changedDerivedStates.flatMap(
                (s) => (s._listeners = filterDisconnected(s._listeners)),
            ),
        )

        for (let connectedDerivedState of connectedDerivedStates) {
            deriveDom(
                connectedDerivedState.func,
                // @ts-expect-error State<any> | undefined not assignable to State<any>
                connectedDerivedState.state,
                connectedDerivedState._dom,
            )
            // @ts-expect-error Type 'undefined' is not assignable to type '{ isConnected: boolean; }'
            connectedDerivedState._dom = undefined
        }
    } while (
        ++iter < 100 &&
        (changedDerivedStates = [...(derivedStates ?? [])]).length > 0
    )

    const actuallyChangedStates = [...(changedStates ?? [])].filter(
        (s) => s.rawVal !== s._oldVal,
    )

    changedStates = undefined

    for (let binding of new Set(
        actuallyChangedStates.flatMap(
            (s) => (s._bindings = filterDisconnected(s._bindings)),
        ),
    )) {
        // @ts-expect-error Type mismatch for ChildNode and binding._dom
        update(binding._dom, bind(binding.func, binding._dom))
        // @ts-expect-error Type 'undefined' is not assignable to type '{ isConnected: boolean; }'
        binding._dom = undefined
    }

    for (let changedState of actuallyChangedStates) {
        changedState._oldVal = changedState.rawVal
    }
}

/** Creates a dynamic-property object handler for the given element namespace. */
function tagHandler(ns?: string) {
    return {
        get: (_: any, name: string) => tag.bind(undefined, ns, name),
    }
}

/** Repository of all standard HTML element functions. */
export const html: Tags<HTMLElementTagNameMap> = new Proxy({}, tagHandler())

/** Repository of all SVG namespace element functions. */
export const svg: Tags<SVGElementTagNameMap> = new Proxy(
    {},
    tagHandler("http://www.w3.org/2000/svg"),
)

/** Repository of all MathML namespace element functions. */
export const math: Tags<MathMLElementTagNameMap> = new Proxy(
    {},
    tagHandler("http://www.w3.org/1998/Math/MathML"),
)

/** Replaces the given DOM element via the given reactive function. */
export function hydrate(
    dom: ChildNode,
    func: (dom: ChildNode) => Optional<ChildNode>,
): void {
    // @ts-expect-error Type mismatch for ChildNode and dom
    return update(dom, bind(func, dom))
}
