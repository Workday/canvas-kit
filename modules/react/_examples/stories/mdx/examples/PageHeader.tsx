import * as React from 'react';
import {createComponent, styled} from '@workday/canvas-kit-react/common';

import {colors, gradients, space} from '@workday/canvas-kit-react/tokens';

import {Flex, FlexProps, SystemPropValues} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {justifyIcon, notificationsIcon} from '@workday/canvas-system-icons-web';
import {Heading} from '@workday/canvas-kit-react/text';

interface HeaderItemProps extends FlexProps {}

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
  Component: ({gap = 'xxs', ...props}: HeaderItemProps, ref, Element) => (
    <Flex gap={gap} ref={ref} as={Element} {...props} />
  ),
});

const PageHeaderTitle = createComponent('h2')({
  displayName: 'PageHeader.Title',
  Component: ({children, ...props}, ref, Element) => (
    <Heading
      as={Element}
      ref={ref}
      size="medium"
      variant="inverse"
      padding={`${space.xs} 0`}
      margin={0}
      whiteSpace="nowrap"
      {...props}
    >
      {children}
    </Heading>
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
