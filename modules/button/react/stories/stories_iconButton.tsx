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
import {IconButtonProps} from '../lib/IconButton';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '0 12px',
  },
};

const commonIconButtonProps: Partial<IconButtonProps> = {
  'aria-label': 'Activity Stream',
  title: 'Activity Stream',
  icon: activityStreamIcon,
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
        {...commonIconButtonProps}
        toggled={this.state.isToggled}
        buttonType={this.props.buttonType}
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

storiesOf('Button/Icon Button', module)
  .addDecorator(withReadme(README))
  .add('Circle', () => (
    <div className="story">
      <h3>Medium Default</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonType={IconButton.Types.Circle}
        buttonSize={IconButton.Sizes.Medium}
      />
      <IconButton
        buttonType={IconButton.Types.Circle}
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        disabled={true}
      />
      <h3>Small Default</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonType={IconButton.Types.Circle}
        buttonSize={IconButton.Sizes.Small}
      />
      <IconButton
        buttonType={IconButton.Types.Circle}
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
      />
      <h3>Toggleable Default</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Circle} />
    </div>
  ))
  .add('Square', () => (
    <div className="story">
      <h3>Medium Square</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Square}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        disabled={true}
        buttonType={IconButton.Types.Square}
      />
      <h3>Small Square</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.Square}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
        buttonType={IconButton.Types.Square}
      />
      <h3>Toggleable Square</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Square} />
    </div>
  ))
  .add('Square Filled', () => (
    <div className="story">
      <h3>Medium Square</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.SquareFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        disabled={true}
        buttonType={IconButton.Types.SquareFilled}
      />
      <h3>Small Square</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.SquareFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
        buttonType={IconButton.Types.SquareFilled}
      />
      <h3>Toggleable Square</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.SquareFilled} />
    </div>
  ))
  .add('Plain', () => (
    <div className="story">
      <h3>Medium Plain</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Plain}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Plain}
        disabled={true}
      />
      <h3>Small Plain</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.Plain}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
        buttonType={IconButton.Types.Plain}
      />
      <h3>Toggleable Plain</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Plain} />
    </div>
  ))
  .add('Circle Filled', () => (
    <div className="story">
      <h3>Medium Filled</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.CircleFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.CircleFilled}
        disabled={true}
      />
      <h3>Small Filled</h3>
      <IconButton
        {...commonIconButtonProps}
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.CircleFilled}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
        buttonType={IconButton.Types.CircleFilled}
      />
      <h3>Toggleable Filled</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.CircleFilled} />
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div className={css(blueBackground)}>
        <IconButton
          {...commonIconButtonProps}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.Inverse}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.Inverse}
          disabled={true}
        />
      </div>
      <h3>Small Inverse</h3>
      <div className={css(blueBackground)}>
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Small}
          buttonType={IconButton.Types.Inverse}
        />
        <IconButton
          {...commonIconButtonProps}
          buttonSize={IconButton.Sizes.Small}
          disabled={true}
          buttonType={IconButton.Types.Inverse}
        />
      </div>
      <h3>Toggleable Inverse</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.Inverse} />
      </div>
    </div>
  ))
  .add('Inverse Filled', () => (
    <div className="story">
      <h3>Medium Inverse Filled</h3>
      <div className={css(blueBackground)}>
        <IconButton
          {...commonIconButtonProps}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.InverseFilled}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.InverseFilled}
          disabled={true}
        />
      </div>
      <h3>Small Inverse Filled</h3>
      <div className={css(blueBackground)}>
        <IconButton
          {...commonIconButtonProps}
          buttonSize={IconButton.Sizes.Small}
          buttonType={IconButton.Types.InverseFilled}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Small}
          disabled={true}
          buttonType={IconButton.Types.InverseFilled}
        />
      </div>
      <h3>Toggleable Inverse Filled</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.InverseFilled} />
      </div>
    </div>
  ));

storiesOf('Button/Icon Button Toggle Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>With Three Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton icon={listViewIcon} title="List View" aria-label="List View" />
          <IconButton icon={worksheetsIcon} title="Worksheets" aria-label="Worksheets" />
          <IconButton icon={percentageIcon} disabled={true} />
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
          <IconButton icon={percentageIcon} value="percent-view" disabled={true} />
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
          <IconButton icon={percentageIcon} value="percent-view" disabled={true} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
    </div>
  ));
