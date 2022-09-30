import React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Sizes = () => (
  <>
    <Box marginBottom="xxs">
      <BodyText size="medium" fontWeight="bold">
        Small
      </BodyText>
      <SegmentedControl variant="text" size="small">
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Medium
      </BodyText>
      <SegmentedControl variant="text" size="medium">
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Large
      </BodyText>
      <SegmentedControl variant="text" size="large">
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
  </>
);
