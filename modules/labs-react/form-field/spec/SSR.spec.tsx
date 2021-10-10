/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {FormField} from '../';

describe('FormField', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <FormField>
          <FormField.Label>You can't put a label on me</FormField.Label>
          <FormField.Input />
          <FormField.Hint>SSR or bust</FormField.Hint>
        </FormField>
      );
    expect(ssrRender).not.toThrow();
  });
});
