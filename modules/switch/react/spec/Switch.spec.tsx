import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import canvas from '@workday/canvas-kit-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import Switch from '../lib/Switch';

// Implementation details of the switch. These are meant to be helpers.

// The switch track
const getBackground = (container: HTMLElement) => {
  return container.querySelector('div')!.querySelector('div');
};

// The switch thumb
const getCircle = (container: HTMLElement) => {
  return container
    .querySelector('div')!
    .querySelector('div')!
    .querySelector('div');
};

const expectedBoxShadow = (c1: string, c2: string, c3: string) => {
  return `0 0 0 2px ${c1}, 0 0 0 4px ${c2}, 0 0 0 5px ${c3}`;
};

describe('Switch', () => {
  const cb = jest.fn();

  afterEach(() => {
    cb.mockClear();
    cleanup();
  });

  it('should be unchecked by default', () => {
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

  it('should be a `type` of "checkbox"', () => {
    const {getByRole} = render(<Switch onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('type', 'checkbox');
  });

  it('should have a `tabIndex` of 0', () => {
    const {getByRole} = render(<Switch onChange={cb} />);
    expect(getByRole('checkbox')).toHaveProperty('tabIndex', 0);
  });

  describe('Switch styles', () => {
    const cb = jest.fn();

    afterEach(() => {
      cb.mockReset();
      cleanup();
    });

    describe('When disabled', () => {
      test('the input element should have a "not-allowed" cursor when disabled', () => {
        const {getByRole} = render(<Switch disabled={true} onChange={cb} />);
        expect(getByRole('checkbox')).toHaveStyleRule('cursor', 'not-allowed');
      });

      test('the background element should have a pale background color when disabled', () => {
        const {container} = render(<Switch disabled={true} onChange={cb} />);
        const backgroundElement = getBackground(container);
        expect(backgroundElement).toHaveStyleRule('background-color', canvas.colors.soap400);
      });
    });

    describe('When not disabled', () => {
      test('the input element should have a "pointer" cursor when not disabled', () => {
        const {getByRole} = render(<Switch onChange={cb} />);
        expect(getByRole('checkbox')).toHaveStyleRule('cursor', 'pointer');
      });

      test('the background element should have a blue background color when not disabled and checked', () => {
        const {container} = render(<Switch checked onChange={cb} />);
        const backgroundElement = getBackground(container);
        expect(backgroundElement).toHaveStyleRule('background-color', canvas.colors.blueberry500);
      });

      test('the background element should have a neutral background color when not disabled and unhecked', () => {
        const {container} = render(<Switch checked={false} onChange={cb} />);
        const backgroundElement = getBackground(container);
        expect(backgroundElement).toHaveStyleRule('background-color', canvas.colors.licorice200);
      });

      test('the circle element should be to the very left (`translateX(0)`) when unchecked', () => {
        const {container} = render(<Switch checked={false} disabled={true} onChange={cb} />);
        const circleElement = getCircle(container);
        expect(circleElement).toHaveStyleRule('transform', 'translateX(0)');
      });

      test('the circle element should be to the very right (`translateX(`spacing.s`)`) when unchecked', () => {
        const {container} = render(<Switch checked onChange={cb} />);
        const circleElement = getCircle(container);
        expect(circleElement).toHaveStyleRule('transform', `translateX(${canvas.spacing.s})`);
      });
    });

    describe('When in error state', () => {
      test('the input should have an error-colored border when the error type is "error"', () => {
        const {getByRole} = render(<Switch checked onChange={cb} error={ErrorType.Error} />);
        const bs = expectedBoxShadow(
          canvas.colors.frenchVanilla100,
          canvas.inputColors.error.border,
          'transparent'
        );

        expect(getByRole('checkbox')).toHaveStyleRule('box-shadow', bs, {
          target: ' ~ div:first-of-type',
        });
      });

      test('the input should have an alert-colored border when the error type is "alert"', () => {
        const {getByRole} = render(<Switch checked onChange={cb} error={ErrorType.Alert} />);
        const bs = expectedBoxShadow(
          canvas.colors.frenchVanilla100,
          canvas.inputColors.warning.border,
          canvas.colors.cantaloupe600
        );

        expect(getByRole('checkbox')).toHaveStyleRule('box-shadow', bs, {
          target: ' ~ div:first-of-type',
        });
      });
    });
  });
});
