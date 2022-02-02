import * as React from 'react';
import {createComponent, styled} from '@workday/canvas-kit-react/common';

import {colors, gradients, space, type} from '@workday/canvas-kit-react/tokens';

import {HStack, HStackProps, StackSpacing} from '@workday/canvas-kit-labs-react';
import {IconButton} from '@workday/canvas-kit-react/button';
import {justifyIcon, notificationsIcon} from '@workday/canvas-system-icons-web';

interface HeaderItemProps extends Omit<HStackProps, 'spacing'> {
  spacing?: StackSpacing;
}

export const Basic = () => (
  <PageHeader>
    <PageHeader.Title>Page Header</PageHeader.Title>
    <PageHeader.Item>
      <IconButton aria-label="notifications" icon={notificationsIcon} variant="inverse" />
      <IconButton aria-label="menu" icon={justifyIcon} variant="inverse" />
    </PageHeader.Item>
  </PageHeader>
);

const PageHeaderItem = createComponent('div')({
  displayName: 'PageHeader.Item',
  Component: ({spacing = 'xxs', ...props}: HeaderItemProps, ref, Element) => (
    <HStack spacing={spacing} ref={ref} as={Element} {...props} />
  ),
});

const PageHeaderTitle = createComponent('h2')({
  displayName: 'PageHeader.Title',
  Component: ({children, ...props}, ref, Element) => (
    <Title ref={ref} as={Element} {...props}>
      {children}
    </Title>
  ),
});

const PageHeader = createComponent('header')({
  displayName: 'PageHeader',
  Component: (props, ref, Element) => <Header ref={ref} as={Element} {...props} />,
  subComponents: {Item: PageHeaderItem, Title: PageHeaderTitle},
});

const Header = styled('header')({
  padding: `${space.xs} ${space.xl}`,
  backgroundImage: gradients.blueberry,
  color: colors.frenchVanilla100,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Title = styled('h2')({
  ...type.levels.heading.medium,
  color: colors.frenchVanilla100,
  padding: `${space.xs} 0`,
  margin: 0,
  whiteSpace: 'nowrap',
});
