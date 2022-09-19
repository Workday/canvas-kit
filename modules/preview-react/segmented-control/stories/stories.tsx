import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export default {
  title: 'Preview/Segmented Control/React',
  component: SegmentedControl,
};

export const Default = () => {
  return (
    <SegmentedControl orientation="vertical">
      <SegmentedControl.List>
        <SegmentedControl.Item value="table">Table</SegmentedControl.Item>
        <SegmentedControl.Item value="list">List</SegmentedControl.Item>
      </SegmentedControl.List>
    </SegmentedControl>
  );
};
