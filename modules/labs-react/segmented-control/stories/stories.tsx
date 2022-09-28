import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-labs-react/segmented-control';
import {
  gridViewIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {Box} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Labs/Segmented Control/React',
  component: SegmentedControl,
};

export const Default = () => {
  return (
    <>
      <Box marginBottom="s">
        <SegmentedControl size="large">
          <SegmentedControl.List aria-label="Content view type">
            <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-view">List</SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-detail">Details</SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
      <Box marginBottom="s">
        <SegmentedControl initialValue="list-detail">
          <SegmentedControl.List>
            <SegmentedControl.Item data-id="table" icon={gridViewIcon}>
              Table
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
              List
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
              Detail
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
              Diagram
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
      <Box marginBottom="s">
        <SegmentedControl>
          <SegmentedControl.List>
            <SegmentedControl.Item data-id="table" icon={gridViewIcon} />
            <SegmentedControl.Item data-id="list-view" icon={listViewIcon} />
            <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon} />
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
      <Box marginBottom="s">
        <SegmentedControl orientation="vertical" disabled>
          <SegmentedControl.List>
            <SegmentedControl.Item icon={gridViewIcon} />
            <SegmentedControl.Item icon={listViewIcon} />
            <SegmentedControl.Item icon={listDetailIcon} />
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
      <Box marginBottom="s">
        <SegmentedControl size="small" initialValue="list-detail">
          <SegmentedControl.List>
            <SegmentedControl.Item data-id="table" icon={gridViewIcon}>
              Table
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
              List
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
              Detail
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
    </>
  );
};
