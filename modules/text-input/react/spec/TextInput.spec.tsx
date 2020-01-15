import * as React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import TextInput from '../lib/TextInput';
import FormField from '@workday/canvas-kit-react-form-field';

const id = 'Test Text Input';
const label = 'Test Text Input';
const placeholder = 'Test Text Input';
const value = 'Test Text Input';

describe('Text Input', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with an placeholder', () => {
      it('should render a text input with placeholder', () => {
        const {getByPlaceholderText} = render(
          <TextInput onChange={cb} data-testid={id} placeholder={placeholder} />
        );
        const container = document.body;
        expect(getByTestId(container, id)).toHaveAttribute('placeholder', placeholder);
      });
    });

    describe('with a id', () => {
      it('should render a text input with a id', () => {
        const {getByPlaceholderText} = render(
          <TextInput id={id} onChange={cb} value={value} placeholder={placeholder} />
        );
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('id', id);
      });
    });

    describe('with a value', () => {
      it('should render a text input with a value', () => {
        const {getByDisplayValue} = render(<TextInput onChange={cb} value={value} />);
        expect(getByDisplayValue(value)).toBeDefined();
      });
    });

    describe('with disabled attribute', () => {
      it('should render a disabled text input', () => {
        const {getByDisplayValue} = render(
          <TextInput onChange={cb} disabled={true} value={value} />
        );
        expect(getByDisplayValue(value)).toBeDisabled();
      });
    });

    describe('with extra, arbitrary props', () => {
      it('should spread extra props onto the text input', () => {
        const attr = 'test';
        const {getByPlaceholderText} = render(
          <TextInput onChange={cb} data-propspread={attr} placeholder={placeholder} />
        );
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('data-propspread', attr);
      });
    });
  });

  describe('when provided an input ref', () => {
    it('should set the ref to the input element', () => {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      render(<TextInput inputRef={ref} id={id}/>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toHaveAttribute('id', id);
    });
  });
});
