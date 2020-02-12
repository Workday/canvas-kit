import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {colors} from '@workday/canvas-kit-react-core';
import {ColorPicker, ColorPickerProps} from '@workday/canvas-kit-labs-react-color-picker';

describe('<ColorPicker /> component', () => {
  const dataTestId = 'TESTY_TEST';

  const renderColorPicker = (props?: Partial<ColorPickerProps>) => {
    return render(<ColorPicker data-test-id={dataTestId} onChange={jest.fn()} {...props} />);
  };

  it('should include aria-label', () => {
    const ariaLabel = 'Background Color';
    const {container, unmount} = renderColorPicker({ariaLabel});

    expect(container.querySelector(`[aria-label="${ariaLabel}"]`)).not.toBeNull();
    unmount();
  });

  it('should call onChange handler when clicking a color swatch', () => {
    const onChange = jest.fn();
    const {container, unmount} = renderColorPicker({onChange});
    const colorSwatch = container.querySelector('#canvas-color-picker--color-333333')!;

    fireEvent.click(colorSwatch);
    expect(onChange).toHaveBeenCalledWith(colors.blackPepper400);
    unmount();
  });

  it('should call onChange handler when selecting a color swatch with ENTER', () => {
    const onChange = jest.fn();
    const {container, unmount} = renderColorPicker({onChange});
    const colorSwatch = container.querySelector('#canvas-color-picker--color-333333')!;

    fireEvent.mouseEnter(colorSwatch);
    fireEvent.keyDown(colorSwatch, {key: 'Enter'});
    expect(onChange).toHaveBeenCalledWith(colors.blackPepper400);
    unmount();
  });

  it('should display custom hex codes in the custom input', () => {
    const {container, unmount} = renderColorPicker({
      selectedColor: '#abcdef',
      showCustomInput: true,
    });
    const input = container.querySelector('input')!;

    expect(input.getAttribute('value')).toBe('abcdef');
    unmount();
  });

  it('should NOT display known colors in the custom input', () => {
    const {container, unmount} = renderColorPicker({
      selectedColor: colors.blueberry400,
      showCustomInput: true,
    });
    const input = container.querySelector('input')!;

    expect(input.getAttribute('value')).toBe('');
    unmount();
  });

  describe('custom hex input', () => {
    it('should NOT render by default', () => {
      const {container, unmount} = renderColorPicker();

      expect(container.querySelector('input')).toBeNull();
      unmount();
    });

    it('should render when prop is true', () => {
      const {container, unmount} = renderColorPicker({showCustomInput: true});

      expect(container.querySelector('input')).not.toBeNull();
      unmount();
    });

    it('should call onChange handler when entering custom hex code', () => {
      const onChange = jest.fn();
      const {container, unmount} = renderColorPicker({onChange, showCustomInput: true});
      const input = container.querySelector('input')!;

      fireEvent.mouseEnter(input);
      fireEvent.change(input, {target: {value: '123456'}});
      fireEvent.keyDown(input, {key: 'Enter'});
      expect(onChange).toHaveBeenCalledWith('#123456');
      unmount();
    });

    it('should convert custom hex code from three to six characters', () => {
      const onChange = jest.fn();
      const {container, unmount} = renderColorPicker({onChange, showCustomInput: true});
      const input = container.querySelector('input')!;

      fireEvent.mouseEnter(input);
      fireEvent.change(input, {target: {value: 'ABC'}});
      fireEvent.keyDown(input, {key: 'Enter'});
      expect(onChange).toHaveBeenCalledWith('#AABBCC');
      unmount();
    });

    it('should NOT call onChange handler when entering invalid custom hex value', () => {
      const onChange = jest.fn();
      const {container, unmount} = renderColorPicker({onChange, showCustomInput: true});
      const input = container.querySelector('input')!;

      fireEvent.mouseEnter(input);
      fireEvent.change(input, {target: {value: '42'}});
      fireEvent.keyDown(input, {key: 'Enter'});
      expect(onChange).not.toHaveBeenCalled();
      unmount();
    });
  });

  describe('reset button', () => {
    it('should NOT render by default', () => {
      const {container, unmount} = renderColorPicker();
      const reset = container.querySelector('#canvas-color-picker--reset');

      expect(reset).toBeNull();
      unmount();
    });

    it('should render when onReset and resetColor props is provided', () => {
      const onReset = jest.fn();
      const resetColor = colors.berrySmoothie100;
      const {container, unmount} = renderColorPicker({onReset, resetColor});
      const reset = container.querySelector('#canvas-color-picker--reset');

      expect(reset).not.toBeNull();
      unmount();
    });

    it('should use custom label', () => {
      const onReset = jest.fn();
      const resetLabel = 'foobarbaz';
      const resetColor = colors.blueberry400;
      const {container, unmount} = renderColorPicker({onReset, resetColor, resetLabel});
      const resetText = container.querySelector(
        '#canvas-color-picker--reset #canvas-color-picker--reset-label'
      )!;
      expect(resetText.innerHTML).toBe(resetLabel);
      unmount();
    });

    it('should call onReset handler when clicking', () => {
      const onReset = jest.fn();
      const resetColor = colors.blueberry400;
      const {container, unmount} = renderColorPicker({onReset, resetColor});
      const reset = container.querySelector('#canvas-color-picker--reset')!;

      fireEvent.click(reset);
      expect(onReset).toHaveBeenCalled();
      unmount();
    });

    it('should call onReset handler when selecting with ENTER', () => {
      const onReset = jest.fn();
      const resetColor = colors.blueberry400;
      const {container, unmount} = renderColorPicker({onReset, resetColor});
      const reset = container.querySelector('#canvas-color-picker--reset')!;

      fireEvent.mouseEnter(reset);
      fireEvent.keyDown(reset, {key: 'Enter'});
      expect(onReset).toHaveBeenCalled();
      unmount();
    });
  });
});
