import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, handleCsProp} from '@workday/canvas-kit-styling';
import {hamburgerIcon, notificationsIcon} from '@workday/canvas-system-icons-web';
import {brand, system} from '@workday/canvas-tokens-web';

interface HeaderItemProps extends FlexProps {}

export const Basic = () => (
  <PageHeader>
    <PageHeader.Title>Page Header</PageHeader.Title>
    <PageHeader.Item>
      <TertiaryButton aria-label="notifications" icon={notificationsIcon} variant="inverse" />
      <TertiaryButton aria-label="menu" icon={hamburgerIcon} variant="inverse" />
    </PageHeader.Item>
  </PageHeader>
);

const PageHeaderItem = createComponent('div')({
  displayName: 'PageHeader.Item',
  Component: (props: HeaderItemProps, ref, Element) => (
    <Flex ref={ref} as={Element} {...handleCsProp(props, [{gap: system.gap.xs}])} />
  ),
});

const pageHeaderTitleStyles = createStyles({
  padding: `${system.padding.xs} 0`,
  margin: 0,
  whiteSpace: 'nowrap',
});

const PageHeaderTitle = createComponent('h2')({
  displayName: 'PageHeader.Title',
  Component: ({children, ...props}, ref, Element) => (
    <Heading
      as={Element}
      ref={ref}
      size="medium"
      variant="inverse"
      {...handleCsProp(props, pageHeaderTitleStyles)}
    >
      {children}
    </Heading>
  ),
});

const PageHeader = createComponent('header')({
  displayName: 'PageHeader',
  Component: (props: any, ref, Element) => (
    <Element ref={ref} {...handleCsProp(props, pageHeaderStyles)} />
  ),
  subComponents: {Item: PageHeaderItem, Title: PageHeaderTitle},
});

const pageHeaderStyles = createStyles({
  padding: `${system.padding.xs} ${system.padding.xl}`,
  backgroundImage: brand.gradient.primary,
  color: system.color.fg.inverse,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
