import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-labs-react/segmented-control';
import {starIcon, searchIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Labs/Segmented Control/React',
  component: SegmentedControl,
};

export const Default = () => {
  return (
    <>
      <SegmentedControl>
        <SegmentedControl.List>
          <SegmentedControl.Item data-id="table" icon={starIcon} />
          <SegmentedControl.Item data-id="list" icon={searchIcon} />
        </SegmentedControl.List>
      </SegmentedControl>
    </>
  );
};
