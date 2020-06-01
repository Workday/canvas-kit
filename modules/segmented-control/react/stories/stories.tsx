/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

import {IconButton} from '@workday/canvas-kit-react-button';
import {SegmentedControl} from '../index';

import README from '../README.md';

storiesOf('Labs|Segmented Control/React', module)
  .addParameters({component: SegmentedControl})
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const [value, setValue] = React.useState<string | number>();
    const handleToggle = (selectedValue: string | number) => {
      setValue(selectedValue);
      action('Segmented Control selection change')(selectedValue);
    };

    return (
      <SegmentedControl value={value} onChange={handleToggle}>
        <IconButton
          icon={listViewIcon}
          value="list-view"
          aria-label="List View"
          onClick={e => action('Existing IconButton onClick callback')(e)}
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
  });
