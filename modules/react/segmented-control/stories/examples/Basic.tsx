import * as React from 'react';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';
import {DeprecatedSegmentedControl} from '@workday/canvas-kit-react/segmented-control';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>();
  const handleToggle = (selectedValue: string | number) => {
    setValue(selectedValue);
  };

  return (
    <DeprecatedSegmentedControl value={value} onChange={handleToggle}>
      <DeprecatedSegmentedControl.Button
        icon={listViewIcon}
        value="list-view"
        onClick={e => console.log('Existing TertiaryButton onClick callback')}
        id="test"
      />
      <DeprecatedSegmentedControl.Button icon={worksheetsIcon} value="table-view" disabled={true} />
      <DeprecatedSegmentedControl.Button
        icon={deviceTabletIcon}
        value="device-view"
        aria-label="Device View"
      />
      <DeprecatedSegmentedControl.Button
        icon={percentageIcon}
        value="percent-view"
        aria-label="Percent View"
      />
    </DeprecatedSegmentedControl>
  );
};
