import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {colors} from '@workday/canvas-kit-react-core';
import {ColorPicker, ColorPickerProps} from '@workday/canvas-kit-labs-react-color-picker';

describe('<ColorPicker /> component', () => {
  const renderColorPicker = (props?: Partial<ColorPickerProps>) => {
    return render(<ColorPicker onColorChange={jest.fn()} {...props} />);
  };

  it('should call onColorChange handler when clicking a color swatch', () => {
    const onColorChange = jest.fn();
    const {container} = renderColorPicker({onColorChange: onColorChange});
    const colorSwatch = container.querySelector('#canvas-color-picker--color-333333')!;

    fireEvent.click(colorSwatch);
    expect(onColorChange).toHaveBeenCalledWith(colors.blackPepper400);
  });

  it('should display custom hex codes in the custom input', () => {
    const {container} = renderColorPicker({
      value: '#abcdef',
      showCustomHexInput: true,
    });
    const input = container.querySelector('input')!;

    expect(input).toHaveValue('abcdef');
  });

  it('should NOT display known colors in the custom input', () => {
    const {container} = renderColorPicker({
      value: colors.blueberry400,
      showCustomHexInput: true,
    });
    const input = container.querySelector('input')!;

    expect(input.getAttribute('value')).toBe('');
  });

  describe('custom hex input', () => {
    it('should NOT render by default', () => {
      const {container} = renderColorPicker();

      expect(container.querySelector('input')).toBeNull();
    });

    it('should render when prop is true', () => {
      const {container} = renderColorPicker({showCustomHexInput: true});

      expect(container.querySelector('input')).not.toBeNull();
    });
  });

  describe('reset button', () => {
    it('should NOT render by default', () => {
      const {container} = renderColorPicker();
      const reset = container.querySelector('#canvas-color-picker--reset');

      expect(reset).toBeNull();
    });

    it('should render when onColorReset and resetColor props is provided', () => {
      const onColorReset = jest.fn();
      const resetColor = colors.berrySmoothie100;
      const {container} = renderColorPicker({onColorReset, resetColor});
      const reset = container.querySelector('#canvas-color-picker--reset');

      expect(reset).not.toBeNull();
    });

    it('should use custom label', () => {
      const onColorReset = jest.fn();
      const resetLabel = 'foobarbaz';
      const resetColor = colors.blueberry400;
      const {findByText} = renderColorPicker({onColorReset, resetColor, resetLabel});
      const resetButton = findByText(resetLabel);

      expect(resetButton).not.toBeNull();
    });

    it('should call onColorReset handler when clicking', () => {
      const onColorReset = jest.fn();
      const resetColor = colors.blueberry400;
      const {container} = renderColorPicker({onColorReset, resetColor});
      const reset = container.querySelector('#canvas-color-picker--reset')!;

      fireEvent.click(reset);
      expect(onColorReset).toHaveBeenCalled();
    });

    it('should call onColorReset handler when selecting with ENTER', () => {
      const onColorReset = jest.fn();
      const resetColor = colors.blueberry400;
      const {container} = renderColorPicker({onColorReset, resetColor});
      const reset = container.querySelector('#canvas-color-picker--reset')!;

      fireEvent.mouseEnter(reset);
      fireEvent.keyDown(reset, {key: 'Enter'});
      expect(onColorReset).toHaveBeenCalled();
    });
  });
});
