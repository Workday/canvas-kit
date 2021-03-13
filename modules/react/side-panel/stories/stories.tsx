/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {homeIcon, starIcon, rocketIcon, plusIcon} from '@workday/canvas-system-icons-web';
import styled from '@emotion/styled';
import {select, number} from '@storybook/addon-knobs';

import {colors, type} from '@workday/canvas-kit-react/core';
import README from '../README.md';
import {SystemIcon} from '../../icon';
import {Header} from '../../../labs-react/header';
import {Button, IconButton} from '../../button';
import {Avatar} from '../../avatar';
import SidePanel from '../index';

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
        backgroundColor={select(
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
          <Button variant={Button.Variant.Primary}>Add New</Button>
        ) : (
          <AddButton
            toggled={false}
            size={IconButton.Size.Small}
            variant={IconButton.Variant.CircleFilled}
            aria-label="Add"
          >
            <SystemIcon icon={plusIcon} />
          </AddButton>
        )}
        {/* TODO replace this with our list component */}
        <UnorderedList>
          <ListItem css={listItemStyles}>
            <span>
              <SystemIcon icon={homeIcon} />
            </span>
            {open && <ListTitle>Home</ListTitle>}
          </ListItem>
          <ListItem css={listItemStyles}>
            <span>
              <SystemIcon icon={starIcon} />
            </span>
            {open && <ListTitle>Favorites</ListTitle>}
          </ListItem>
          <ListItem css={listItemStyles}>
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

  private handleBreakpoint = (aboveBreakpoint: boolean) => {
    console.warn('handle breakpoint called');
    this.setState({
      open: aboveBreakpoint,
    });
  };
}

storiesOf('Components/Containers/Side Panel/React', module)
  .addParameters({component: SidePanel})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '67vh', position: 'relative'}}>
        <SidePanel
          backgroundColor={SidePanel.BackgroundColor.Gray}
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
          <Button variant={Button.Variant.Primary}>Sign Up</Button>
        </Header>
        <SidePanelWrapper />
      </div>
    </div>
  ));
