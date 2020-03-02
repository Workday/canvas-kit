/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
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
import {IconButtonProps} from '../lib/IconButton';

const iconButtonLayout: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '4px',
  button: {
    margin: '0 12px',
  },
};

const blueBackground: CSSObject = {
  ...iconButtonLayout,
  backgroundColor: '#0875e1',
};

const commonIconButtonProps: Pick<IconButtonProps, 'aria-label' | 'title' | 'icon'> = {
  'aria-label': 'Activity Stream',
  title: 'Activity Stream',
  icon: activityStreamIcon,
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
        {...commonIconButtonProps}
        toggled={this.state.isToggled}
        variant={this.props.variant}
        onClick={this.handleToggle}
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
  .add('Circle', () => (
    <div className="story">
      <h3>Medium Default</h3>
      <IconButton
        {...commonIconButtonProps}
        variant={IconButton.Variant.Circle}
        size={IconButton.Size.Medium}
      />
      <IconButton
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        size={IconButton.Size.Medium}
        disabled={true}
        aria-label="Activity Stream"
      />
      <h3>Small Default</h3>
      <IconButton
        {...commonIconButtonProps}
        variant={IconButton.Variant.Circle}
        size={IconButton.Size.Small}
      />
      <IconButton
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        size={IconButton.Size.Small}
        disabled={true}
        aria-label="Activity Stream"
      />
      <h3>Toggleable Default</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.Circle} />
    </div>
  ))
  .add('Square', () => (
    <div className="story">
      <h3>Medium Square</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.Square}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Medium}
        disabled={true}
        variant={IconButton.Variant.Square}
        aria-label="Activity Stream"
      />
      <h3>Small Square</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Small}
        variant={IconButton.Variant.Square}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Small}
        disabled={true}
        variant={IconButton.Variant.Square}
        aria-label="Activity Stream"
      />
      <h3>Toggleable Square</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.Square} />
    </div>
  ))
  .add('Square Filled', () => (
    <div className="story">
      <h3>Medium Square</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.SquareFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Medium}
        disabled={true}
        variant={IconButton.Variant.SquareFilled}
        aria-label="Activity Stream"
      />
      <h3>Small Square</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Small}
        variant={IconButton.Variant.SquareFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Small}
        disabled={true}
        variant={IconButton.Variant.SquareFilled}
        aria-label="Activity Stream"
      />
      <h3>Toggleable Square</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.SquareFilled} />
    </div>
  ))
  .add('Plain', () => (
    <div className="story">
      <h3>Medium Plain</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.Plain}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.Plain}
        disabled={true}
        aria-label="Activity Stream"
      />
      <h3>Small Plain</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Small}
        variant={IconButton.Variant.Plain}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Small}
        disabled={true}
        variant={IconButton.Variant.Plain}
        aria-label="Activity Stream"
      />
      <h3>Toggleable Plain</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.Plain} />
    </div>
  ))
  .add('Circle Filled', () => (
    <div className="story">
      <h3>Medium Filled</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.CircleFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.CircleFilled}
        disabled={true}
        aria-label="Activity Stream"
      />
      <h3>Small Filled</h3>
      <IconButton
        {...commonIconButtonProps}
        size={IconButton.Size.Small}
        variant={IconButton.Variant.CircleFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        size={IconButton.Size.Small}
        disabled={true}
        variant={IconButton.Variant.CircleFilled}
        aria-label="Activity Stream"
      />
      <h3>Toggleable Filled</h3>
      <ToggleIconButtonWrapper variant={IconButton.Variant.CircleFilled} />
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <IconButton
          {...commonIconButtonProps}
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.Inverse}
        />
        <IconButton
          icon={activityStreamIcon}
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.Inverse}
          disabled={true}
          aria-label="Activity Stream"
        />
      </div>
      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <IconButton
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          variant={IconButton.Variant.Inverse}
          aria-label="Activity Stream"
        />
        <IconButton
          {...commonIconButtonProps}
          size={IconButton.Size.Small}
          disabled={true}
          variant={IconButton.Variant.Inverse}
        />
      </div>
      <h3>Toggleable Inverse</h3>
      <div css={blueBackground}>
        <ToggleIconButtonWrapper variant={IconButton.Variant.Inverse} />
      </div>
    </div>
  ))
  .add('Inverse Filled', () => (
    <div className="story">
      <h3>Medium Inverse Filled</h3>
      <div css={blueBackground}>
        <IconButton
          {...commonIconButtonProps}
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.InverseFilled}
        />
        <IconButton
          icon={activityStreamIcon}
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.InverseFilled}
          disabled={true}
          aria-label="Activity Stream"
        />
      </div>
      <h3>Small Inverse Filled</h3>
      <div css={blueBackground}>
        <IconButton
          {...commonIconButtonProps}
          size={IconButton.Size.Small}
          variant={IconButton.Variant.InverseFilled}
        />
        <IconButton
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          disabled={true}
          variant={IconButton.Variant.InverseFilled}
          aria-label="Activity Stream"
        />
      </div>
      <h3>Toggleable Inverse Filled</h3>
      <div css={blueBackground}>
        <ToggleIconButtonWrapper variant={IconButton.Variant.InverseFilled} />
      </div>
    </div>
  ));

storiesOf('Components|Buttons/Button/React/Icon Button Toggle Group', module)
  .addParameters({component: IconButtonToggleGroup})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>With Three Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton icon={listViewIcon} title="List View" aria-label="List View" />
          <IconButton icon={worksheetsIcon} title="Worksheets" aria-label="Worksheets" />
          <IconButton icon={percentageIcon} disabled={true} aria-label="Percent View" />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
      <h3>With Four Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton
            icon={listViewIcon}
            value="list-view"
            title="List View"
            aria-label="List View"
          />
          <IconButton
            icon={worksheetsIcon}
            value="table-view"
            title="Worksheets"
            aria-label="Worksheets"
          />
          <IconButton
            icon={deviceTabletIcon}
            value="device-view"
            title="Device Tablet"
            aria-label="Device Tablet"
          />
          <IconButton
            icon={percentageIcon}
            value="percent-view"
            disabled={true}
            aria-label="Percent View"
          />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
      <h3>Right To Left With Four Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup isRTL={true} value="table-view">
          <IconButton
            icon={listViewIcon}
            value="list-view"
            title="List View"
            aria-label="List View"
          />
          <IconButton
            icon={worksheetsIcon}
            value="table-view"
            title="Worksheets"
            aria-label="Worksheets"
          />
          <IconButton
            icon={deviceTabletIcon}
            value="device-view"
            title="Device Tablet"
            aria-label="Device Tablet"
          />
          <IconButton
            icon={percentageIcon}
            value="percent-view"
            disabled={true}
            aria-label="percent-view"
          />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
    </div>
  ));
