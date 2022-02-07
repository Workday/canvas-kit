import * as React from 'react';
import {homeIcon, starIcon, rocketIcon, plusIcon} from '@workday/canvas-system-icons-web';
import styled from '@emotion/styled';

import {colors, type} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {DeprecatedHeader} from '@workday/canvas-kit-labs-react/header';
import {IconButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {SidePanelProps} from '../lib/SidePanel';

import {defaultCanvasTheme, StyledType} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Components/Containers/Side Panel/React',
  component: SidePanel,
  parameters: {ReadmePath: 'react/side-panel'},
  argTypes: {
    backgroundColor: {
      options: {
        white: SidePanel.BackgroundColor.White,
        gray: SidePanel.BackgroundColor.Gray,
        transparent: SidePanel.BackgroundColor.Transparent,
      },
      control: 'radio',
    },
    openWidth: {
      control: 'number',
    },
    openDirection: {
      options: {
        left: SidePanel.OpenDirection.Left,
        right: SidePanel.OpenDirection.Right,
      },
      control: 'radio',
    },
    breakpoint: {
      control: 'number',
    },
    theme: {
      control: 'object',
      defaultValue: defaultCanvasTheme,
    },
  },
};

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
  ...type.levels.body.small,
  paddingLeft: 24,
  fontWeight: type.properties.fontWeights.bold,
});
const UnorderedList = styled('ul')({
  paddingLeft: 0,
});

const AddButton = styled(IconButton)({
  margin: '0 auto',
  display: 'block',
});

const StyledListItem = styled(Flex)<StyledType>({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'end',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.soap300,
  },
});

class SidePanelWrapper extends React.Component<SidePanelProps, SidePanelState> {
  public state = {
    open: true,
  };

  public render() {
    const {open} = this.state;

    return (
      <SidePanel
        {...this.props}
        open={open}
        onToggleClick={this.onClick}
        onBreakpointChange={this.handleBreakpoint}
        header={'Side Panel Header'}
      >
        {open ? (
          <PrimaryButton>Add New</PrimaryButton>
        ) : (
          <AddButton toggled={false} size="small" variant="circleFilled" aria-label="Add">
            <SystemIcon icon={plusIcon} />
          </AddButton>
        )}
        {/* TODO replace this with our list component */}
        <UnorderedList>
          <StyledListItem
            padding={open ? '15px 24px' : '15px 20px'}
            marginLeft={open ? '-24px' : 0}
            marginRight={open ? '-24px' : 0}
            justifyContent={open ? undefined : 'center'}
          >
            <span>
              <SystemIcon icon={homeIcon} />
            </span>
            {open && <ListTitle>Home</ListTitle>}
          </StyledListItem>
          <StyledListItem
            padding={open ? '15px 24px' : '15px 20px'}
            marginLeft={open ? '-24px' : 0}
            marginRight={open ? '-24px' : 0}
            justifyContent={open ? undefined : 'center'}
          >
            >
            <span>
              <SystemIcon icon={starIcon} />
            </span>
            {open && <ListTitle>Favorites</ListTitle>}
          </StyledListItem>
          <StyledListItem
            padding={open ? '15px 24px' : '15px 20px'}
            marginLeft={open ? '-24px' : 0}
            marginRight={open ? '-24px' : 0}
            justifyContent={open ? undefined : 'center'}
          >
            <span>
              <SystemIcon icon={rocketIcon} />
            </span>
            {open && <ListTitle>Items</ListTitle>}
          </StyledListItem>
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

export const Default = () => (
  <div style={{height: '67vh', position: 'relative'}}>
    <SidePanel
      backgroundColor={SidePanel.BackgroundColor.Gray}
      onToggleClick={() => console.warn('clicked')}
      header={'Side Panel Header'}
      open={true}
    />
  </div>
);

const Template = props => (
  <div style={{height: '67vh', position: 'relative'}}>
    <DeprecatedHeader brandUrl="#">
      <Avatar
        onClick={() => {
          alert('clicked avatar');
        }}
      />
      <PrimaryButton>Sign Up</PrimaryButton>
    </DeprecatedHeader>
    <SidePanelWrapper {...props} />
  </div>
);

export const Configurable = Template.bind({});
(Configurable as any).args = {
  backgroundColor: SidePanel.BackgroundColor.Gray,
  openWidth: 300,
  breakpoint: 768,
  openDirection: SidePanel.OpenDirection.Left,
};
