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

  describe('when rendered with an id', () => {
    it('should render a checkbox input with id', () => {
      const id = 'myCheckbox';
      const {getByRole} = render(<Checkbox id={id} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a checkbox input with value', () => {
      const value = 'myCheckbox';
      const {getByDisplayValue} = render(<Checkbox value={value} onChange={cb} />);
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with checked=true', () => {
    it('should render a checked checkbox input', () => {
      const {getByRole} = render(<Checkbox checked={true} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with defaultChecked=true', () => {
    it('should render a checked checkbox input', () => {
      const {getByRole} = render(<Checkbox defaultChecked={true} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with defaultChecked=false and checked=true', () => {
    it('should render a checked checkbox input', () => {
      const {getByRole} = render(<Checkbox defaultChecked={false} checked={true} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled checkbox input', () => {
      const {getByRole} = render(<Checkbox disabled={true} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveProperty('disabled', true);
    });
  });

  it('when rendered should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <Checkbox id={'123'} label={'Label'} onChange={cb} />
    );
    expect(await axe(html)).toHaveNoViolations();
  });

  describe('when rendered without a defined id', () => {
    it('should pass axe DOM accessibility guidelines', async () => {
      const html = ReactDOMServer.renderToString(<Checkbox label={'Label'} onChange={cb} />);
      expect(await axe(html)).toHaveNoViolations();
    });
  });

  describe('when rendered wrapped in a FormField', () => {
    it('should pass axe DOM accessibility guidelines', async () => {
      const html = ReactDOMServer.renderToString(
        <FormField label="My Field" inputId="my-checkbox-field">
          <Checkbox disabled={false} checked={true} id="my-checkbox-field" onChange={cb} />
        </FormField>
      );
      expect(await axe(html)).toHaveNoViolations();
    });
  });

  describe('when rendered without an id', () => {
    it('should create a unique id for each instance', async () => {
      const {getByLabelText} = render(
        <form>
          <Checkbox checked={true} onChange={cb} disabled={false} label="label1" />;
          <Checkbox onChange={cb} disabled={false} label="label2" />;
        </form>
      );

      const id1 = getByLabelText('label1').getAttribute('id');
      const id2 = getByLabelText('label2').getAttribute('id');

      expect(id1).not.toEqual(id2);
    });

    it('should keep the same unique id if re-rendered', () => {
      const {getByRole, rerender} = render(<Checkbox checked={false} onChange={cb} />);

      const uniqueId = getByRole('checkbox').getAttribute('id');
      expect(getByRole('checkbox')).toHaveProperty('id', uniqueId);

      rerender(<Checkbox checked={true} onChange={cb} />);

      expect(getByRole('checkbox')).toHaveProperty('checked');
      expect(getByRole('checkbox')).toHaveProperty('id', uniqueId);
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props', () => {
      const attr = 'test';
      const {getByRole} = render(<Checkbox data-propspread={attr} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when rendered with an input ref', () => {
    it('input ref should be defined', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox inputRef={ref} onChange={cb} />);
      expect(ref.current).toBeDefined();
    });
  });

  describe('when clicked', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(<Checkbox onChange={cb} />);
      fireEvent.click(getByRole('checkbox'));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});
