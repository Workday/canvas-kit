import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TextInput from '../lib/TextInput';

const id = 'Test Text Input';
const placeholder = 'Test Text Input';
const value = 'Test Text Input';

describe('Text Input', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render an input with type=text', () => {
      const {getByRole} = render(<TextInput onChange={cb} />);
      expect(getByRole('textbox')).toHaveProperty('type', 'text');
    });
  });

  describe('when rendered with a placeholder', () => {
    it('should render a text input with placeholder', () => {
      const {getByRole} = render(<TextInput onChange={cb} placeholder={placeholder} />);
      expect(getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a text input with a id', () => {
      const {getByRole} = render(<TextInput id={id} onChange={cb} />);
      expect(getByRole('textbox')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a text input with a value', () => {
      const {getByDisplayValue} = render(<TextInput onChange={cb} value={value} />);
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled text input', () => {
      const {getByRole} = render(<TextInput onChange={cb} disabled={true} />);
      expect(getByRole('textbox')).toBeDisabled();
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props onto the text input', () => {
      const attr = 'test';
      const {getByRole} = render(<TextInput onChange={cb} data-propspread={attr} />);
      expect(getByRole('textbox')).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when provided an input ref', () => {
    it('should set the ref to the input element', async () => {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      const {findByRole} = render(<TextInput inputRef={ref} />);
      expect(await findByRole('textbox')).toEqual(ref.current);
    });
  });

  describe('when typed into', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(<TextInput onChange={cb} />);
      fireEvent.change(getByRole('textbox'), {target: {value: 'Test'}});
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});
