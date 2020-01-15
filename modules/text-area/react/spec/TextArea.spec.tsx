import * as React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import TextArea from '../lib/TextArea';
import FormField from '@workday/canvas-kit-react-form-field';

const id = 'Test Text Area';
const label = 'Test Text Area';
const placeholder = 'Test Text Area';
const value = 'Test Text Area';

describe('Text Area', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with an placeholder', () => {
      it('should render a text area with placeholder', () => {
        const {getByPlaceholderText} = render(
          <TextArea onChange={cb} data-testid={id} placeholder={placeholder} />
        );
        const container = document.body;
        expect(getByTestId(container, id)).toHaveAttribute('placeholder', placeholder);
      });
    });

    describe('with a id', () => {
      it('should render a text area with a id', () => {
        const {getByPlaceholderText} = render(
          <TextArea id={id} onChange={cb} value={value} placeholder={placeholder} />
        );
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('id', id);
      });
    });

    describe('with a value', () => {
      it('should render a text area with a value', () => {
        const {getByDisplayValue} = render(<TextArea onChange={cb} value={value} />);
        expect(getByDisplayValue(value)).toBeDefined();
      });
    });

    describe('with disabled attribute', () => {
      it('should render a disabled text area', () => {
        const {getByDisplayValue} = render(
          <TextArea onChange={cb} disabled={true} value={value} />
        );
        expect(getByDisplayValue(value)).toBeDisabled();
      });
    });

    describe('with extra, arbitrary props', () => {
      it('should spread extra props', () => {
        const attr = 'test';
        const {getByPlaceholderText} = render(
          <TextArea onChange={cb} data-propspread={attr} placeholder={placeholder} />
        );
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('data-propspread', attr);
      });
    });
  });

  describe('when provided an input ref', () => {
    it('should set the ref to the input element', () => {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      render(<TextArea inputRef={ref} id={id}/>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toHaveAttribute('id', id);
    });
  });
});
