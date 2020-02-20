/// <reference path="../../../../../typings.d.ts" />
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

import {IconButton, IconButtonVariant, ButtonSize} from '@workday/canvas-kit-labs-react-button';
import {SegmentedControl, SegmentedControlProps} from '../index';

import README from '../README.md';

// Wrapper to add state mgmt to SegmentedControls
export class SegmentedControlWrapper extends React.Component<
  {},
  {
    selectedValue: string | number;
  }
> {
  state = {
    selectedValue: '',
  };

  public render() {
    const child = this.props.children as React.ReactElement<SegmentedControlProps>;
    return React.cloneElement(child, {
      value: this.state.selectedValue === '' ? child.props.value : this.state.selectedValue,
      onChange: this.handleToggle,
    });
  }

  public handleToggle = (selectedValue: string | number) => {
    this.setState({selectedValue});
  };
}

storiesOf('Labs|Segmented Control/React', module)
  .addParameters({component: SegmentedControl})
  .addDecorator(withReadme(README))
  .add('Two Buttons', () => (
    <SegmentedControlWrapper>
      <SegmentedControl>
        <IconButton
          variant={IconButton.Variant.Circle}
          size={ButtonSize.Medium}
          icon={listViewIcon}
          aria-label="List View"
          onClick={e => {
            action('Existing IconButton onClick callback')(e);
          }}
        />
        <IconButton
          variant={IconButton.Variant.Circle}
          size={ButtonSize.Medium}
          aria-label="Worksheets"
          icon={worksheetsIcon}
        />
      </SegmentedControl>
    </SegmentedControlWrapper>
  ))

  .add('Four Buttons', () => (
    <SegmentedControlWrapper>
      <SegmentedControl>
        <IconButton
          variant={IconButton.Variant.Circle}
          size={ButtonSize.Medium}
          icon={listViewIcon}
          value="list-view"
          aria-label="List View"
        />
        <IconButton
          variant={IconButton.Variant.Circle}
          size={ButtonSize.Medium}
          icon={worksheetsIcon}
          value="table-view"
          aria-label="Table View"
        />
        <IconButton
          variant={IconButton.Variant.Circle}
          size={ButtonSize.Medium}
          icon={deviceTabletIcon}
          value="device-view"
          aria-label="Device View"
        />
        <IconButton
          variant={IconButton.Variant.Circle}
          size={ButtonSize.Medium}
          icon={percentageIcon}
          value="percent-view"
          aria-label="Percent View"
        />
      </SegmentedControl>
    </SegmentedControlWrapper>
  ))
  .add('Visual Testing/RTL', () => (
    <SegmentedControlWrapper>
      <SegmentedControl isRTL={true} value="table-view">
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
        <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
        <IconButton
          icon={percentageIcon}
          value="percent-view"
          aria-label="Percent View"
          disabled={true}
        />
      </SegmentedControl>
    </SegmentedControlWrapper>
  ));
