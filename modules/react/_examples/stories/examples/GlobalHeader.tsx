import * as React from 'react';
import {styled, createComponent} from '@workday/canvas-kit-react/common';
import {colors, depth, space, type} from '@workday/canvas-kit-react/tokens';

import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
} from '@workday/canvas-system-icons-web';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

interface HeaderItemProps extends FlexProps {}

export const Basic = () => (
  <GlobalHeader>
    <GlobalHeader.Item>
      <Tooltip title="Global Navigation" type="describe">
        <TertiaryButton aria-label="menu" icon={justifyIcon}>
          MENU
        </TertiaryButton>
      </Tooltip>
      <Tooltip title="Workday Home">
        <TertiaryButton>
          <img src="https://design.workday.com/images/ck-dub-logo-blue.svg" alt="" />
        </TertiaryButton>
      </Tooltip>
    </GlobalHeader.Item>
    <GlobalHeader.Item margin="auto" width="100%" maxWidth={`calc(${space.xxxl} * 6)`}>
      <SearchForm onSubmit={() => 1} />
    </GlobalHeader.Item>
    <GlobalHeader.Item>
      <TertiaryButton aria-label="messages" icon={assistantIcon} />
      <TertiaryButton aria-label="notifications" icon={notificationsIcon} />
      <TertiaryButton aria-label="inbox" icon={inboxIcon} />
      <Avatar />
    </GlobalHeader.Item>
  </GlobalHeader>
);

const GlobalHeaderItem = createComponent('div')({
  displayName: 'GlobalHeader.Item',
  Component: ({gap = 's', ...props}: HeaderItemProps, ref) => (
    <Flex gap={gap} alignItems="center" marginX={space.xs} ref={ref} {...props} />
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
