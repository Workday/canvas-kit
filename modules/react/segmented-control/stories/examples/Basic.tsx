import * as React from 'react';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';
import {TertiaryButtonNew} from '@workday/canvas-kit-react/button';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>();
  const handleToggle = (selectedValue: string | number) => {
    console.warn(selectedValue);

    setValue(selectedValue);
  };

  return (
    <SegmentedControl value={value} onChange={handleToggle}>
      <SegmentedControl.Button
        icon={listViewIcon}
        value="list-view"
        onClick={e => console.log('Existing TertiaryButtonNew onClick callback')}
      />
      <SegmentedControl.Button icon={worksheetsIcon} value="table-view" disabled={true} />
      <SegmentedControl.Button
        icon={deviceTabletIcon}
        value="device-view"
        aria-label="Device View"
      />
      <SegmentedControl.Button
        icon={percentageIcon}
        value="percent-view"
        aria-label="Percent View"
      />
    </SegmentedControl>
  );
};
