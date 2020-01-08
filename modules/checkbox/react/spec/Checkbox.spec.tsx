import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Checkbox from '../lib/Checkbox';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('Checkbox', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with an id', () => {
      test('should render a checkbox input with id', () => {
        const id = 'myCheckbox';
        const {getByRole} = render(<Checkbox id={id} onChange={cb} />);
        expect(getByRole('checkbox')).toHaveAttribute('id', id);
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
        const {getByRole} = render(<Checkbox checked={true} onChange={cb} />);
        expect(getByRole('checkbox')).toHaveProperty('checked', true);
      });
    });

    describe('with defaultChecked=true', () => {
      test('should render a checked checkbox input', () => {
        const {getByRole} = render(<Checkbox defaultChecked={true} onChange={cb} />);
        expect(getByRole('checkbox')).toHaveProperty('checked', true);
      });
    });

    describe('with defaultChecked=false and checked=true', () => {
      test('should render a checked checkbox input', () => {
        const {getByRole} = render(
          <Checkbox defaultChecked={false} checked={true} onChange={cb} />
        );
        expect(getByRole('checkbox')).toHaveProperty('checked', true);
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled checkbox input', () => {
        const {getByRole} = render(<Checkbox disabled={true} onChange={cb} />);
        expect(getByRole('checkbox')).toHaveProperty('disabled', true);
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
            <Checkbox checked={true} onChange={jest.fn()} disabled={false} label="label1" />;
            <Checkbox onChange={jest.fn()} disabled={false} label="label2" />;
          </form>
        );

        const id1 = getByLabelText('label1').getAttribute('id');
        const id2 = getByLabelText('label2').getAttribute('id');

        expect(id1).not.toEqual(id2);
      });
    });

    describe('with extra, arbitrary props', () => {
      test('should spread extra props', () => {
        const attr = 'test';
        const {getByRole} = render(<Checkbox data-propspread={attr} onChange={cb} />);
        expect(getByRole('checkbox')).toHaveAttribute('data-propspread', attr);
      });
    });
  });

  describe('when clicked', () => {
    test('should call a callback function', () => {
      const {getByRole} = render(<Checkbox onChange={cb} />);
      fireEvent.click(getByRole('checkbox'));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when provided an input ref', () => {
    test('input ref should be defined', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox inputRef={ref} onChange={cb} />);
      expect(ref.current).toBeDefined();
    });
  });
});
