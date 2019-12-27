import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import Switch from '../lib/Switch';

describe('Switch', () => {
  const cb = jest.fn();
  const testId = 'test';
  const testProps = {
    'data-testid': testId,
    onChange: cb,
  };

  afterEach(() => {
    cb.mockReset();
    cleanup();
  });

  it('should be unchecked by default', () => {
    const {getByTestId} = render(<Switch {...testProps} />);
    expect(getByTestId(testId)).not.toHaveAttribute('checked');
  });

  it('should apply extra props to an input', () => {
    const {getByTestId} = render(<Switch {...testProps} />);
    expect(getByTestId(testId).tagName.toLowerCase()).toBe('input');
  });

  it('should be checked if the checked prop is true', () => {
    const {getByTestId} = render(<Switch {...testProps} checked={true} />);
    expect(getByTestId(testId)).toHaveAttribute('checked');
  });

  it('should be disabled if the disabled prop is true', () => {
    const {getByTestId} = render(<Switch disabled={true} {...testProps} />);
    expect(getByTestId(testId)).toHaveAttribute('disabled');
  });

  it('should have a reference to the input', () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(<Switch inputRef={inputRef} {...testProps} />);
    expect(inputRef.current!.tagName.toLowerCase()).toBe('input');
  });

  it('should have a unique id by default', () => {
    const {getByTestId} = render(<Switch disabled={true} {...testProps} />);
    expect(getByTestId(testId)).toHaveAttribute('disabled');
  });

  it('should keep the same unique id if re-rendered', () => {
    const {getByTestId, rerender} = render(<Switch checked={false} {...testProps} />);

    const uniqueId = getByTestId(testId).getAttribute('id');
    expect(getByTestId(testId)).toHaveAttribute('id', uniqueId);

    rerender(<Switch checked={true} {...testProps} />);

    expect(getByTestId(testId)).toHaveAttribute('checked');
    expect(getByTestId(testId)).toHaveAttribute('id', uniqueId);
  });

  it('should create a unique id for each instance', () => {
    const testId2 = 'test2';
    const {getByTestId} = render(
      <>
        <Switch {...testProps} />
        <Switch {...testProps} data-testid={testId2} />
      </>
    );

    expect(getByTestId(testId).id).not.toBe(getByTestId(testId2).id);
  });

  it('should fire the onChange event handler when clicked', () => {
    const {getByTestId} = render(<Switch {...testProps} />);

    fireEvent.click(getByTestId(testId));
    fireEvent.click(getByTestId(testId));
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('should have the `role="checkbox"`', () => {
    const {getByTestId} = render(<Switch {...testProps} />);
    expect(getByTestId(testId)).toHaveAttribute('role', 'checkbox');
  });

  it('should be of `type="checkbox"`', () => {
    const {getByTestId} = render(<Switch {...testProps} />);
    expect(getByTestId(testId)).toHaveAttribute('type', 'checkbox');
  });

  it('should maintain a tabIndex of 0', () => {
    const {getByTestId} = render(<Switch {...testProps} />);
    expect(getByTestId(testId)).toHaveAttribute('tabIndex', '0');
  });

  // it('should pass all other props to the input', () => {});

  // Background and Circle should sync with the input
});

// describe('Switch', () => {
//   const cb = jest.fn();
//   afterEach(() => {
//     cb.mockReset();
//   });

//   test('should render a switch with a unique id')
//   test('Switch should spread extra props', () => {
//     const component = mount(<Switch data-propspread="test" onChange={cb} />);
//     const input = component
//       .find('input')
//       // TODO: Standardize on prop spread location (see #150)
//       .getDOMNode();
//     expect(input.getAttribute('data-propspread')).toBe('test');
//     component.unmount();
//   });

//   test('Switch creates a unique id for each instance', async () => {
//     const fragment = mount(
//       <form>
//         <Switch checked={true} onChange={jest.fn()} disabled={false} />;
//         <Switch onChange={jest.fn()} disabled={false} />;
//       </form>
//     );

//     const id1 = fragment
//       .find('input')
//       .at(0)
//       .getDOMNode()
//       .getAttribute('id');

//     const id2 = fragment
//       .find('input')
//       .at(1)
//       .getDOMNode()
//       .getAttribute('id');

//     expect(id1).not.toEqual(id2);
//     fragment.unmount();
//   });
// });
