import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TextArea from '../lib/TextArea';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
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
      test('should render a text area with placeholder', () => {
        const {getByPlaceholderText} = render(<TextArea onChange={cb} placeholder={placeholder} />);
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('placeholder', placeholder);
      });
    });

    describe('with a id', () => {
      test('should render a text area with a id', () => {
        const {getByPlaceholderText} = render(
          <TextArea id={id} onChange={cb} value={value} placeholder={placeholder} />
        );
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('id', id);
      });
    });

    describe('with a value', () => {
      test('should render a text area with a value', () => {
        const {getByDisplayValue} = render(<TextArea onChange={cb} value={value} />);
        expect(getByDisplayValue(value)).toBeDefined();
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled text area', () => {
        const {getByDisplayValue} = render(
          <TextArea onChange={cb} disabled={true} value={value} />
        );
        expect(getByDisplayValue(value)).toBeDisabled();
      });
    });

    describe('wrapped in a FormField', () => {
      test('should pass axe DOM accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(
          <FormField label="My Field" inputId="my-text-area-field">
            <TextArea id="my-text-area-field" onChange={cb} />
          </FormField>
        );
        expect(await axe(html)).toHaveNoViolations();
      });
    });

    describe('with extra, arbitrary props', () => {
      test('should spread extra props', () => {
        const attr = 'test';
        const {getByPlaceholderText} = render(
          <TextArea onChange={cb} data-propspread={attr} placeholder={placeholder} />
        );
        expect(getByPlaceholderText(placeholder)).toHaveAttribute('data-propspread', attr);
      });
    });
  });

  describe('when provided an area ref', () => {
    test('area ref should be defined', () => {
      const ref: React.RefObject<HTMLAreaElement> = React.createRef();
      render(<TextArea inputRef={ref} />);
      expect(ref.current).toBeDefined();
    });
  });
});
