import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TextArea from '../lib/TextArea';

const id = 'Test Text Area';
const placeholder = 'Test Text Area';
const value = 'Test Text Area';

describe('Text Area', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with a placeholder', () => {
    it('should render a text area with placeholder', () => {
      const {getByRole} = render(<TextArea onChange={cb} placeholder={placeholder} />);
      expect(getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a text area with a id', () => {
      const {getByRole} = render(<TextArea id={id} onChange={cb} />);
      expect(getByRole('textbox')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a text area with a value', () => {
      const {getByDisplayValue} = render(<TextArea onChange={cb} value={value} />);
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled text area', () => {
      const {getByRole} = render(<TextArea onChange={cb} disabled={true} />);
      expect(getByRole('textbox')).toBeDisabled();
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props', () => {
      const attr = 'test';
      const {getByRole} = render(<TextArea onChange={cb} data-propspread={attr} />);
      expect(getByRole('textbox')).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when provided an input ref', () => {
    it('should set the ref to the input element', async () => {
      const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();
      const {findByRole} = render(<TextArea inputRef={ref} />);
      expect(await findByRole('textbox')).toEqual(ref.current);
    });
  });

  describe('when typed into', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(<TextArea onChange={cb} />);
      fireEvent.change(getByRole('textbox'), {target: {value: 'Test'}});
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when typed into with placeholder', () => {
    it('should call a callback function and persist the value', () => {
      const {getByDisplayValue, getByRole} = render(
        <TextArea onChange={cb} placeholder={placeholder} />
      );
      fireEvent.change(getByRole('textbox'), {target: {value: 'Test'}});
      expect(cb).toHaveBeenCalledTimes(1);
      expect(getByDisplayValue('Test')).toBeDefined();
    });
  });
});
