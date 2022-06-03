import * as React from 'react';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

export const WithText = () => {
  const [value, setValue] = React.useState<string | number>();
  const handleToggle = (selectedValue: string | number) => {
    setValue(selectedValue);
  };

  return (
    <SegmentedControl value={value} onChange={handleToggle}>
      <SegmentedControl.Button
        label="pizza"
        // icon={listViewIcon}
        value="list-view"
        onClick={e => console.log('Existing TertiaryButton onClick callback')}
        id="test"
      />
      <SegmentedControl.Button
        // icon={deviceTabletIcon}
        label="cookies"
        value="device-view"
        aria-label="Device View"
      />
      <SegmentedControl.Button
        // icon={percentageIcon}
        label="cake"
        value="percent-view"
        aria-label="Percent View"
      />
    </SegmentedControl>
  );
};
