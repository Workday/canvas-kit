import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {gridIcon, listViewIcon, pieChartIcon} from '@workday/canvas-system-icons-web';

export const TextAndIcon = () => (
  <SegmentedControl>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon}>
        Table
      </SegmentedControl.Item>
      <SegmentedControl.Item data-id="list" icon={listViewIcon}>
        List
      </SegmentedControl.Item>
      <SegmentedControl.Item data-id="diagram" icon={pieChartIcon}>
        Diagram
      </SegmentedControl.Item>
    </SegmentedControl.List>
  </SegmentedControl>
);
