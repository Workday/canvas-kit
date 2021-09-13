/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {ColorPicker} from '../';

describe('ColorPicker', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <ColorPicker>
          <ColorPicker.Target>Target</ColorPicker.Target>
          <ColorPicker.Content>Content</ColorPicker.Content>
        </ColorPicker>
      );
    expect(ssrRender).not.toThrow();
  });
});
