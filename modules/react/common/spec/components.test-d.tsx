import React from 'react';
import {expectTypeOf} from 'expect-type';

import {createComponent, ElementComponent, ExtractProps} from '../lib/utils/components';

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
    expectTypeOf<ExtractProps<typeof ElementComponent>>().toEqualTypeOf<
      Props & React.HTMLAttributes<HTMLDivElement>
    >();
  });

  it('should return the props and HTMLButtonElement when a `button` element is provided on an `ElementComponent`', () => {
    expectTypeOf<ExtractProps<typeof ElementComponent, 'button'>>().toEqualTypeOf<
      Props & React.ButtonHTMLAttributes<HTMLButtonElement>
    >();
  });

  it('should return only the props when `never` is provided on an `ElementComponent', () => {
    expectTypeOf<ExtractProps<typeof ElementComponent, never>>().toEqualTypeOf<Props>();
  });

  it('should return only props on a `Component`', () => {
    const Component = createComponent()({Component: (props: Props) => null});

    expectTypeOf<ExtractProps<typeof Component>>().toEqualTypeOf<Props>();
  });
});
