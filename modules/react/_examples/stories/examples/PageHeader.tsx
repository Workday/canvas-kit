import * as React from 'react';
import {createComponent, styled} from '@workday/canvas-kit-react/common';

import {colors, gradients, space} from '@workday/canvas-kit-react/tokens';

import {HStack, HStackProps, StackSpacing} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {justifyIcon, notificationsIcon} from '@workday/canvas-system-icons-web';
import {TypeHeadingLevel} from '@workday/canvas-kit-preview-react/type';

interface HeaderItemProps extends Omit<HStackProps, 'spacing'> {
  spacing?: StackSpacing;
}

export const Basic = () => (
  <PageHeader>
    <PageHeader.Title>Page Header</PageHeader.Title>
    <PageHeader.Item>
      <TertiaryButton aria-label="notifications" icon={notificationsIcon} variant="inverse" />
      <TertiaryButton aria-label="menu" icon={justifyIcon} variant="inverse" />
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
    <TypeHeadingLevel
      as={Element}
      ref={ref}
      size="medium"
      color="inverse"
      padding={`${space.xs} 0`}
      margin={0}
      whiteSpace="nowrap"
      {...props}
    >
      {children}
    </TypeHeadingLevel>
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
