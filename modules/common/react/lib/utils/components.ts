import React from 'react';

/**
 * Adds the `as` to the style interface to support `as` in styled components
 * This type and usage should be removed with Emotion 11
 */
export type StyledType = {
  as?: React.ElementType;
};

/**
 * Generic component props with "as" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type PropsWithAs<P, T extends React.ElementType> = P &
  Omit<React.ComponentProps<T>, 'as' | 'state' | keyof P>;

/**
 * Component type that allows for `as` to change the element or component type.
 * Passing `as` will correctly change the allowed interface of the JSX element
 */
export type Component<T extends React.ElementType, P> = {
  <TT extends React.ElementType>(props: PropsWithAs<P, TT> & {as: TT}): JSX.Element;
  (props: PropsWithAs<P, T>): JSX.Element;
  displayName?: string;
};
interface RefForwardingComponent<T, P = {}> {
  (
    props: React.PropsWithChildren<P> & {as?: React.ReactElement<any>},
    ref: T extends null
      ? never
      : React.Ref<T extends keyof ElementTagNameMap ? ElementTagNameMap[T] : T>,
    as: T extends undefined ? never : T
  ): React.ReactElement | null;
}

/**
 * If no element is passed to `createComponent`, a `NulLElement` will be returned indicating there
 * is no element type.
 */
type NullElement = () => null;

/**
 * Factory function that creates components to be exported. It enforces React ref forwarding, `as`
 * prop, display name, and sub-components, and handles proper typing without much boiler plate. The
 * return type is `Component<element, Props>` which looks like `Component<'div', Props>` which is a
 * clean interface that tells you the default element that is used.
 */
export const createComponent = <T extends React.ElementType = NullElement>(as?: T) => <
  P,
  SubComponents = {}
>({
  displayName,
  Component,
  subComponents,
}: {
  /** This is what the component will look like in the React dev tools. Encouraged to more easily
   * understand the component tree */
  displayName?: string;
  /** The component function. The function looks like:
   * @example
   * Component: ({children}, ref, Element) {
   *   // `Element` is what's passed to the `as` of your component. It will be 'div' or even a another Component!
   *   return (
   *     <Element ref={ref}>{children}</Element>
   *   )
   * }
   */
  Component: RefForwardingComponent<T, P>;
  /**
   * Used in container components
   */
  subComponents?: SubComponents;
}) => {
  const ReturnedComponent = (React.forwardRef<T, P & {as?: React.ElementType}>(
    ({as: asOverride, ...props}, ref) => {
      return Component(
        props as P,
        //@ts-ignore Problems with type constraints of T and T extends ElementTagName ? ... This doesn't cause a problem, not sure it is worth fixing
        ref,
        asOverride || as
      );
    }
  ) as any) as Component<T, P> & SubComponents;

  Object.keys(subComponents || {}).forEach((key: any) => {
    // @ts-ignore Not worth typing correctly
    ReturnedComponent[key] = subComponents[key];
  });
  ReturnedComponent.displayName = displayName;

  return ReturnedComponent;
};

function setRef<T>(ref: React.Ref<T>, value: T): void {
  if (ref) {
    if (typeof ref === 'function') {
      ref(value);
    } else {
      // @ts-ignore Refs are readonly, but we can technically write to it without issue
      ref.current = value;
    }
  }
}

/**
 * This function will create a new forked ref out of two input Refs. This is useful for components
 * that use `React.forwardRef`, but also need internal access to a Ref.
 *
 * This function is inspired by https://www.npmjs.com/package/@rooks/use-fork-ref
 *
 * @example
 * React.forwardRef((props, ref) => {
 *   // Returns a RefObject with a `current` property
 *   const myRef = React.useRef(ref)
 *
 *   // Returns a forked Ref function to pass to an element.
 *   // This forked ref will update both `myRef` and `ref` when React updates the element ref
 *   const elementRef = useForkRef(ref, myRef)
 *
 *   useEffect(() => {
 *     console.log(myRef.current) // `current` is the DOM instance
 *     // `ref` might be null since it depends on if someone passed a `ref` to your component
 *     // `elementRef` is a function and we cannot get a current value out of it
 *   })
 *
 *   return <div ref={elementRef}/>
 * })
 */
export function useForkRef<T>(ref1: React.Ref<T>, ref2: React.Ref<T>): (instance: T) => void {
  return (value: T) => {
    setRef(ref1, value);
    setRef(ref2, value);
  };
}

/**
 * This functions handles the common use case where a component needs a local ref and needs to
 * forward a ref to an element.
 * @param ref The React ref passed from the `createComponent` factory function
 *
 * @example
 * const MyComponent = ({children, ...elemProps}: MyProps, ref, Element) => {
 *   const { localRef, elementRef } = useLocalRef(ref);
 *
 *   // do something with `localRef` which is a `RefObject` with a `current` property
 *
 *   return <Element ref={elementRef} {...elemProps} />
 * }
 */
export function useLocalRef<T>(ref: React.Ref<T>) {
  const localRef = React.useRef<T>(null);
  const elementRef = useForkRef(ref, localRef);

  return {localRef, elementRef};
}

/**
 * Returns a model, or calls the model hook with config. Clever way around the conditional React
 * hook ESLint rule.
 * @param model A model, if provided
 * @param config Config for a model
 * @param modelHook A model hook that takes valid config
 * @example
 * const ContainerComponent = ({children, model, ...config}: ContainerProps) => {
 *   const value = useDefaultModel(model, config, useContainerModel);
 *
 *   // ...
 * }
 */
export function useDefaultModel<T, C>(
  model: T | undefined,
  config: C,
  modelHook: (config: C) => T
) {
  return model || modelHook(config);
}

/**
 * Returns a model, or returns a model context. Clever way around the conditional React hook ESLint
 * rule
 * @param model A model, if provided
 * @param context The context of a model
 * @example
 * const SubComponent = ({children, model, ...elemProps}: SubComponentProps, ref, Element) => {
 *   const {state, events} = useModelContext(model, SubComponentModelContext);
 *
 *   // ...
 * }
 */
export function useModelContext<T>(context: React.Context<T>, model?: T): T {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return model || React.useContext(context);
}
