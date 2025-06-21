export type Optional<T> = T | null | undefined;
export type Primitive = string | number | boolean | bigint;
export type Val<T> = State<T> | T;
export type PropValue<T> = Optional<T> | ((e: any) => T) | OptionalAttribute<Optional<T>>;
export type PropValueOrDerived<T> = PropValue<T> | Readonly<State<Optional<T>>> | (() => PropValue<T>);
export type GenericProps = Record<string, PropValueOrDerived<Primitive> | ChildDom | any> & {
    class?: PropValueOrDerived<string>;
    is?: string;
};
export type SpecificProps<ElementType> = Partial<{
    [K in keyof ElementType]: PropValueOrDerived<ElementType[K] | Primitive>;
}>;
export type ElementProps<T = Element> = GenericProps & SpecificProps<T>;
export type ValidChildDomValue = Optional<Primitive | ChildNode>;
export type BindingFunc = (dom?: ChildDom) => ChildDom;
export type ChildDom = ValidChildDomValue | Readonly<State<Optional<Primitive>>> | BindingFunc | readonly ChildDom[];
export type TagFunc<Result> = (propsOrChild?: ElementProps<Result> | ChildDom, ...rest: readonly ChildDom[]) => Result;
type Tags<T> = Readonly<Record<string, TagFunc<Element>>> & {
    [K in keyof T]: TagFunc<T[K]>;
};
type Binding<T = any> = {
    func: (dom: ChildNode) => Optional<T>;
    state: State<T> | undefined;
    _dom: Optional<{
        isConnected: boolean;
    }>;
};
export declare class State<T> {
    _rawVal: T;
    _oldVal: T;
    _bindings: Binding[];
    _listeners: Binding[];
    _onDestroy?: () => void;
    constructor(value: T, onDestroy?: () => void);
    /** Gets the state's current value and adds its accessor to the state's reactive effects. */
    get val(): T;
    /** Gets the state's current value *without* adding any reactive effects to its accessor. */
    get rawVal(): T;
    /** Gets the state's previous value and adds its accessor to the state's reactive effects. */
    get oldVal(): T;
    /** Sets the state's value and adds its assigner to the state's reactive dependencies. */
    set val(v: T);
    /** Sets the state's value without creating or triggering any reactivity. */
    set rawVal(v: T);
}
declare class OptionalAttribute<T> {
    func: () => T;
    constructor(func: () => T);
}
/** Creates a piece of reactive data with the given initial value. */
export declare function state<T>(value: T, onDestroy?: () => void): State<T>;
/** Applies an attribute as normal except will reactively remove the attribute whenever the given function returns a nullish value. */
export declare function optionalAttribute<T>(val: () => T): OptionalAttribute<T>;
/** Create a derived state or effect which reacts to changes to any states it depends on. */
export declare function derive<T>(func: () => T, onDestroy?: () => void): State<T>;
/** Adds the given children elements or effects to the given DOM element and returns it. */
export declare function add(dom: Element, ...children: readonly ChildDom[]): Element;
/** Repository of all standard HTML element functions. */
export declare const html: Tags<HTMLElementTagNameMap>;
/** Repository of all SVG namespace element functions. */
export declare const svg: Tags<SVGElementTagNameMap>;
/** Repository of all MathML namespace element functions. */
export declare const math: Tags<MathMLElementTagNameMap>;
/** Replaces the given DOM element via the given reactive function. */
export declare function hydrate(dom: ChildNode, func: (dom: ChildNode) => Optional<ChildNode>): void;
export * from "./utils";
