/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {StatusIndicator} from '../';

describe('StatusIndicator', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <StatusIndicator>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
          <StatusIndicator.Label>Content</StatusIndicator.Label>
        </StatusIndicator>
      );
    expect(ssrRender).not.toThrow();
  });
});
