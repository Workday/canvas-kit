import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Radio from '../lib/Radio';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '../../../form-field/react';

const label = 'Test Radio';

describe('Radio', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with an id', () => {
      test('should render a radio input with id', () => {
        const id = 'myRadio';
        const {getByLabelText} = render(<Radio id={id} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toHaveAttribute('id', id);
      });
    });

    describe('with a value', () => {
      test('should render a radio input with value', () => {
        const value = 'myRadio';
        const {getByDisplayValue} = render(<Radio value={value} onChange={cb} />);
        expect(getByDisplayValue(value)).toBeDefined();
      });
    });

    describe('with checked=true', () => {
      test('should render a checked radio input', () => {
        const {getByLabelText} = render(<Radio checked={true} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toBeChecked();
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled radio input', () => {
        const {getByLabelText} = render(<Radio disabled={true} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toBeDisabled();
      });
    });

    test('should pass axe DOM accessibility guidelines', async () => {
      const html = ReactDOMServer.renderToString(
        <Radio id={'123'} label={'Label'} onChange={jest.fn()} />
      );
      expect(await axe(html)).toHaveNoViolations();
    });

    describe('without a defined id', () => {
      test('should pass axe DOM accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(<Radio label={'Label'} onChange={jest.fn()} />);
        expect(await axe(html)).toHaveNoViolations();
      });
    });

    describe('wrapped in a FormField', () => {
      test('should pass axe DOM accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(
          <FormField label="My Field" inputId="my-radio-field">
            <Radio disabled={false} checked={true} id="my-radio-field" onChange={jest.fn()} />
          </FormField>
        );
        expect(await axe(html)).toHaveNoViolations();
      });
    });

    describe('without an id', () => {
      test('should create a unique id for each instance', async () => {
        const {getByLabelText} = render(
          <form>
            <Radio checked={true} onChange={jest.fn()} disabled={false} label={label + 1} />;
            <Radio onChange={jest.fn()} disabled={false} label={label + 2} />;
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
          <Radio data-propspread={attr} onChange={cb} label={label} />
        );
        expect(getByLabelText(label)).toHaveAttribute('data-propspread', attr);
      });
    });
  });

  describe('when clicked', () => {
    test('should call a callback function', () => {
      const {getByLabelText} = render(<Radio onChange={cb} label={label} />);
      fireEvent.click(getByLabelText(label));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when provided an input ref', () => {
    test('input ref should be defined', () => {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      render(<Radio inputRef={ref} onChange={cb} label={label} />);
      expect(ref.current).toBeDefined();
    });
  });
});
