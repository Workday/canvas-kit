import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import {render, fireEvent} from '@testing-library/react';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

const id = 'color-input';
const placeholder = '000000';
const value = 'eee';

describe('Color Input', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with a placeholder', () => {
      test('should render a color input with a placeholder', () => {
        const {getByTestId} = render(
          <ColorInput onChange={cb} placeholder={placeholder} data-testid={id} />
        );
        expect(getByTestId(id)).toHaveAttribute('placeholder', placeholder);
      });
    });

    describe('with an id', () => {
      test('should render a color input with a id', () => {
        const {getByTestId} = render(
          <ColorInput id="my-id" onChange={cb} value={value} data-testid={id} />
        );
        expect(getByTestId(id)).toHaveAttribute('id', 'my-id');
      });
    });

    describe('with a value', () => {
      test('should render a color input with a value', () => {
        const {getByTestId} = render(<ColorInput onChange={cb} value={value} data-testid={id} />);
        expect(getByTestId(id)).toBeDefined();
      });
    });

    describe('with a value and check', () => {
      test('should render a color input with a value and check', () => {
        const {container} = render(<ColorInput value={value} showCheck={true} />);

        expect(container.querySelector('svg')).toHaveClass('wd-icon-check-small');
      });
    });

    describe('with a value and background', () => {
      test('should render a color input with a value and the value as a background', () => {
        const {container} = render(<ColorInput value={value} />);

        expect(container.querySelector('div div div[class^="css"]')).toHaveStyle(
          'background-color: #eee;'
        );
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled color input', () => {
        const {getByTestId} = render(<ColorInput onChange={cb} disabled={true} data-testid={id} />);
        expect(getByTestId(id)).toBeDisabled();
      });
    });

    describe('wrapped in a FormField', () => {
      test('should pass axe DOM accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(
          <FormField label="My Field" inputId="my-text-input-field">
            <ColorInput id="my-color-input" />
          </FormField>
        );
        expect(await axe(html)).toHaveNoViolations();
      });
    });

    describe('with extra, arbitrary props', () => {
      test('should spread extra props', () => {
        const attr = 'test';
        const {getByTestId} = render(
          <ColorInput onChange={cb} data-propspread={attr} data-testid={id} />
        );
        expect(getByTestId(id)).toHaveAttribute('data-propspread', attr);
      });
    });

    describe('when provided an input ref', () => {
      test('input ref should be defined', () => {
        const ref: React.RefObject<HTMLInputElement> = React.createRef();
        render(<ColorInput inputRef={ref} />);
        expect(ref.current).toBeDefined();
      });
    });

    describe('when provided a value with a hashtag', () => {
      test('the value is stripped', () => {
        const {getByTestId} = render(<ColorInput value={'#eee'} data-testid={id} />);
        expect(getByTestId(id).value).toBe(value);
      });
    });

    describe('when provided more than 6 characters as the value', () => {
      test('the value is stripped', () => {
        const {getByTestId} = render(<ColorInput value={'123456789'} data-testid={id} />);
        expect(getByTestId(id).value).toBe('123456');
      });
    });
  });

  describe('when changed', () => {
    test('should update value', () => {
      const {getByTestId} = render(<ColorInput value="" data-testid={id} />);

      expect(getByTestId(id).value).toBe('');
      getByTestId(id).value = value;
      expect(getByTestId(id).value).toBe(value);
    });

    test('should call onChange callback on value change', () => {
      const {getByTestId} = render(<ColorInput onChange={cb} data-testid={id} />);

      const event = {
        target: {value: value},
      };

      expect(cb).toHaveBeenCalledTimes(0);
      fireEvent.change(getByTestId(id), event);
      expect(cb).toHaveBeenCalledTimes(1);
    });

    test('should strip value on change', () => {
      const {getByTestId, rerender} = render(<ColorInput value="" data-testid={id} />);

      expect(getByTestId(id).value).toBe('');
      rerender(<ColorInput value="#eee" data-testid={id} />);
      expect(getByTestId(id).value).toBe(value);
    });

    test('should call onValidColorChange prop onChange', () => {
      const {getByTestId} = render(<ColorInput onValidColorChange={cb} data-testid={id} />);

      const event = {
        target: {value: value},
      };

      expect(cb).toHaveBeenCalledTimes(0);
      fireEvent.change(getByTestId(id), event);
      expect(cb).toHaveBeenCalledWith('#eeeeee');
    });

    test('should not call onValidColorChange prop onChange if hex code is not valid', () => {
      const {getByTestId} = render(<ColorInput onValidColorChange={cb} data-testid={id} />);

      const event = {
        target: {value: 'e6ee'},
      };

      expect(cb).toHaveBeenCalledTimes(0);
      fireEvent.change(getByTestId(id), event);
      expect(cb).toHaveBeenCalledTimes(0);
    });
  });

  describe('ColorInput Accessibility', () => {
    test('ColorInput should pass axe DOM accessibility guidelines', async () => {
      const html = ReactDOMServer.renderToString(
        <FormField label="Label" inputId="input-plain">
          <ColorInput />
        </FormField>
      );
      expect(await axe(html)).toHaveNoViolations();
    });
  });
});
