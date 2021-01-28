import React from 'react';
import {screen, render, fireEvent, act} from '@testing-library/react';

import {createComponent, useForkRef, useLocalRef} from '../lib/utils/components';

describe('createEventMap', () => {
  it('create assign a displayName', () => {
    const Component = createComponent('div')({
      displayName: 'Test',
      Component: () => null,
    });

    expect(Component).toHaveProperty('displayName', 'Test');
  });

  it('should assign sub components', () => {
    const SubComponent = () => null;
    const Component = createComponent('div')({
      Component: () => null,
      subComponents: {
        SubComponent,
      },
    });

    expect(Component).toHaveProperty('SubComponent', SubComponent);
  });

  it('should forward the ref', () => {
    const ref = {current: null};

    const Component = createComponent('div')({
      displayName: 'Test',
      Component: (props, ref) => <div id="test" ref={ref} />,
    });

    render(<Component ref={ref} />);

    expect(ref.current).toHaveAttribute('id', 'test');
  });

  it('should render whatever element is passed through the "as" prop', () => {
    const Component = createComponent('div')({
      displayName: 'Test',
      Component: (props, ref, Element) => <Element data-testid="test" />,
    });

    render(<Component as="button" />);

    expect(screen.getByTestId('test')).toHaveProperty('tagName', 'BUTTON');
  });
});

describe('useForkRef', () => {
  it('should set the current value of the second ref if the first ref is undefined', () => {
    const ref1 = undefined;
    const ref2 = {current: null};

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref2).toHaveProperty('current', 'bar');
  });

  it('should set the current value of the first ref if the second ref is undefined', () => {
    const ref1 = {current: null};
    const ref2 = undefined;

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveProperty('current', 'bar');
  });

  it('should set the current value of both refs if both refs are RefObjects', () => {
    const ref1 = {current: null};
    const ref2 = {current: null};

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveProperty('current', 'bar');
    expect(ref2).toHaveProperty('current', 'bar');
  });

  it('should call the ref function of the second ref if the first ref is undefined', () => {
    const ref1 = undefined;
    const ref2 = jest.fn();

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref2).toHaveBeenCalledWith('bar');
  });

  it('should call the ref function of the first ref if the second ref is undefined', () => {
    const ref1 = jest.fn();
    const ref2 = undefined;

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveBeenCalledWith('bar');
  });

  it('should call the ref function of both refs if both refs are ref functions', () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveBeenCalledWith('bar');
    expect(ref2).toHaveBeenCalledWith('bar');
  });
});

describe('useLocalRef', () => {
  it('should return a localRef and an elementRef', () => {
    let localRefTest, elementRefTest;
    const CustomComponent = React.forwardRef<HTMLDivElement>((_, ref) => {
      const {localRef, elementRef} = useLocalRef(ref);

      localRefTest = localRef;
      elementRefTest = elementRef;

      return <div ref={ref} />;
    });

    render(<CustomComponent />);

    expect(localRefTest).toHaveProperty('current');
    expect(elementRefTest).toEqual(expect.any(Function));
  });
});
