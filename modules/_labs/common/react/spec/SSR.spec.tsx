/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Common} from '../';

describe('Common', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Common>
          <Common.Target>Target</Common.Target>
          <Common.Content>Content</Common.Content>
        </Common>
      );
    expect(ssrRender).not.toThrow();
  });
});
