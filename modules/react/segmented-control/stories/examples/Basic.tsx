import * as React from 'react';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';
import {IconButton} from '@workday/canvas-kit-react/button';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>();
  const handleToggle = (selectedValue: string | number) => {
    setValue(selectedValue);
  };

  return (
    <SegmentedControl value={value} onChange={handleToggle}>
      <IconButton
        icon={listViewIcon}
        value="list-view"
        aria-label="List View"
        onClick={e => console.log('Existing IconButton onClick callback')}
      />
      <IconButton
        icon={worksheetsIcon}
        value="table-view"
        aria-label="Table View"
        disabled={true}
      />
      <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
      <IconButton icon={percentageIcon} value="percent-view" aria-label="Percent View" />
    </SegmentedControl>
  );
};
