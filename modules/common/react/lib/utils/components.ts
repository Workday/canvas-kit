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
    ref: T extends undefined
      ? never
      : React.Ref<T extends keyof ElementTagNameMap ? ElementTagNameMap[T] : T>,
    as: T extends undefined ? never : T
  ): React.ReactElement | null;
}

/**
 * Factory function that creates components to be exported. It enforces React ref forwarding, `as`
 * prop, display name, and sub-components, and handles proper typing without much boiler plate. The
 * return type is `Component<element, Props>` which looks like `Component<'div', Props>` which is a
 * clean interface that tells you the default element that is used.
 */
export const createComponent = <T extends React.ElementType>(as?: T) => <P, SubComponents = {}>({
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
  const ReturnedComponent = (React.forwardRef<T, P>((props, ref) => {
    return Component(
      props,
      //@ts-ignore Problems with type constraints of T and T extends ElementTagName ? ... This doesn't cause a problem, not sure it is worth fixing
      ref,
      as
    );
    // Component({as, ...props}, ref)
  }) as any) as Component<T, P> & SubComponents;

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
export function useForkRef<T>(ref1: React.Ref<T>, ref2: React.Ref<T>): React.Ref<T> {
  return (value: T) => {
    setRef(ref1, value);
    setRef(ref2, value);
  };
}

/**
 * This function is the same as calling `React.useRef(null)` with the added benefit of extracting
 * the type from the ref passed to it. This means you don't have to provide a generic to the
 * `useRef` function
 * @param ref The React ref passed from the `createComponent` factory function
 */
export function useComponentRef<T>(ref: React.Ref<T>) {
  return React.useRef<T>(null);
}
