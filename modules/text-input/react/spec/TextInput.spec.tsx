import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import TextInput from '../lib/TextInput';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

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

  test('Text Input with `aria-labelledBy` should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <>
        <label id="123">Label</label>
        <TextInput placeholder="Placeholder" value={'Hello'} aria-labelledBy="123" />;
      </>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
