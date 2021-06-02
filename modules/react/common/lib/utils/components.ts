import React from 'react';
import {mergeProps} from './mergeProps';
import {Model} from './models';

/**
 * Adds the `as` to the style interface to support `as` in styled components
 * This type and usage should be removed with Emotion 11
 */
export type StyledType = {
  as?: React.ElementType;
};

/**
 * Extract a Ref from T if it exists
 * This will return the following:
 *
 * - `undefined` => `never`
 * - `'button'` => `React.Ref<HTMLButtonElement>`
 * - `ElementComponent<'button', ButtonProps>` => `React.Ref<HTMLButtonElement>`
 */
type ExtractRef<T> = T extends undefined // test if T was even passed in
  ? never // T not passed in, we'll set the ref to `never`
  : React.Ref<
      T extends keyof ElementTagNameMap // test if T is an element string like 'button' or 'div'
        ? ElementTagNameMap[T] // if yes, the ref should be the element interface. `'button' => HTMLButtonElement`
        : T extends ElementComponent<infer U, any> // if no, check if we can infer the the element type from an `ElementComponent` interface
        ? U extends keyof ElementTagNameMap // test inferred U to see if it extends an element string
          ? ElementTagNameMap[U] // if yes, use the inferred U and convert to an element interface. `'button' => HTMLButtonElement`
          : U // if no, fall back to inferred U. Hopefully it is already an element interface
        : T // if no, fall back to T. Hopefully it is already an element interface
    >;

/**
 * Generic component props with "as" prop
 * @template P Additional props
 * @template ElementType React component or string element
 */
export type PropsWithAs<P, ElementType extends React.ElementType> = P &
  Omit<React.ComponentProps<ElementType>, 'as' | 'state' | keyof P> & {
    /**
     * Optional ref. If the component represents an element, this ref will be a reference to the
     * real DOM element of the component. If `as` is set to an element, it will be that element.
     * If `as` is a component, the reference will be to that component (or element if the component
     * uses `React.forwardRef`).
     */
    ref?: ExtractRef<ElementType>;
  };

/**
 * Extract props from any component that was created using `createComponent`.
 * @example
 * interface MyProps extends ExtractProps<typeof Card.Body> {}
 */
export type ExtractProps<T> = T extends ElementComponent<any, infer P>
  ? P
  : T extends Component<infer P>
  ? P
  : {};

/**
 * Component type that allows for `as` to change the element or component type.
 * Passing `as` will correctly change the allowed interface of the JSX element
 */
export type ElementComponent<T extends React.ElementType, P> = {
  <ElementType extends React.ElementType>(
    props: PropsWithAs<P, ElementType> & {
      /**
       * Optional override of the default element used by the component. Any valid tag or Component.
       * If you provided a Component, this component should forward the ref using `React.forwardRef`
       * and spread extra props to a root element.
       */
      as: ElementType;
    }
  ): JSX.Element;
  (props: PropsWithAs<P, T>): JSX.Element;
  displayName?: string;
};

export type Component<P> = {
  (props: P): JSX.Element;
  displayName?: string;
};

interface RefForwardingComponent<T, P = {}> {
  (
    props: React.PropsWithChildren<P> & {as?: React.ReactElement<any>},
    /**
     * A ref to be forwarded. Pass it along to the root element. If no element was passed, this
     * will result in a `never`
     */
    ref: ExtractRef<T>,
    /**
     * An element - either a JSX element or a `ElementComponent`. This should be passed as an `as`
     * to a root element or be the root element. If no element was passed, this will result in a
     * `never`
     */
    Element: T extends undefined ? never : T
  ): React.ReactElement | null;
}

/**
 * Factory function that creates components to be exported. It enforces React ref forwarding, `as`
 * prop, display name, and sub-components, and handles proper typing without much boiler plate. The
 * return type is `Component<element, Props>` which looks like `Component<'div', Props>` which is a
 * clean interface that tells you the default element that is used.
 */
export const createComponent = <T extends React.ElementType | undefined = undefined>(as?: T) => <
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
   *   // `Element` is what's passed to the `as` of your component. If no `as` was defined, it
   *   // will be the default element. It will be 'div' or even a another Component!
   *   return (
   *     <Element ref={ref}>{children}</Element>
   *   )
   * }
   *
   * @example
   * Component: ({children}, ref, Element) {
   *   // `Element` can be passed via `as` to the next component
   *   return (
   *     <AnotherElement as={Element} ref={ref}>{children}</AnotherElement>
   *   )
   * }
   */
  Component: RefForwardingComponent<T, P>;
  /**
   * Used in container components
   */
  subComponents?: SubComponents;
}): (T extends undefined
  ? Component<P>
  : ElementComponent<
      // T is not `undefined` here, but Typescript thinks it could be, so we add another `undefined`
      // check and cast to a `React.FC` to match a valid signature for `ElementComponent`.
      // `React.FC` was chosen as the simplest valid interface.
      T extends undefined ? React.FC : T,
      P
    >) &
  SubComponents => {
  const ReturnedComponent = React.forwardRef<T, P & {as?: React.ElementType}>(
    ({as: asOverride, ...props}, ref) => {
      return Component(
        props as P,
        // @ts-ignore React considers no passed ref as `null`, Typescript considers this
        // `undefined`. It works at runtime, so I don't think this is fixable or worth fixing.
        ref,
        asOverride || as
      );
    }
  ) as any;

  Object.keys(subComponents || {}).forEach((key: any) => {
    // @ts-ignore Not worth typing correctly
    ReturnedComponent[key] = subComponents[key];
  });
  ReturnedComponent.displayName = displayName;

  return ReturnedComponent;
};

/**
 * Factory function to crate a behavior hook with correct generic types. It takes a function that
 * return props and returns a function that will also require `elemProps` and will call `mergeProps` for
 * you. If your hook makes use of the `ref`, you will have to also use `useLocalRef` to properly fork
 * the ref.
 *
 * @example
 * const useMyHook = createHook((model: MyModel, ref) => {
 *   const { localRef, elementRef } = useLocalRef(ref);
 *   // do whatever with `localRef` which is a RefObject
 *
 *   return {
 *     onClick: model.events.doSomething,
 *     ref: elementRef,
 *   };
 * });
 *
 * // Equivalent to:
 * const useMyHook = <P extends {}, R>(
 *   model: MyModel,
 *   elemProps: P,
 *   ref: React.Ref<R>
 * ) => {
 *   const { localRef, elementRef } = useLocalRef(ref);
 *   // do whatever with `localRef` which is a RefObject
 *
 *   return mergeProps({
 *     onClick: model.events.doSomething,
 *     ref: elementRef,
 *   }, elemProps);
 * };
 *
 * @param fn Function that takes a model and optional ref and returns props
 */
export const createHook = <M extends Model<any, any>, PO extends {}, PI extends {}>(
  fn: (model: M, ref?: React.Ref<any>, elemProps?: PI) => PO
): BehaviorHook<M, PO> => {
  return (model, elemProps, ref) => {
    const props = mergeProps(fn(model, ref, elemProps || ({} as any)), elemProps || ({} as any));
    if (!props.hasOwnProperty('ref')) {
      // This is the weird "incoming ref isn't in props, but outgoing ref is in props" thing
      props.ref = ref;
    }
    return props;
  };
};

export type BehaviorHook<M extends Model<any, any>, O extends {}> = <P extends {}, R>(
  model: M,
  elemProps?: P,
  ref?: React.Ref<R>
) => O & P & (R extends HTMLOrSVGElement ? {ref: React.Ref<R>} : {});

function setRef<T>(ref: React.Ref<T> | undefined, value: T): void {
  if (ref) {
    if (typeof ref === 'function') {
      ref(value);
    } else {
      // Refs are readonly, but we can technically write to it without issue
      (ref as React.MutableRefObject<T>).current = value;
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
export function useForkRef<T>(ref1?: React.Ref<T>, ref2?: React.Ref<T>): (instance: T) => void {
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
export function useLocalRef<T>(ref?: React.Ref<T>) {
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

/**
 * Compose many hooks together. Assumes hooks are using `mergeProps`. Returns a function that will
 * receive a model and return props to be applied to a component. These props should always be
 * applied last on the Component. The props will override as follows: rightmost hook props override
 * leftmost hook props which are overridden by props passed to the composeHooks function.
 *
 * A `ref` should be passed for hooks that require a ref. Each hook should fork the ref using
 * `useLocalRef`, passing the `elementRef` in the returned props object. This ref will be passed to
 * the next hook.
 *
 * @example
 * const MyComponent = React.forwardRef(({ children, model, ...elemProps }, ref) => {
 *   const props = composeHooks(useHook1, useHook2)(model, elemProps, ref)
 *
 *   return <div id="foo" {...props}>{children}</div>
 * })
 */
export function composeHooks<M extends Model<any, any>, O1 extends {}, P extends {}, O2 extends {}>(
  hook1: (model: M, props: P, ref: React.Ref<any>) => O1,
  hook2: (model: M, props: P, ref: React.Ref<any>) => O2
): BehaviorHook<M, O1 & O2>;

export function composeHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {}
>(
  hook1: (model: M, props: P, ref: React.Ref<R>) => O1,
  hook2: (model: M, props: P, ref: React.Ref<R>) => O2,
  hook3: (model: M, props: P, ref: React.Ref<R>) => O3
): BehaviorHook<M, O1 & O2 & O3>;
export function composeHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {},
  O4 extends {}
>(
  hook1: (model: M, props: P, ref: React.Ref<R>) => O1,
  hook2: (model: M, props: P, ref: React.Ref<R>) => O2,
  hook3: (model: M, props: P, ref: React.Ref<R>) => O3,
  hook4: (model: M, props: P, ref: React.Ref<R>) => O4
): BehaviorHook<M, O1 & O2 & O3 & O4>;
export function composeHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {},
  O4 extends {},
  O5 extends {}
>(
  hook1: (model: M, props: P, ref: React.Ref<R>) => O1,
  hook2: (model: M, props: P, ref: React.Ref<R>) => O2,
  hook3: (model: M, props: P, ref: React.Ref<R>) => O3,
  hook4: (model: M, props: P, ref: React.Ref<R>) => O4,
  hook5: (model: M, props: P, ref: React.Ref<R>) => O5
): BehaviorHook<M, O1 & O2 & O3 & O4 & O5>;
export function composeHooks<M extends Model<any, any>, R, P extends {}, O extends {}>(
  ...hooks: ((model: M, props: P, ref: React.Ref<R>) => O)[]
): BehaviorHook<M, O> {
  return (model, props, ref) => {
    return hooks.reverse().reduce((props: any, hook) => {
      return hook(model, props, props.ref || ref);
    }, props);
  };
}
