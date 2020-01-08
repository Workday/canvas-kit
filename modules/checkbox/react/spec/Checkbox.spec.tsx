import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Checkbox from '../lib/Checkbox';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

const label = 'Test Checkbox';

describe('Checkbox', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with an id', () => {
      test('should render a checkbox input with id', () => {
        const id = 'myCheckbox';
        const {getByLabelText} = render(<Checkbox id={id} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toHaveAttribute('id', id);
      });
    });

    describe('with a value', () => {
      test('should render a checkbox input with value', () => {
        const value = 'myCheckbox';
        const {getByDisplayValue} = render(<Checkbox value={value} onChange={cb} />);
        expect(getByDisplayValue(value)).toBeDefined();
      });
    });

    describe('with checked=true', () => {
      test('should render a checked checkbox input', () => {
        const {getByLabelText} = render(<Checkbox checked={true} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toHaveProperty('checked', true);
      });
    });

    describe('with defaultChecked=true', () => {
      test('should render a checked checkbox input', () => {
        const {getByLabelText} = render(
          <Checkbox defaultChecked={true} onChange={cb} label={label} />
        );
        expect(getByLabelText(label)).toHaveProperty('checked', true);
      });
    });

    describe('with defaultChecked=false and checked=true', () => {
      test('should render a checked checkbox input', () => {
        const {getByLabelText} = render(
          <Checkbox defaultChecked={false} checked={true} onChange={cb} label={label} />
        );
        expect(getByLabelText(label)).toHaveProperty('checked', true);
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled checkbox input', () => {
        const {getByLabelText} = render(<Checkbox disabled={true} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toHaveProperty('disabled', true);
      });
    });

    test('should pass axe DOM accessibility guidelines', async () => {
      const html = ReactDOMServer.renderToString(
        <Checkbox id={'123'} label={'Label'} onChange={jest.fn()} />
      );
      expect(await axe(html)).toHaveNoViolations();
    });

    describe('without a defined id', () => {
      test('should pass axe DOM accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(
          <Checkbox label={'Label'} onChange={jest.fn()} />
        );
        expect(await axe(html)).toHaveNoViolations();
      });
    });

    describe('wrapped in a FormField', () => {
      test('should pass axe DOM accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(
          <FormField label="My Field" inputId="my-checkbox-field">
            <Checkbox disabled={false} checked={true} id="my-checkbox-field" onChange={jest.fn()} />
          </FormField>
        );
        expect(await axe(html)).toHaveNoViolations();
      });
    });

    describe('without an id', () => {
      test('should create a unique id for each instance', async () => {
        const {getByLabelText} = render(
          <form>
            <Checkbox checked={true} onChange={jest.fn()} disabled={false} label={label + 1} />;
            <Checkbox onChange={jest.fn()} disabled={false} label={label + 2} />;
          </form>
        );

        const id1 = getByLabelText(label + 1).getAttribute('id');
        const id2 = getByLabelText(label + 2).getAttribute('id');

        expect(id1).not.toEqual(id2);
      });
    });

    describe('with extra, arbitrary props', () => {
      test('should spread extra props', () => {
        const attr = 'test';
        const {getByLabelText} = render(
          <Checkbox data-propspread={attr} onChange={cb} label={label} />
        );
        expect(getByLabelText(label)).toHaveAttribute('data-propspread', attr);
      });
    });
  });

  describe('when clicked', () => {
    test('should call a callback function', () => {
      const {getByLabelText} = render(<Checkbox onChange={cb} label={label} />);
      fireEvent.click(getByLabelText(label));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when provided an input ref', () => {
    test('input ref should be defined', () => {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      render(<Checkbox inputRef={ref} onChange={cb} label={label} />);
      expect(ref.current).toBeDefined();
    });
  });
});
