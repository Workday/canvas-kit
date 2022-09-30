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

export const TextVariants = () => (
  <>
    <Box marginBottom="xxs" maxWidth="450px">
      <BodyText size="medium" fontWeight="bold">
        Text with icon
      </BodyText>
      <SegmentedControl>
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
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
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Text only
      </BodyText>
      <SegmentedControl>
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view">List</SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail">Detail</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
  </>
);
