import * as React from 'react';
import {ColorInput} from '../lib/ColorInput';
import {render, fireEvent} from '@testing-library/react';

const id = 'color-input';
const placeholder = '000000';
const value = 'eee';

describe('ColorInput', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  verifyComponent(ColorInput, {});

  describe('when rendered', () => {
    describe('with a placeholder', () => {
      test('should render a ColorInput with a placeholder', () => {
        const {getByRole} = render(<ColorInput onChange={cb} placeholder={placeholder} />);
        expect(getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
      });
    });

    describe('with an id', () => {
      test('should render a ColorInput with an id', () => {
        const {getByRole} = render(<ColorInput id="my-id" />);
        expect(getByRole('textbox')).toHaveAttribute('id', 'my-id');
      });
    });

    describe('with a value and check', () => {
      test('should render a ColorInput with a value and check', () => {
        const {container, getByRole} = render(<ColorInput value={value} showCheck={true} />);

        expect(getByRole('textbox')).toHaveValue(value);
        expect(container.querySelector('svg')).toHaveClass('wd-icon-check-small');
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled ColorInput', () => {
        const {getByRole} = render(<ColorInput disabled={true} />);
        expect(getByRole('textbox')).toBeDisabled();
      });
    });

    describe('with a value that has a hash', () => {
      test('the hash is stripped from the value', () => {
        const {getByRole} = render(<ColorInput value={'#eee'} />);
        expect(getByRole('textbox')).toHaveValue(value);
      });
    });

    describe('with a value more than 6 characters in length', () => {
      test('the value is truncated to a length of 6', () => {
        const {getByRole} = render(<ColorInput value={'123456789'} />);
        expect(getByRole('textbox')).toHaveValue('123456');
      });
    });
  });

  describe('when changed', () => {
    test('should call onChange callback on value change', () => {
      const {getByRole} = render(<ColorInput onChange={cb} />);

      const event = {
        target: {value: value},
      };

      expect(cb).toHaveBeenCalledTimes(0);
      fireEvent.change(getByRole('textbox'), event);
      expect(cb).toHaveBeenCalledTimes(1);
    });

    test('should strip value on change', () => {
      const {getByRole, rerender} = render(<ColorInput value="" />);

      expect(getByRole('textbox')).toHaveValue('');
      rerender(<ColorInput value="#eee" />);
      expect(getByRole('textbox')).toHaveValue(value);
    });

    test('should call onValidColorChange prop onChange', () => {
      const {getByRole} = render(<ColorInput onValidColorChange={cb} />);

      const event = {
        target: {value: value},
      };

      expect(cb).toHaveBeenCalledTimes(0);
      fireEvent.change(getByRole('textbox'), event);
      expect(cb).toHaveBeenCalledWith('#eeeeee');
    });

    test('should not call onValidColorChange prop onChange if hex code is not valid', () => {
      const {getByRole} = render(<ColorInput onValidColorChange={cb} />);

      const event = {
        target: {value: 'e6ee'},
      };

      expect(cb).toHaveBeenCalledTimes(0);
      fireEvent.change(getByRole('textbox'), event);
      expect(cb).toHaveBeenCalledTimes(0);
    });
  });
});
