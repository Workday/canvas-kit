import * as React from 'react';
import {
  homeIcon,
  starIcon,
  rocketIcon,
  plusIcon,
  justifyIcon,
  assistantIcon,
  notificationsIcon,
  inboxIcon,
} from '@workday/canvas-system-icons-web';
import styled from '@emotion/styled';

import {colors, type, space, depth} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {IconButton, PrimaryButton, Hyperlink} from '@workday/canvas-kit-react/button';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {SidePanelProps} from '../lib/SidePanel';

import {
  defaultCanvasTheme,
  StyledType,
  createComponent,
  dubLogoBlue,
} from '@workday/canvas-kit-react/common';
import {Flex, StackSpacing, HStackProps, HStack} from '@workday/canvas-kit-labs-react/layout';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Avatar} from '@workday/canvas-kit-react/avatar';

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

interface HeaderItemProps extends Omit<HStackProps, 'spacing'> {
  spacing?: StackSpacing;
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

const GlobalHeaderItem = createComponent('div')({
  displayName: 'GlobalHeader.Item',
  Component: ({spacing = 's', ...props}: HeaderItemProps, ref) => (
    <HStack spacing={spacing} alignItems="center" marginX={space.xs} ref={ref} {...props} />
  ),
});

const GlobalHeader = createComponent('header')({
  displayName: 'GlobalHeader',
  Component: (props, ref, Element) => <HeaderWrapper ref={ref} as={Element} {...props} />,
  subComponents: {Item: GlobalHeaderItem},
});

const HeaderWrapper = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  ...type.levels.subtext.large,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  backgroundColor: colors.frenchVanilla100,
  ...depth[1],
  padding: space.xxs,
});

const WorkdayLogo = styled('span')({lineHeight: 0});

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
    <GlobalHeader>
      <GlobalHeader.Item>
        <IconButton aria-label="menu" icon={justifyIcon} />
        <Hyperlink>
          <WorkdayLogo dangerouslySetInnerHTML={{__html: dubLogoBlue}} />
        </Hyperlink>
      </GlobalHeader.Item>
      <GlobalHeader.Item margin="auto" width="100%" maxWidth={`calc(${space.xxxl} * 6)`}>
        <SearchForm onSubmit={() => 1} />
      </GlobalHeader.Item>
      <GlobalHeader.Item>
        <IconButton aria-label="messages" icon={assistantIcon} />
        <IconButton aria-label="notifications" icon={notificationsIcon} />
        <IconButton aria-label="inbox" icon={inboxIcon} />
        <Avatar size={Avatar.Size.m} variant={Avatar.Variant.Light} />
      </GlobalHeader.Item>
    </GlobalHeader>
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
