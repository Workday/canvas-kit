import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import Switch from '../lib/Switch';

describe('Switch', () => {
  const cb = jest.fn();

  afterEach(() => {
    cb.mockClear();
    cleanup();
  });

  it('should be unchecked (`checked=false`) by default', () => {
    const {getByRole} = render(<Switch onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('checked', false);
  });

  it('should apply extra props to the input element', () => {
    const testId = 'test';
    const {container} = render(<Switch data-testid="test" onChange={cb} />);
    expect(container.querySelector('input')).toHaveAttribute('data-testid', testId);
  });

  it('should be checked if the checked prop is true', () => {
    const {getByRole} = render(<Switch checked={true} onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('checked', true);
  });

  it('should be disabled if the disabled prop is true', () => {
    const {getByRole} = render(<Switch disabled={true} onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('disabled', true);
  });

  it('should have a reference to the input', () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(<Switch inputRef={inputRef} onChange={cb} />);
    expect(inputRef.current!.tagName.toLowerCase()).toBe('input');
  });

  it('should have a unique id by default', () => {
    const {getByRole} = render(<Switch disabled={true} onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('disabled', true);
  });

  it('should keep the same unique id if re-rendered', () => {
    const {getByRole, rerender} = render(<Switch checked={false} onChange={cb} />);

    const uniqueId = getByRole('checkbox').getAttribute('id');
    expect(getByRole('checkbox')).toHaveProperty('id', uniqueId);

    rerender(<Switch checked={true} onChange={cb} />);

    expect(getByRole('checkbox')).toHaveProperty('checked');
    expect(getByRole('checkbox')).toHaveProperty('id', uniqueId);
  });

  it('should create a unique id for each instance', () => {
    const testIds = ['test1', 'test2'];
    const {getByTestId} = render(
      <>
        <Switch data-testid={testIds[0]} onChange={cb} />
        <Switch data-testid={testIds[1]} onChange={cb} />
      </>
    );

    expect(getByTestId(testIds[0]).id).not.toBe(getByTestId(testIds[1]).id);
  });

  it('should fire the onChange event handler when clicked', () => {
    const cb = jest.fn();
    const {getByRole} = render(<Switch checked={true} onChange={cb} />);

    fireEvent.click(getByRole('checkbox'));
    fireEvent.click(getByRole('checkbox'));
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('should be of `type="checkbox"`', () => {
    const {getByRole} = render(<Switch onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('type', 'checkbox');
  });

  it('should maintain a tabIndex of 0', () => {
    const {getByRole} = render(<Switch onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('tabIndex', 0);
  });

  it('should have a "not-allowed" pointer when disabled', () => {
    const {getByRole} = render(<Switch disabled={true} onChange={cb} />);
    expect(getByRole('checkbox')).toHaveStyleRule('cursor', 'not-allowed');
  });

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
