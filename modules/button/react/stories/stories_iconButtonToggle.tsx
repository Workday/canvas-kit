/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {
  activityStreamIcon,
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

import {
  IconButton,
  IconButtonToggleGroup,
  IconButtonToggleGroupProps,
  IconButtonTypes,
} from '../index';

import README from '../README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
};

// Wrapper to add state mgmt to IconButtons
interface ToggleIconButtonWrapperState {
  isToggled: boolean;
}

interface ToggleIconButtonWrapperProps {
  buttonType: IconButtonTypes;
}

export class ToggleIconButtonWrapper extends React.Component<
  ToggleIconButtonWrapperProps,
  ToggleIconButtonWrapperState
> {
  state = {
    isToggled: false,
  };

  public render() {
    return (
      <IconButton
        toggled={this.state.isToggled}
        buttonType={this.props.buttonType}
        onClick={this.handleToggle}
        icon={activityStreamIcon}
      />
    );
  }

  public handleToggle = () => {
    this.setState({isToggled: !this.state.isToggled});
  };
}

// Wrapper to add state mgmt to IconButtonToggleGroups
interface IconButtonToggleGroupWrapperState {
  selectedValue: string | number;
}

export class IconButtonToggleGroupWrapper extends React.Component<
  {},
  IconButtonToggleGroupWrapperState
> {
  state = {
    selectedValue: '',
  };

  public render() {
    const child = this.props.children as React.ReactElement<IconButtonToggleGroupProps>;
    return React.cloneElement(child, {
      value: this.state.selectedValue === '' ? child.props.value : this.state.selectedValue,
      onChange: this.handleToggle,
    });
  }

  public handleToggle = (selectedValue: string | number) => {
    this.setState({selectedValue});
  };
}

storiesOf('Button/Icon Button', module)
  .addDecorator(withReadme(README))
  .add('Toggleable', () => (
    <div className="story">
      <h3>Square Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Square} />

      <h3>Default Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Circle} />

      <h3>Filled Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.CircleFilled} />

      <h3>Inverse Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.Inverse} />
      </div>

      <h3>Inverse Filled Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.InverseFilled} />
      </div>

      <h3>Two buttons Grouped</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton
            icon={listViewIcon}
            onClick={e => {
              alert("Here's your click event target: " + e.currentTarget);
            }}
          />
          <IconButton icon={worksheetsIcon} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>

      <h3>Four buttons Grouped</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton icon={listViewIcon} value="list-view" />
          <IconButton icon={worksheetsIcon} value="table-view" />
          <IconButton icon={deviceTabletIcon} value="device-view" />
          <IconButton icon={percentageIcon} value="percent-view" />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>

      <h3>RTL - w/ initial selected item & disabled item</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup isRTL={true} value="table-view">
          <IconButton icon={listViewIcon} value="list-view" />
          <IconButton icon={worksheetsIcon} value="table-view" />
          <IconButton icon={deviceTabletIcon} value="device-view" />
          <IconButton icon={percentageIcon} value="percent-view" disabled={true} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
    </div>
  ));
