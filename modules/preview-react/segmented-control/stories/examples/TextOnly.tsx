import React from 'react';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export const TextOnly = () => (
  <SegmentedControl>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
      <SegmentedControl.Item data-id="list">List</SegmentedControl.Item>
      <SegmentedControl.Item data-id="diagram">Diagram</SegmentedControl.Item>
    </SegmentedControl.List>
  </SegmentedControl>
);
