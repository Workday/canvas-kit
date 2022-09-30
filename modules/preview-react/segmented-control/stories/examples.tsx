import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {
  gridViewIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {Box} from '@workday/canvas-kit-react/layout';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export default {
  title: 'Labs/Segmented Control/React',
  component: SegmentedControl,
};

export const Default = () => {
  return (
    <Box maxWidth={700}>
      <Box marginBottom="s">
        <SegmentedControl size="large" variant="text" orientation="vertical">
          <SegmentedControl.List aria-label="Content view type">
            <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-view">List</SegmentedControl.Item>
            <SegmentedControl.Item data-id="list-detail">Detail</SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
      <Box marginBottom="s">
        <SegmentedControl initialValue="list-detail" variant="text">
          <SegmentedControl.List aria-label="Content view type">
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
      <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
        <Box marginBottom="s">
          <SegmentedControl initialValue="list-detail" variant="text">
            <SegmentedControl.List aria-label="Content view type">
              <SegmentedControl.Item data-id="table" icon={gridViewIcon}>
                שולחן
              </SegmentedControl.Item>
              <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
                רשימה
              </SegmentedControl.Item>
              <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
                פרטים
              </SegmentedControl.Item>
              <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
                תרשים
              </SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </Box>
      </CanvasProvider>
      <Box marginBottom="s">
        <SegmentedControl>
          <SegmentedControl.List aria-label="Content view type">
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
      <Box marginBottom="s">
        <SegmentedControl orientation="vertical" disabled>
          <SegmentedControl.List aria-label="Content view type">
            <SegmentedControl.Item icon={gridViewIcon} />
            <SegmentedControl.Item icon={listViewIcon} />
            <SegmentedControl.Item icon={listDetailIcon} />
          </SegmentedControl.List>
        </SegmentedControl>
      </Box>
      <Box marginBottom="s">
        <SegmentedControl size="small" initialValue="list-detail" variant="text">
          <SegmentedControl.List aria-label="Content view type">
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
    </Box>
  );
};
