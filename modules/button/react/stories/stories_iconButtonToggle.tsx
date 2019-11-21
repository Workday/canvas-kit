/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {css, jsx, CSSObject} from '@emotion/core';
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
  IconButtonVariant,
} from '../index';

import README from '../README.md';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '4px',
};

// Wrapper to add state mgmt to IconButtons
interface ToggleIconButtonWrapperState {
  isToggled: boolean;
}

interface ToggleIconButtonWrapperProps {
  variant: IconButtonVariant;
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
        variant={this.props.variant}
        onClick={this.handleToggle}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
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

storiesOf('Components|Buttons/Button/React/Icon Button', module)
  .addParameters({component: IconButton})
  .addDecorator(withReadme(README))
  .add('Toggleable', () => (
    <div className="story">
      <h3>Square Icon Buttons</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.Square} />

      <h3>Default Icon Buttons</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.Circle} />

      <h3>Filled Icon Buttons</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.CircleFilled} />

      <h3>Inverse Icon Buttons</h3>
      <div css={css(blueBackground)}>
        <ToggleIconButtonWrapper variant={IconButton.Variant.Inverse} />
      </div>

      <h3>Inverse Filled Icon Buttons</h3>
      <div css={css(blueBackground)}>
        <ToggleIconButtonWrapper variant={IconButton.Variant.InverseFilled} />
      </div>

      <h3>Two buttons Grouped</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton
            icon={listViewIcon}
            aria-label="List View"
            onClick={e => {
              alert("Here's your click event target: " + e.currentTarget);
            }}
          />
          <IconButton aria-label="Worksheets" icon={worksheetsIcon} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>

      <h3>Four buttons Grouped</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
          <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
          <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
          <IconButton icon={percentageIcon} value="percent-view" aria-label="Percent View" />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>

      <h3>RTL - w/ initial selected item & disabled item</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup isRTL={true} value="table-view">
          <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
          <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
          <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
          <IconButton
            icon={percentageIcon}
            value="percent-view"
            aria-label="Percent View"
            disabled={true}
          />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
    </div>
  ));
