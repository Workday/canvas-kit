/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StatusIndicator} from '../';

describe('StatusIndicator', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <StatusIndicator>
          {/* <StatusIndicator.Target>Target</StatusIndicator.Target>
          <StatusIndicator.Content>Content</StatusIndicator.Content> */}
        </StatusIndicator>
      );
    expect(ssrRender).not.toThrow();
  });
});
