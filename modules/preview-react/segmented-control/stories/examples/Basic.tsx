import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Basic = () => {
  const [viewType, setViewType] = React.useState('table');

  return (
    <>
      <SegmentedControl initialValue={viewType} onSelect={data => setViewType(data.id)}>
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
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
      <BodyText size="small" marginTop="s">
        Selected: {viewType}
      </BodyText>
    </>
  );
};
