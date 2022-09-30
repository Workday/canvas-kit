import React from 'react';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Vertical = () => (
  <SegmentedControl orientation="vertical">
    <SegmentedControl.List aria-label="Content view type">
      <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Title'}} />
      <SegmentedControl.Item
        data-id="list-view"
        icon={listViewIcon}
        tooltipProps={{title: 'List'}}
      />
      <SegmentedControl.Item
        data-id="list-detail"
        icon={listDetailIcon}
        tooltipProps={{title: 'Detail'}}
      />
      <SegmentedControl.Item
        data-id="diagrams"
        icon={pieChartIcon}
        tooltipProps={{title: 'Diagram'}}
      />
    </SegmentedControl.List>
  </SegmentedControl>
);
