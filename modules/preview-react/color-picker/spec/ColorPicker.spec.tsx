import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {ColorPicker, ColorPickerProps} from '@workday/canvas-kit-preview-react/color-picker';

describe('Color Picker', () => {
  const renderColorPicker = (props?: Partial<ColorPickerProps>) =>
    render(<ColorPicker onColorChange={jest.fn()} {...props} />);

  describe('when clicking a color swatch', () => {
    it('should call onColorChange handler when clicking a color swatch', () => {
      const onColorChange = jest.fn();
      const {container} = renderColorPicker({onColorChange: onColorChange});
      const colorSwatch = container.querySelector(`[data-color="${colors.blackPepper400}"]`)!;

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

    it('should work with color objects', () => {
      const {getByRole} = renderColorPicker({
        colorSet: [
          {label: 'Cinnamon', value: colors.cinnamon200},
          {label: 'Blueberry', value: colors.blueberry400},
        ],
        showCustomHexInput: true,
      });

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
  describe('accessibility', () => {
    it('should have correct aria attributes', () => {
      renderColorPicker({value: colors.blueberry400});
      const swatchCinnamon = screen.getByRole('button', {name: /#fcc9c5/});
      const swatchBlueberry = screen.getByRole('button', {name: /#0875e1/});

      expect(swatchCinnamon).toHaveAttribute('aria-selected', 'false');
      expect(swatchBlueberry).toHaveAttribute('aria-selected', 'true');

      expect(swatchCinnamon.getAttribute('aria-label')).toBe('#fcc9c5');
      expect(swatchBlueberry.getAttribute('aria-label')).toBe('#0875e1');
    });

    it('should use color labels when provided', () => {
      renderColorPicker({
        colorSet: [
          {label: 'Cinnamon', value: colors.cinnamon200},
          {label: 'Blueberry', value: colors.blueberry400},
        ],
        value: colors.cinnamon200,
      });
      const swatchCinnamon = screen.getByRole('button', {name: /Cinnamon/});
      const swatchBlueberry = screen.getByRole('button', {name: /Blueberry/});

      expect(swatchCinnamon.getAttribute('aria-label')).toBe('Cinnamon');
      expect(swatchBlueberry.getAttribute('aria-label')).toBe('Blueberry');
    });
  });
});
