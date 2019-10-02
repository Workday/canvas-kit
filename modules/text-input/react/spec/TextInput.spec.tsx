import * as React from 'react';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import TextInput from '../lib/TextInput';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('TextInput', () => {
  test('TextInput should spread extra props', () => {
    const component = mount(<TextInput data-propspread="test" />);
    const input = component
      .find('input') // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('Text Input Accessibility', () => {
  test('Text Input in a FormField should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <FormField
        label="My Field"
        inputId="my-input-field"
        hintText="Helpful text to resolve error"
        hintId="my-input-field-error"
        error={FormField.ErrorType.Error}
      >
        <TextInput placeholder="Placeholder" value={'Hello'} onChange={jest.fn()} />;
      </FormField>
    );
    expect(await axe(html)).toHaveNoViolations();
  });

  test('Text Input with `aria-labelledby` should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <>
        <label id="123">Label</label>
        <TextInput placeholder="Placeholder" value={'Hello'} aria-labelledby="123" />;
      </>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
