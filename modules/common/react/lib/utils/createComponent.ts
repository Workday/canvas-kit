import React from 'react';

/**
 * "as" prop
 */
export type As<P = any> = React.ElementType<P>;

/**
 * Generic component props with "as" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type PropsWithAs<P, T extends As> = P &
  Omit<React.ComponentProps<T>, 'as' | 'state' | keyof P>;

export type Component<T extends As, P> = {
  <TT extends As>(props: PropsWithAs<P, TT> & {as: TT}): JSX.Element;
  (props: PropsWithAs<P, T>): JSX.Element;
  displayName?: string;
};

export const Element = <T extends As>({
  as,
  children,
  ...elemProps
}: {
  as: T;
  children: React.ReactNode;
  ref: React.Ref<T extends keyof ElementTagNameMap ? ElementTagNameMap[T] : T>;
} & React.HTMLAttributes<T extends keyof ElementTagNameMap ? ElementTagNameMap[T] : T>) =>
  React.createElement(as, elemProps, children);

interface RefForwardingComponent<T, P = {}> {
  (
    props: React.PropsWithChildren<P> & {as?: React.ReactElement<any>},
    ref: React.Ref<T extends keyof ElementTagNameMap ? ElementTagNameMap[T] : T>,
    as: T
  ): React.ReactElement | null;
}

/**
 *
 * @param description Describes the default element, display, Component function and any sub components
 */
export const createComponent = <T extends As, P, SubComponents = {}>({
  as,
  displayName,
  Component,
  subComponents,
}: {
  /** The default tag or component that will be used by the component. This value is returned as the
   * `as` argument in the Component function */
  as: T;
  displayName?: string;
  Component: RefForwardingComponent<T, P>;
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

type foo = Omit;

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

export function useForkRef<T>(ref1: React.Ref<T>, ref2: React.Ref<T>): React.Ref<T> {
  return (value: T) => {
    setRef(ref1, value);
    setRef(ref2, value);
  };
}
