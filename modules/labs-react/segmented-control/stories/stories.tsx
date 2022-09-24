import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-labs-react/segmented-control';
import {gridViewIcon, listViewIcon, listDetailIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Labs/Segmented Control/React',
  component: SegmentedControl,
};

export const Default = () => {
  return (
    <>
      <SegmentedControl size="large">
        <SegmentedControl.List>
          <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view">List</SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail">Detail</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </>
  );
};
