import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Switch from '../lib/Switch';

describe('Switch', () => {
  const cb = jest.fn();

  /**
   * Today, this is hardcoded but this could possibly be
   * configurable in the future (e.g. role='switch').
   * In fact, 'checkbox' probably isn't the correct role
   * according to MDN and ARIA
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role
   * https://www.w3.org/TR/wai-aria-1.1/#switch
   */
  const role = 'checkbox';

  afterEach(() => {
    cb.mockClear();
  });

  describe('when rendered', () => {
    it('should render an element with `type=checkbox`', () => {
      const {getByRole} = render(<Switch onChange={cb} />);
      expect(getByRole(role)).toHaveProperty('type', 'checkbox');
    });

    it('should be unchecked by default', () => {
      const {getByRole} = render(<Switch onChange={cb} />);
      expect(getByRole(role)).toHaveProperty('checked', false);
    });
  });

  describe('when rendered with checked=true', () => {
    it('should render a checked checkbox', () => {
      const {getByRole} = render(<Switch checked={true} onChange={cb} />);
      expect(getByRole(role)).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a checkbox with that id', () => {
      const id = 'switchy';
      const {getByRole} = render(<Switch id={id} onChange={cb} />);

      expect(getByRole(role)).toHaveAttribute('id', id);
    });
  });

  describe('when rendered without an id', () => {
    it('should create a unique id for each instance', () => {
      const testIds = ['test1', 'test2'];
      const {getByTestId} = render(
        <>
          <Switch data-testid={testIds[0]} onChange={cb} />
          <Switch data-testid={testIds[1]} onChange={cb} />
        </>
      );

      const id1 = getByTestId(testIds[0]).getAttribute('id');
      const id2 = getByTestId(testIds[1]).getAttribute('id');

      expect(id1).not.toEqual(id2);
    });

    it('should keep the same unique id if re-rendered', () => {
      const {getByRole, rerender} = render(<Switch checked={false} onChange={cb} />);

      const uniqueId = getByRole(role).getAttribute('id');
      expect(getByRole(role)).toHaveProperty('id', uniqueId);

      rerender(<Switch checked={true} onChange={cb} />);

      expect(getByRole(role)).toHaveProperty('checked');
      expect(getByRole(role)).toHaveProperty('id', uniqueId);
    });
  });

  describe('when rendered with the disabled prop', () => {
    it('should render a disabled checkbox', () => {
      const {getByRole} = render(<Switch disabled={true} onChange={cb} />);
      expect(getByRole(role)).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should apply those extra props to the checkbox', () => {
      const testValue = 'test';

      const {getByRole} = render(<Switch data-propspread={testValue} onChange={cb} />);
      expect(getByRole(role)).toHaveAttribute('data-propspread', testValue);
    });
  });

  describe('when rendered with an input ref', () => {
    it('the current property should not be null', () => {
      const ref = React.createRef<HTMLInputElement>();

      render(<Switch inputRef={ref} onChange={cb} />);

      expect(ref.current).not.toBeNull();
    });

    it('the current property should refer to the checkbox', () => {
      const ref = React.createRef<HTMLInputElement>();

      render(<Switch inputRef={ref} onChange={cb} />);

      expect(ref.current).toHaveAttribute('role', 'checkbox');
    });
  });

  describe('when clicked', () => {
    it('should call the onChange callback', () => {
      const {getByRole} = render(<Switch onChange={cb} />);

      fireEvent.click(getByRole(role));

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('Switch styles', () => {
    describe('When disabled', () => {
      test('the element should have a "not-allowed" cursor when disabled', () => {
        const {getByRole} = render(<Switch disabled={true} onChange={cb} />);
        expect(getByRole(role)).toHaveStyleRule('cursor', 'not-allowed');
      });
    });
    describe('When not disabled', () => {
      test('the element should have a "pointer" cursor when not disabled', () => {
        const {getByRole} = render(<Switch onChange={cb} />);
        expect(getByRole(role)).toHaveStyleRule('cursor', 'pointer');
      });
    });
  });
});
