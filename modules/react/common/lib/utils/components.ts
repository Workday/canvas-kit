import React from 'react';
import {assert} from './assert';
import {mergeProps} from './mergeProps';
import {Model} from './models';

/**
 * Adds the `as` to the style interface to support `as` in styled components
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
export type PropsWithoutAs<P, ElementType extends React.ElementType> = P &
  Omit<React.ComponentProps<ElementType>, 'as' | keyof P> & {
    /**
     * Optional ref. If the component represents an element, this ref will be a reference to the
     * real DOM element of the component. If `as` is set to an element, it will be that element.
     * If `as` is a component, the reference will be to that component (or element if the component
     * uses `React.forwardRef`).
     */
    ref?: ExtractRef<ElementType>;
  };

/**
 * Extracts only the HTML attribute interface from `JSX.IntrinsicElements[E]`. This effectively removes `ref` and `key`
 * without using `Omit` which makes the returned type more difficult to understand.
 *
 * For example:
 * JSX.IntrinsicElements['button'] // React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>
 * ExtractHTMLAttributes<JSX.IntrinsicElements['button']> // React.HTMLButtonAttributes<HTMLButtonElement>
 */
type ExtractHTMLAttributes<
  T extends React.DetailedHTMLProps<any, any>
> = T extends React.DetailedHTMLProps<infer P, any> ? P : T;

/**
 * Extract props from any component that was created using `createComponent`. It will return the
 * HTML attribute interface of the default element used with `createComponent`. If you use `as`, the
 * HTML attribute interface can change, so you can use an override to the element you wish to use.
 * You can also disable the HTML attribute by passing `never`:
 *
 * - `ExtractProps<typeof Card>`: `CardProps & React.HTMLAttributes<HTMLDivElement>`
 * - `ExtractProps<typeof Card, 'aside'>`: `CardProps & React.HTMLAttributes<HTMLElement>`
 * - `ExtractProps<typeof Card, never>`: `CardProps`
 *
 * @template TComponent The component you wish to extract props from. Needs 'typeof` in front:
 * `typeof Card`
 * @template TElement An optional override of the element that will be used. Define this if you use
 * an `as` on the component
 *
 * @example
 * interface MyProps extends ExtractProps<typeof Card.Body> {}
 *
 * ExtractProps<typeof Card>; // CardProps & React.HTMLAttributes<HTMLDivElement>
 * ExtractProps<typeof Card, 'aside'>; // CardProps & React.HTMLAttributes<HTMLElement>
 * ExtractProps<typeof Card, never>; // CardProps
 */
export type ExtractProps<
  TComponent,
  TElement extends
    | keyof JSX.IntrinsicElements
    | ElementComponent<any, any>
    | Component<any>
    | React.ComponentType<any>
    | undefined
    | never = undefined
> = ExtractMaybeModel<
  TComponent,
  TComponent extends {__element: infer E; __props: infer P} //ElementComponent<infer E, infer P> // test if `TComponent` is an `ElementComponent`, while inferring both default element and props associated
    ? [TElement] extends [never] // test if user passed `never` for the `TElement` override. We have to test `never` first, otherwise TS gets confused and `ExtractProps` will return `never`. https://github.com/microsoft/TypeScript/issues/23182
      ? P // else attach only inferred props `P`
      : TElement extends undefined // else test if TElement was defined
      ? E extends keyof JSX.IntrinsicElements // test if the inferred element `E` is in `JSX.IntrinsicElements`
        ? P & ExtractHTMLAttributes<JSX.IntrinsicElements[E]> // `TElement` wasn't explicitly defined, so let's fall back to the inferred element's HTML attribute interface + props `P`
        : P & ExtractProps<E> // E isn't in `JSX.IntrinsicElements`, return inferred props `P` + props extracted from component `E`.
      : TElement extends keyof JSX.IntrinsicElements // `TElement` was defined, test if it is in `JSX.IntrinsicElements`
      ? P & ExtractHTMLAttributes<JSX.IntrinsicElements[TElement]> // `TElement` is in `JSX.IntrinsicElements`, return inferred props `P` + HTML attributes of `TElement`
      : P & ExtractProps<TElement> // `TElement` is not in `JSX.IntrinsicElements`, return inferred props `P` + props extracted from component `TElement`.
    : TComponent extends Component<infer P> // test if `TComponent` is a `Component`, while inferring props `P`
    ? P // else attach only inferred props `P`
    : TComponent extends React.ComponentType<infer P> // test if `TComponent` is a `React.ComponentType` (class or functional component)
    ? P // it was a `React.ComponentType`, return inferred props `P`
    : {} // We don't know what `TComponent` was, return an empty object
>;

// If the component has a model, be sure to add it to the prop interface
type ExtractMaybeModel<TComponent, P> = TComponent extends {__model: infer M} // test if a model is used
  ? P & PropsWithModel<M>
  : P;

export type PropsWithModel<TModel = never> = {
  /**
   * Optional model to pass to the component. This will override the default model created for the
   * component. This can be useful if you want to access to the state and events of the model, or if
   * you have nested components of the same type and you need to override the model provided by
   * React Context.
   */
  model?: TModel;
  /**
   * Optional hook that receives the model and all props to be applied to the element. If you use
   * this, it is your responsibility to return props, merging as appropriate. For example, returning
   * an empty object will disable all elemProps hooks associated with this component. This allows
   * finer control over a component without creating a new one.
   */
  elemPropsHook?: <TProps>(model: TModel, elemProps: TProps) => any;
};

/**
 * Component type that allows for `as` to change the element or component type.
 * Passing `as` will correctly change the allowed interface of the JSX element
 */
export type ElementComponent<E extends React.ElementType, P> = {
  displayName?: string;
  <ElementType extends React.ElementType>(
    props: PropsWithoutAs<P, ElementType> & {
      /**
       * Optional override of the default element used by the component. Any valid tag or Component.
       * If you provided a Component, this component should forward the ref using `React.forwardRef`
       * and spread extra props to a root element.
       */
      as: ElementType;
    }
  ): JSX.Element;
  (props: PropsWithoutAs<P, E>): JSX.Element;
  as<E extends React.ElementType>(as: E): ElementComponent<E, P>;
  /** @private Only used internally to hold the element type for extraction */
  __element: E;
  /** @private Only used internally to hold the element type for extraction */
  __props: P;
};

/**
 * Component type that allows for `as` to change the element or component type.
 * Passing `as` will correctly change the allowed interface of the JSX element.
 * Same as `ElementComponent`, but adds a model to the interface.
 */
export type ElementComponentM<E extends React.ElementType, P, TModel> = {
  displayName?: string;
  <ElementType extends React.ElementType>(
    props: PropsWithoutAs<P, ElementType> &
      PropsWithModel<TModel> & {
        /**
         * Optional override of the default element used by the component. Any valid tag or Component.
         * If you provided a Component, this component should forward the ref using `React.forwardRef`
         * and spread extra props to a root element.
         */
        as: ElementType;
      }
  ): JSX.Element;
  (props: PropsWithoutAs<P, E> & PropsWithModel<TModel>): JSX.Element;
  as<E extends React.ElementType>(as: E): ElementComponentM<E, P, TModel>;
  /** @private Only used internally to hold the element type for extraction */
  __element: E;
  /** @private Only used internally to hold the element type for extraction */
  __props: P;
  /** @private Only used internally to hold the element type for extraction */
  __model: TModel;
};

export type ComponentM<P, TModel> = {
  displayName?: string;
  (props: P & PropsWithModel<TModel>): JSX.Element;
  /** @private Only used internally to hold the element type for extraction */
  __props: P;
  /** @private Only used internally to hold the element type for extraction */
  __model: TModel;
};

export type Component<P> = {
  displayName?: string;
  (props: P): JSX.Element;
  /** @private Only used internally to hold the element type for extraction */
  __props: P;
};

interface RefForwardingComponent<T, P = {}> {
  (
    props: React.PropsWithChildren<P> & {as?: React.ElementType},
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

function defaultGetElemProps(input: any) {
  return input;
}

export const createContainer = <
  E extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType
    | ElementComponentM<any, any, any>
    | undefined = undefined
>(
  as?: E
) => <
  TModelHook extends ((config: any) => {state: any; events: any}) & {
    Context?: React.Context<any>;
  } & {defaultConfig?: Record<string, any>},
  TDefaultContext extends {state: Record<string, any>; events: Record<string, any>},
  TElemPropsHook extends (...args: any) => any,
  SubComponents = {}
>({
  displayName,
  modelHook,
  elemPropsHook,
  defaultContext,
  subComponents,
}: {
  displayName?: string;
  modelHook: TModelHook;
  elemPropsHook?: TElemPropsHook;
  defaultContext?: TDefaultContext;
  subComponents?: SubComponents;
}) => {
  const Context =
    modelHook.Context ||
    React.createContext({state: {}, events: {}, defaultConfig: modelHook.defaultConfig});

  return <Props>(
    Component: (
      props: Props & RemoveNull<ReturnType<TElemPropsHook>> & {ref: ExtractRef<E>},
      Element: E extends undefined ? never : E,
      model: TModelHook extends (config: infer TConfig) => infer TModel ? TModel : never
    ) => React.ReactElement | null
  ): (TModelHook extends (config: infer TConfig) => infer TModel
    ? E extends undefined
      ? ComponentM<Props & TConfig, TModel>
      : ElementComponentM<
          // E is not `undefined` here, but Typescript thinks it could be, so we add another `undefined`
          // check and cast to a `React.FC` to match a valid signature for `ElementComponent`.
          // `React.FC` was chosen as the simplest valid interface.
          E extends undefined ? React.FC : E,
          Props & TConfig,
          TModel
        > & {Context: React.Context<TModel>}
    : never) &
    SubComponents => {
    const ReturnedComponent = React.forwardRef<E, Props & {as?: React.ElementType} & {model?: any}>(
      ({as: asOverride, model, ...props}, ref) => {
        const localModel = useDefaultModel(model, props, modelHook);
        const elemProps = ((modelHook as any).getElemProps || defaultGetElemProps)(props);
        const finalElemProps = elemPropsHook
          ? elemPropsHook(localModel, elemProps, ref)
          : elemProps;

        return React.createElement(
          Context.Provider,
          {value: localModel},
          Component(
            finalElemProps as Props & RemoveNull<ReturnType<TElemPropsHook>> & {ref: ExtractRef<E>},
            // Cast to `any` to avoid: "ts(2345): Type 'undefined' is not assignable to type 'E extends
            // undefined ? never : E'" I'm not sure I can actually cast to this conditional type and it
            // doesn't actually matter, so cast to `any` it is.
            (asOverride || as) as any,
            localModel
          )
        );
      }
    );

    Object.keys(subComponents || {}).forEach(key => {
      // `ReturnedComponent` is a `React.ForwardRefExoticComponent` which has no additional keys so
      // we'll cast to `Record<string, any>` for assignment. Note the lack of type checking
      // properties. Take care when changing the runtime of this function.
      (ReturnedComponent as Record<string, any>)[key] = (subComponents as Record<string, any>)[key];
    });
    ReturnedComponent.displayName = displayName;
    (ReturnedComponent as any).Context = Context;

    // Cast as `any`. We have already specified the return type. Be careful making changes to this
    // file due to this `any` `ReturnedComponent` is a `React.ForwardRefExoticComponent`, but we want
    // it to be either an `Component` or `ElementComponent`
    return ReturnedComponent as any;
  };
};

type RemoveNull<T> = {[K in keyof T]: Exclude<T[K], null>};

// export type ModelComponentFn<TModelHook, TElemPropsHook, SubComponents> = <Props={}>(Component: ())

export const createSubcomponent = <
  E extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType
    | ElementComponentM<any, any, any>
    | undefined = undefined
>(
  as?: E
) => <
  TElemPropsHook, // normally we'd put a constraint here, but doing so causes the `infer` below to fail to infer the return props
  TModelHook extends ((config: any) => {state: any; events: any}) & {Context?: React.Context<any>},
  SubComponents = {}
>({
  displayName,
  modelHook,
  elemPropsHook,
  subComponents,
}: {
  displayName?: string;
  modelHook: TModelHook;
  elemPropsHook?: TElemPropsHook;
  subComponents?: SubComponents;
}) => {
  assert(
    modelHook.Context,
    'createSubcomponent only works on models with context. Please use `createModelHook` to create the `modelHook`'
  );

  return <Props = {}>(
    Component: (
      props: Props &
        (TElemPropsHook extends (...args: any[]) => infer TProps // try to infer TProps returned from the elemPropsHook function
          ? TProps extends {ref: infer R}
            ? TProps
            : TProps & {ref: ExtractRef<E>}
          : {ref: ExtractRef<E>}) &
        (Props extends {children: any}
          ? {}
          : {
              children?: React.ReactNode;
            }),
      Element: E extends undefined ? never : E,
      model: TModelHook extends (...args: any[]) => infer TModel ? TModel : never
    ) => React.ReactElement | null
  ): (TModelHook extends (...args: any[]) => infer TModel
    ? ElementComponentM<
        // E is not `undefined` here, but Typescript thinks it could be, so we add another `undefined`
        // check and cast to a `React.FC` to match a valid signature for `ElementComponent`.
        // `React.FC` was chosen as the simplest valid interface.
        E extends undefined ? React.FC : E,
        Props,
        TModel
      >
    : never) &
    SubComponents => {
    const ReturnedComponent = React.forwardRef<
      E,
      Props & {as?: React.ElementType} & {model?: any; elemPropsHook?: (...args: any) => any}
    >(({as: asOverride, model, elemPropsHook: additionalPropsHook, ...props}, ref) => {
      const localModel = useModelContext(modelHook.Context!, model);
      const elemProps = elemPropsHook
        ? (elemPropsHook as any)(localModel, props, ref)
        : {...props, ref};

      return Component(
        additionalPropsHook ? additionalPropsHook(localModel, elemProps, ref) : elemProps,
        // Cast to `any` to avoid: "ts(2345): Type 'undefined' is not assignable to type 'E extends
        // undefined ? never : E'" I'm not sure I can actually cast to this conditional type and it
        // doesn't actually matter, so cast to `any` it is.
        (asOverride || as) as any,
        localModel
      );
    });

    Object.keys(subComponents || {}).forEach(key => {
      // `ReturnedComponent` is a `React.ForwardRefExoticComponent` which has no additional keys so
      // we'll cast to `Record<string, any>` for assignment. Note the lack of type checking
      // properties. Take care when changing the runtime of this function.
      (ReturnedComponent as Record<string, any>)[key] = (subComponents as Record<string, any>)[key];
    });
    ReturnedComponent.displayName = displayName;

    // Cast as `any`. We have already specified the return type. Be careful making changes to this
    // file due to this `any` `ReturnedComponent` is a `React.ForwardRefExoticComponent`, but we want
    // it to be either an `Component` or `ElementComponent`
    return ReturnedComponent as any;
  };
};

/**
 * Factory function that creates components to be exported. It enforces React ref forwarding, `as`
 * prop, display name, and sub-components, and handles proper typing without much boiler plate. The
 * return type is `Component<element, Props>` which looks like `Component<'div', Props>` which is a
 * clean interface that tells you the default element that is used.
 */
export const createComponent = <
  E extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType
    | ElementComponent<any, any>
    | undefined = undefined
>(
  as?: E
) => <P, SubComponents = {}>({
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
  Component: RefForwardingComponent<E, P>;
  /**
   * Used in container components
   */
  subComponents?: SubComponents;
}): (E extends undefined
  ? Component<P>
  : ElementComponent<
      // E is not `undefined` here, but Typescript thinks it could be, so we add another `undefined`
      // check and cast to a `React.FC` to match a valid signature for `ElementComponent`.
      // `React.FC` was chosen as the simplest valid interface.
      E extends undefined ? React.FC : E,
      P
    >) &
  SubComponents => {
  const ReturnedComponent = React.forwardRef<E, P & {as?: React.ElementType}>(
    ({as: asOverride, ...props}, ref) => {
      return Component(
        props as P,
        ref as ExtractRef<E>,
        // Cast to `any` to avoid: "ts(2345): Type 'undefined' is not assignable to type 'E extends
        // undefined ? never : E'" I'm not sure I can actually cast to this conditional type and it
        // doesn't actually matter, so cast to `any` it is.
        (asOverride || as) as any
      );
    }
  );

  Object.keys(subComponents || {}).forEach(key => {
    // `ReturnedComponent` is a `React.ForwardRefExoticComponent` which has no additional keys so
    // we'll cast to `Record<string, any>` for assignment. Note the lack of type checking
    // properties. Take care when changing the runtime of this function.
    (ReturnedComponent as Record<string, any>)[key] = (subComponents as Record<string, any>)[key];
  });
  ReturnedComponent.displayName = displayName;

  // The `any`s are here because `ElementComponent` takes care of the `as` type and the
  // `ReturnComponent` type is overridden
  (ReturnedComponent as any).as = (as: any) =>
    createComponent(as)({displayName, Component, subComponents});

  // Cast as `any`. We have already specified the return type. Be careful making changes to this
  // file due to this `any` `ReturnedComponent` is a `React.ForwardRefExoticComponent`, but we want
  // it to be either an `Component` or `ElementComponent`
  return ReturnedComponent as any;
};

export const createElemPropsHook = <
  TModelHook extends (config: any) => {state: Record<string, any>; events: Record<string, any>}
>(
  modelHook: TModelHook
) => <PO extends {}, PI extends {}>(
  fn: (
    model: TModelHook extends (config: any) => infer TModel
      ? TModel
      : {state: Record<string, any>; events: Record<string, any>},
    ref?: React.Ref<any>,
    elemProps?: PI
  ) => PO
): BehaviorHook<
  TModelHook extends (config: any) => infer TModel
    ? TModel
    : {state: Record<string, any>; events: Record<string, any>},
  PO
> => (model, elemProps, ref) => {
  const props = mergeProps(fn(model, ref, elemProps || ({} as any)), elemProps || ({} as any));
  if (!props.hasOwnProperty('ref') && ref) {
    // This is the weird "incoming ref isn't in props, but outgoing ref is in props" thing
    props.ref = ref;
  }
  return props;
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
    if (!props.hasOwnProperty('ref') && ref) {
      // This is the weird "incoming ref isn't in props, but outgoing ref is in props" thing
      props.ref = ref;
    }
    return props;
  };
};

export const subModelHook = <M extends Model<any, any>, SM extends Model<any, any>, O extends {}>(
  fn: (model: M) => SM,
  hook: BehaviorHook<SM, O>
): BehaviorHook<M, O> => {
  return (model: M, props: any, ref: React.Ref<any>) => {
    return hook(fn(model), props, ref);
  };
};

// Typescript function parameters are contravariant while return types are covariant. This is a
// problem when someone hands us a model that correctly extends `Model<any, any>`, but adds extra
// properties to the model. So `M extends Model<any, any>`. But the `BehaviorHook` is the return
// type which will reverse the direction which is no longer true: `Model<any, any> extends M`. In
// order to avoid this issue, we use the `bivarianceHack` found in ReactJS type definitions. This
// hack forces Typescript to treat `M` as a bivariant allowing extension to go either direction.
// Normally this would be less type safe, but we're using a generic `M` as a placeholder so there
// isn't a real issue. Not 100% this is a bug, but the "hack" is a bit messy.
// https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance
// https://stackoverflow.com/questions/52667959/what-is-the-purpose-of-bivariancehack-in-typescript-types/52668133
export type BehaviorHook<M extends Model<any, any>, O extends {}> = {
  bivarianceHack<P extends {}, R>(
    model: M,
    elemProps?: P,
    ref?: React.Ref<R>
  ): O & P & (R extends HTMLOrSVGElement ? {ref: React.Ref<R>} : {});
}['bivarianceHack'];

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
export function useForkRef<T>(ref1?: React.Ref<T>, ref2?: React.Ref<T>): React.RefCallback<T> {
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
export function composeHooks<M extends Model<any, any>, O1 extends {}, O2 extends {}>(
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>
): BehaviorHook<M, O1 & O2>;

export function composeHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {}
>(
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>,
  hook3: BehaviorHook<M, O3>
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
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>,
  hook3: BehaviorHook<M, O3>,
  hook4: BehaviorHook<M, O4>
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
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>,
  hook3: BehaviorHook<M, O3>,
  hook4: BehaviorHook<M, O4>,
  hook5: BehaviorHook<M, O5>
): BehaviorHook<M, O1 & O2 & O3 & O4 & O5>;
export function composeHooks<M extends Model<any, any>, R, P extends {}, O extends {}>(
  ...hooks: ((model: M, props: P, ref: React.Ref<R>) => O)[]
): BehaviorHook<M, O> {
  return (model, props, ref) => {
    const returnProps = [...hooks].reverse().reduce((props: any, hook) => {
      return hook(model, props, props.ref || ref);
    }, props);

    if (!returnProps.hasOwnProperty('ref') && ref) {
      // This is the weird "incoming ref isn't in props, but outgoing ref is in props" thing
      returnProps.ref = ref;
    }

    return returnProps;
  };
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
 *   const props = composeModelHooks(useModel)(useHook1, useHook2)(model, elemProps, ref)
 *
 *   return <div id="foo" {...props}>{children}</div>
 * })
 */
//  export function composeModelHooks<M extends
//  TModelHook extends (config: any) => {state: Record<string, any>; events: Record<string, any>}
// >, O1 extends {}, O2 extends {}>(
//   hook1: BehaviorHook<M, O1>,
//   hook2: BehaviorHook<M, O2>
// ): BehaviorHook<M, O1 & O2>;

export function composeModelHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {}
>(
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>,
  hook3: BehaviorHook<M, O3>
): BehaviorHook<M, O1 & O2 & O3>;
export function composeModelHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {},
  O4 extends {}
>(
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>,
  hook3: BehaviorHook<M, O3>,
  hook4: BehaviorHook<M, O4>
): BehaviorHook<M, O1 & O2 & O3 & O4>;
export function composeModelHooks<
  M extends Model<any, any>,
  R,
  P extends {},
  O1 extends {},
  O2 extends {},
  O3 extends {},
  O4 extends {},
  O5 extends {}
>(
  hook1: BehaviorHook<M, O1>,
  hook2: BehaviorHook<M, O2>,
  hook3: BehaviorHook<M, O3>,
  hook4: BehaviorHook<M, O4>,
  hook5: BehaviorHook<M, O5>
): BehaviorHook<M, O1 & O2 & O3 & O4 & O5>;
export function composeModelHooks<M extends Model<any, any>, R, P extends {}, O extends {}>(
  ...hooks: ((model: M, props: P, ref: React.Ref<R>) => O)[]
): BehaviorHook<M, O> {
  return (model, props, ref) => {
    const returnProps = [...hooks].reverse().reduce((props: any, hook) => {
      return hook(model, props, props.ref || ref);
    }, props);

    if (!returnProps.hasOwnProperty('ref') && ref) {
      // This is the weird "incoming ref isn't in props, but outgoing ref is in props" thing
      returnProps.ref = ref;
    }

    return returnProps;
  };
}
