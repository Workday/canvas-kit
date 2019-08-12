/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../../../utils/storybook';
import {homeIcon, starIcon, rocketIcon, plusIcon} from '@workday/canvas-system-icons-web';
import styled from 'react-emotion';
import {css} from 'emotion';
import {select, number} from '@storybook/addon-knobs';

import {colors, type} from '@workday/canvas-kit-react-core';
import README from '../README.md';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {Header} from '@workday/canvas-kit-react-header';
import {beta_Button as Button, IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {Avatar} from '@workday/canvas-kit-react-avatar';
import SidePanel from '..';

interface SidePanelState {
  open: boolean;
}

const ListItem = styled('li')({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'end',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.soap300,
  },
});
const ListTitle = styled('span')({
  ...type.h4,
  paddingLeft: 24,
});
const UnorderedList = styled('ul')({
  paddingLeft: 0,
});

const listItemOpen = css({
  padding: '15px 24px',
  marginLeft: '-24px',
  marginRight: '-24px',
});

const listItemClosed = css({
  padding: '15px 20px',
  marginLeft: 0,
  marginRight: 0,
  justifyContent: 'center',
});

const AddButton = styled(IconButton)({
  margin: '0 auto',
  display: 'block',
});

// SidePanel Open Direction Knob
const label = 'Open Direction';
const options = {
  left: SidePanel.OpenDirection.Left,
  right: SidePanel.OpenDirection.Right,
};
const defaultValue = SidePanel.OpenDirection.Left;

// SidePanel Breakpoint Knob
const breakpointLabel = 'Breakpoint';
const breakpointDefaultValue = 768;

// SidePanel Open Width Knob
const openWidthLabel = 'Open Width';
const openWidthDefaultValue = 300;

// SidePanel Open Background Color
const openBackgroundColorLabel = 'Open Background Color';
const openBackgroundColorOptions = {
  white: SidePanel.BackgroundColor.White,
  Gray: SidePanel.BackgroundColor.Gray,
  transparent: SidePanel.BackgroundColor.Transparent,
};
const openBackgroundColorDefault = SidePanel.BackgroundColor.Gray;

class SidePanelWrapper extends React.Component<{}, SidePanelState> {
  public state = {
    open: true,
  };

  public render() {
    const {open} = this.state;
    const listItemStyles = open ? listItemOpen : listItemClosed;
    return (
      <SidePanel
        sidePanelBackgroundColor={select(
          openBackgroundColorLabel,
          openBackgroundColorOptions,
          openBackgroundColorDefault
        )}
        openWidth={number(openWidthLabel, openWidthDefaultValue)}
        openDirection={select(label, options, defaultValue)}
        open={open}
        onToggleClick={this.onClick}
        breakpoint={number(breakpointLabel, breakpointDefaultValue)}
        onBreakpointChange={this.handleBreakpoint}
        header={'Side Panel Header'}
      >
        {open ? (
          <Button buttonType={Button.Types.Primary}>Add New</Button>
        ) : (
          <AddButton
            toggled={false}
            buttonSize={ButtonSizes.Small}
            buttonType={IconButton.Types.CircleFilled}
          >
            <SystemIcon icon={plusIcon} />
          </AddButton>
        )}
        {/* TODO replace this with our list component */}
        <UnorderedList>
          <ListItem className={listItemStyles}>
            <span>
              <SystemIcon icon={homeIcon} />
            </span>
            {open && <ListTitle>Home</ListTitle>}
          </ListItem>
          <ListItem className={listItemStyles}>
            <span>
              <SystemIcon icon={starIcon} />
            </span>
            {open && <ListTitle>Favorites</ListTitle>}
          </ListItem>
          <ListItem className={listItemStyles}>
            <span>
              <SystemIcon icon={rocketIcon} />
            </span>
            {open && <ListTitle>Items</ListTitle>}
          </ListItem>
        </UnorderedList>
      </SidePanel>
    );
  }

  private onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  private handleBreakpoint = (open: boolean) => {
    console.warn('handle breakpoint called');
    this.setState({
      open: open,
    });
  };
}

storiesOf('Side Panel', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '67vh', position: 'relative'}}>
        <SidePanel
          sidePanelBackgroundColor={SidePanel.BackgroundColor.Gray}
          onToggleClick={() => console.warn('clicked')}
          header={'Side Panel Header'}
          open={true}
        />
      </div>
    </div>
  ))
  .add('Configurable', () => (
    <div className="story">
      <div style={{height: '67vh', position: 'relative'}}>
        <Header brandUrl="#">
          <Avatar
            onClick={() => {
              alert('clicked avatar');
            }}
          />
          <Button buttonType={Button.Types.Primary}>Sign Up</Button>
        </Header>
        <SidePanelWrapper />
      </div>
    </div>
  ));
