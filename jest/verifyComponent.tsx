import React from 'react';
import {render, fireEvent} from '@testing-library/react';

/**
 * Verify aspects of a component such as ref forwarding, element remapping, and extra prop
 * spreading. This is a good litmus test for setting up components correctly. Only use on components
 * that represent an element.
 * @example
 * import { MyComponent, useMyComponentModel } from '...'
 *
 * describe('MyComponent', () => {
 *   verifyComponent(MyComponent, { modelFn: useMyComponentModel })
 *
 *   // other tests
 * })
 */
export function verifyComponent(
  Component: React.ComponentType<any>,
  {modelFn, props}: {modelFn?: Function; props: object}
) {
  describe('verifyComponent', () => {
    const Test = React.forwardRef(({...elemProps}: {as?: React.ReactType}, ref) => {
      const model = modelFn?.() || null;

      return <Component model={model} ref={ref} {...props} {...elemProps} />;
    });

    it('should forward the ref correctly', () => {
      const ref = {current: null};

      // test ref - if everything is working, it will be referring to a document element
      render(<Test ref={ref} />);
      expect(ref.current).toBeInTheDocument();
    });

    it('should apply the as prop correctly', () => {
      // test various `as` props
      const MyCustomComponent = ({children, ...props}: any) => {
        return <article {...props}>{children}</article>;
      };

      const {container, rerender} = render(<Test as="section" />);
      expect(container).toContainHTML('<section');

      rerender(<Test as="button" />);
      expect(container).toContainHTML('<button');

      rerender(<Test as={MyCustomComponent} />);
      expect(container).toContainHTML('<article');
    });

    it('should forward extra props properly - extra props should overwrite component props', () => {
      const ref = {current: null};
      const attrs = {
        'aria-label': 'MyAriaLabel',
        id: 'MyID',
        role: 'MyRole',
        'data-testid': 'MyTestID',
      } as const;
      render(<Test ref={ref} {...attrs} {...callbacks} />);

      for (const key in attrs) {
        expect(ref.current).toHaveAttribute(key, attrs[key]);
      }
    });

    const callbacks = {
      onClick: 'click',
      onKeyDown: 'keyDown',
      onKeyUp: 'keyUp',
      onMouseDown: 'mouseDown',
      onMouseUp: 'mouseUp',
    } as const;

    for (const key in callbacks) {
      it(`should call the '${key}' callback when the '${callbacks[key]}' event is fired`, () => {
        const ref: React.RefObject<Element> = {current: null};
        const fn = jest.fn();
        render(<Test ref={ref} {...{[key]: fn}} />);

        fireEvent[callbacks[key]](ref.current!);
        expect(fn).toBeCalledTimes(1);
      });
    }
  });
}
