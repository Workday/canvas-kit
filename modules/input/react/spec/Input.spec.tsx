import * as React from 'react';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import Input from '../lib/Input';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('Input', () => {
  test('Input should spread extra props', () => {
    const component = mount(<Input data-propspread="test" />);
    const input = component
      .find('input') // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('Input Accessibility', () => {
  test('Input in a FormField should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <FormField
        label="My Field"
        inputId="my-input-field"
        hintText="Helpful text to resolve error"
        hintId="my-input-field-error"
        error={FormField.ErrorType.Error}
      >
        <Input placeholder="Placeholder" value={'Hello'} onChange={jest.fn()} />;
      </FormField>
    );
    expect(await axe(html)).toHaveNoViolations();
  });

  test('Input with `aria-labelledBy` should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <>
        <label id="123">Label</label>
        <Input placeholder="Placeholder" value={'Hello'} aria-labelledBy="123" />;
      </>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
