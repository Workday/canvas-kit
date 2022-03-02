import * as React from 'react';
import {styled, createComponent, dubLogoBlue} from '@workday/canvas-kit-react/common';
import {colors, depth, space, type} from '@workday/canvas-kit-react/tokens';

import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
} from '@workday/canvas-system-icons-web';

import {TertiaryButtonNew, Hyperlink} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {HStack, HStackProps, StackSpacing} from '@workday/canvas-kit-react/layout';
import {SearchForm} from '@workday/canvas-kit-labs-react';

interface HeaderItemProps extends Omit<HStackProps, 'spacing'> {
  spacing?: StackSpacing;
}

export const Basic = () => (
  <GlobalHeader>
    <GlobalHeader.Item>
      <TertiaryButtonNew aria-label="menu" icon={justifyIcon} />
      <Hyperlink>
        <WorkdayLogo dangerouslySetInnerHTML={{__html: dubLogoBlue}} />
      </Hyperlink>
    </GlobalHeader.Item>
    <GlobalHeader.Item margin="auto" width="100%" maxWidth={`calc(${space.xxxl} * 6)`}>
      <SearchForm onSubmit={() => 1} />
    </GlobalHeader.Item>
    <GlobalHeader.Item>
      <TertiaryButtonNew aria-label="messages" icon={assistantIcon} />
      <TertiaryButtonNew aria-label="notifications" icon={notificationsIcon} />
      <TertiaryButtonNew aria-label="inbox" icon={inboxIcon} />
      <Avatar size={Avatar.Size.m} variant={Avatar.Variant.Light} />
    </GlobalHeader.Item>
  </GlobalHeader>
);

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
