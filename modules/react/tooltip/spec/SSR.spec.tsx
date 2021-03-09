/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import Tooltip from '../';

describe('Tooltip', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Tooltip title="test">
          <span>Test</span>
        </Tooltip>
      );
    expect(ssrRender).not.toThrow();
  });
});
