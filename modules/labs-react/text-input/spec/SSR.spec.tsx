/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {TextInput} from '../';

describe('TextInput', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <TextInput>
          <TextInput.Label>You can't put a label on me</TextInput.Label>
          <TextInput.Field />
          <TextInput.Hint>SSR or bust</TextInput.Hint>
        </TextInput>
      );
    expect(ssrRender).not.toThrow();
  });
});
