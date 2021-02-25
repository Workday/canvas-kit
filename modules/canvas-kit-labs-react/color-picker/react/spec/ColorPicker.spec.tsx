import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {colors} from '@workday/canvas-kit-react-core';
import {ColorPicker, ColorPickerProps} from '@workday/canvas-kit-labs-react-color-picker';

describe('Color Picker', () => {
  const renderColorPicker = (props?: Partial<ColorPickerProps>) =>
    render(<ColorPicker onColorChange={jest.fn()} {...props} />);

  describe('when clicking a color swatch', () => {
    it('should call onColorChange handler when clicking a color swatch', () => {
      const onColorChange = jest.fn();
      const {container} = renderColorPicker({onColorChange: onColorChange});
      const colorSwatch = container.querySelector(`[color="${colors.blackPepper400}"]`)!;

      fireEvent.click(colorSwatch);
      expect(onColorChange).toHaveBeenCalledWith(colors.blackPepper400);
    });
  });

  it('should display custom hex codes in the custom input', () => {
    const {getByRole} = renderColorPicker({
      value: '#abcdef',
      showCustomHexInput: true,
    });

    expect(getByRole('textbox')).toHaveValue('abcdef');
  });

  it('should NOT display known colors in the custom input', () => {
    const {getByRole} = renderColorPicker({
      value: colors.blueberry400,
      showCustomHexInput: true,
    });
    const input = getByRole('textbox');

    expect(input.getAttribute('value')).toBe('');
  });

  describe('custom hex input', () => {
    it('should NOT render by default', () => {
      const {queryByRole} = renderColorPicker();

      expect(queryByRole('textbox')).toBeNull();
    });

    it('should render when prop is true', () => {
      const {getByRole} = renderColorPicker({showCustomHexInput: true});

      expect(getByRole('textbox')).not.toBeNull();
    });
  });

  describe('reset button', () => {
    it('should NOT render by default', () => {
      const {queryByText} = renderColorPicker();

      expect(queryByText('Reset')).toBeNull();
    });

    it('should render when onColorReset and resetColor props is provided', () => {
      const onColorReset = jest.fn();
      const resetColor = colors.berrySmoothie100;
      const {getByText} = renderColorPicker({onColorReset, resetColor});

      expect(getByText('Reset')).not.toBeNull();
    });

    it('should use custom label', () => {
      const onColorReset = jest.fn();
      const resetLabel = 'foobarbaz';
      const resetColor = colors.blueberry400;
      const {getByText} = renderColorPicker({onColorReset, resetColor, resetLabel});

      expect(getByText(resetLabel)).not.toBeNull();
    });

    describe('when clicking reset', () => {
      it('should call onColorReset', () => {
        const onColorReset = jest.fn();
        const resetColor = colors.blueberry400;
        const {getByText} = renderColorPicker({onColorReset, resetColor});
        const reset = getByText('Reset');

        fireEvent.click(reset);
        expect(onColorReset).toHaveBeenCalled();
      });
    });
  });
});
