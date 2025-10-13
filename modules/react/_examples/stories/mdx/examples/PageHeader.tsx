import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {justifyIcon, notificationsIcon} from '@workday/canvas-system-icons-web';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

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

const styles = {
  headerItem: createStencil({
    vars: {
      gap: '',
    },
    base: ({gap}) => ({
      gap: gap,
    }),
  }),
  headerTitle: createStyles({
    padding: `${system.space.x3} 0`,
    margin: 0,
    whiteSpace: 'nowrap',
  }),
};

const PageHeaderItem = createComponent('div')({
  displayName: 'PageHeader.Item',
  Component: ({gap = system.space.x2, ...props}: HeaderItemProps, ref, Element) => (
    <Flex ref={ref} as={Element} cs={styles.headerItem({gap: gap as string})} {...props} />
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
      cs={styles.headerTitle}
      {...props}
    >
      {children}
    </Heading>
  ),
});

const PageHeader = createComponent('header')({
  displayName: 'PageHeader',
  Component: (props, ref, Element) => <Box ref={ref} as={Element} cs={headerStyles} {...props} />,
  subComponents: {Item: PageHeaderItem, Title: PageHeaderTitle},
});

const headerStyles = createStyles({
  padding: `${system.space.x3} ${system.space.x8}`,
  backgroundImage: brand.gradient.primary,
  color: system.color.fg.inverse,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
