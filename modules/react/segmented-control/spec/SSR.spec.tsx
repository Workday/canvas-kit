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
          <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view">List</SegmentedControl.Item>
        </SegmentedControl>
      );
    expect(ssrRender).not.toThrow();
  });
});
