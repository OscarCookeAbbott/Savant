

//////// Types & Interfaces ////////

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

export type DependencyBundle = {
    _getters: Set<State<any>>
    _setters: Set<State<any>>
}

export type Binding<T = any> = {
    func: (dom: ChildNode) => Optional<T>
    state: State<T> | undefined
    _dom: Optional<{ isConnected: boolean }>
}

export type ConnectedBinding<T = any> = Binding<T> & {
    _dom: { isConnected: boolean }
}


//////// Class Declarations ////////

export declare class State<T> {
    _rawVal: T
    _oldVal: T

    _bindings: Binding[]
    _listeners: Binding[]

    _onDestroy?: () => void

    constructor(value: T, onDestroy?: () => void)

    /** Gets the state's current value and adds its accessor to the state's reactive effects. */
    get val(): T

    /** Gets the state's current value *without* adding any reactive effects to its accessor. */
    get rawVal(): T

    /** Gets the state's previous value and adds its accessor to the state's reactive effects. */
    get oldVal(): T

    /** Sets the state's value and adds its assigner to the state's reactive dependencies. */
    set val(v)

    /** Sets the state's value without creating or triggering any reactivity. */
    set rawVal(v)
}
