/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {SegmentedControl} from '../';

describe('SegmentedControl', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <SegmentedControl>
          <SegmentedControl.Target>Target</SegmentedControl.Target>
          <SegmentedControl.Content>Content</SegmentedControl.Content>
        </SegmentedControl>
      );
    expect(ssrRender).not.toThrow();
  });
});
