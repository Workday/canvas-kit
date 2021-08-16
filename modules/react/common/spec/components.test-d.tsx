import React from 'react';
import {expectTypeOf} from 'expect-type';

import {createComponent, ElementComponent, ExtractProps} from '../lib/utils/components';

// expect-type is a very cool library, but failures can be extremely difficult to understand. To
// combat the non-helpful failure messages, try to assign a value or type to a variable instead of
// inlining. This way the variable can be moused over for the tooltip to help determine what went
// wrong. When a test failed, observe the expected value vs the actual type or the Expected type vs
// actual type.

describe('createComponent', () => {
  it('should assign an element-base component as an ElementComponent', () => {
    const component = createComponent('div')({Component: (props: {foo: 'bar'}) => null});
    expectTypeOf(component).toEqualTypeOf<ElementComponent<'div', {foo: 'bar'}>>();
  });

  it('should add sub-components to the signature', () => {
    const component = createComponent('div')({
      Component: (props: {foo: 'bar'}) => null,
      subComponents: {
        Foo: 'bar',
      },
    });
    expectTypeOf(component).toEqualTypeOf<ElementComponent<'div', {foo: 'bar'}> & {Foo: string}>();
  });

  it('should assign ref and Element correctly for element components', () => {
    createComponent('div')({
      Component: (props: {}, ref, Element) => {
        expectTypeOf(ref).toEqualTypeOf<React.Ref<HTMLDivElement>>();
        expectTypeOf(Element).toEqualTypeOf<'div'>();
        return null;
      },
    });
  });

  it('should assign ref and Element correctly for createComponent components', () => {
    const component = createComponent('article')({Component: (props: {}) => null});

    createComponent(component)({
      Component: (props: {}, ref, Element) => {
        expectTypeOf(ref).toEqualTypeOf<React.Ref<HTMLElement>>();
        expectTypeOf(Element).toEqualTypeOf<ElementComponent<'article', {}>>();
        return null;
      },
    });
  });

  it('should allow a valid ref when wrapping components', () => {
    const Component = createComponent('button')({Component: (props: {}) => null});
    const ref: React.RefObject<HTMLButtonElement> = {current: null};

    // No expectation, but the next line will fail if the ref signature isn't valid and it should be
    return <Component ref={ref} />;
  });
});

describe('ExtractProps', () => {
  interface Props {
    foo: string;
  }
  const ElementComponent = createComponent('div')({
    Component: (props: Props) => null,
  });

  it('should return the props and HTMLDivElement interface when no element is provided on an `ElementComponent`', () => {
    type Expected = ExtractProps<typeof ElementComponent>;

    expectTypeOf<Expected>().toEqualTypeOf<Props & React.HTMLAttributes<HTMLDivElement>>();
  });

  it('should return the props and HTMLButtonElement when a `button` element is provided on an `ElementComponent`', () => {
    type Expected = ExtractProps<typeof ElementComponent, 'button'>;

    expectTypeOf<Expected>().toEqualTypeOf<Props & React.ButtonHTMLAttributes<HTMLButtonElement>>();
  });

  it('should return only the props when `never` is provided on an `ElementComponent', () => {
    type Expected = ExtractProps<typeof ElementComponent, never>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  it('should return only props on a `Component`', () => {
    const Component = createComponent()({Component: (props: Props) => null});
    type Expected = ExtractProps<typeof Component>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  it('should return props of a class component', () => {
    class Component extends React.Component<Props> {}
    type Expected = ExtractProps<typeof Component>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  it('should return props of a functional component', () => {
    const Component = (props: Props) => null;
    type Expected = ExtractProps<typeof Component>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  describe('nested ElementComponent', () => {
    interface Props2 {
      bar: string;
    }

    it('should return the combined interface of all components and HTML attributes when no element override is provided to ExtractProps', () => {
      const Component1 = createComponent('button')({Component: (props: Props) => null});
      const Component2 = createComponent(Component1)({Component: (props: Props2) => null});
      type Expected = ExtractProps<typeof Component2>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & Props2 & React.ButtonHTMLAttributes<HTMLButtonElement>
      >();
    });

    it('should return only the outer component props when `never` is supplied to ExtractProps', () => {
      const Component1 = createComponent('button')({Component: (props: Props) => null});
      const Component2 = createComponent(Component1)({Component: (props: Props2) => null});
      type Expected = ExtractProps<typeof Component2, never>;

      expectTypeOf<Expected>().toEqualTypeOf<Props2>();
    });

    it('should return the combined interface of all components when an ElementComponent override is provided to ExtractProps', () => {
      const Component1 = createComponent('aside')({Component: (props: Props) => null});
      const Component2 = createComponent('button')({Component: (props: Props2) => null});
      type Expected = ExtractProps<typeof Component1, typeof Component2>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & Props2 & React.ButtonHTMLAttributes<HTMLButtonElement>
      >();
    });

    it('should return the combined interface of all components when a React.Component override is provided to ExtractProps', () => {
      const Component1 = createComponent('aside')({Component: (props: Props) => null});
      const Component2 = (props: Props2) => null;
      type Expected = ExtractProps<typeof Component1, typeof Component2>;

      expectTypeOf<Expected>().toEqualTypeOf<Props & Props2>();

      type Foo = ExtractProps<ElementComponent<'div', Props>>;
    });
  });
});
