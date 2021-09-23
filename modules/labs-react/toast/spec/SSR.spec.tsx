/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Toast} from '../';

describe('Toast', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Toast>
          <Toast.Target>Target</Toast.Target>
          <Toast.Content>Content</Toast.Content>
        </Toast>
      );
    expect(ssrRender).not.toThrow();
  });
});
