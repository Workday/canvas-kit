/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {TextArea} from '../';

describe('TextArea', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <TextArea orientation="vertical">
          <TextArea.Label>You can't put a label on me</TextArea.Label>
          <TextArea.Field />
          <TextArea.Hint>SSR or bust</TextArea.Hint>
        </TextArea>
      );
    expect(ssrRender).not.toThrow();
  });
});
