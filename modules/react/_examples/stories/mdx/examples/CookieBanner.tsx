import {createComponent} from '@workday/canvas-kit-react/common';
import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Box} from '@workday/canvas-kit-react/layout';

const styles = {
  container: createStyles({
    minHeight: px2rem(84),
    margin: system.space.x3,
    position: 'relative',
  }),
};

const bannerStencil = createStencil({
  base: {
    ...system.type.subtext.medium,
    backgroundColor: system.color.bg.default,
    borderTop: `1px solid ${system.color.border.divider}`,
    display: 'flex',
    boxShadow: system.depth[1],
    padding: system.space.x6,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    transition: 'transform 0.2s ease-out',
    '@media (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      textAlign: 'center',
      padding: `${system.space.x4} 0`,
    },
  },
  modifiers: {
    isClosed: {
      true: {
        transform: 'translateY(100%)',
      },
    },
  },
});

const bannerItemStencil = createStencil({
  base: {
    marginLeft: system.space.x4,
    marginRight: system.space.x4,
    '@media (max-width: 450px)': {
      '&:not(:first-of-type)': {
        marginTop: system.space.x4,
        '> *': {
          flex: 1,
        },
      },
    },
  },
  modifiers: {
    isRow: {
      true: {
        display: 'flex',
        '> *': {
          marginLeft: system.space.x4,
        },
      },
    },
  },
});

const CookieBannerItem = createComponent('div')({
  displayName: 'CookieBanner.Item',
  Component: ({isRow, ...elProps}: ItemProps, ref) => (
    <Box cs={bannerItemStencil({isRow})} ref={ref} {...elProps} />
  ),
});

const CookieBanner = createComponent('div')({
  displayName: 'CookieBanner',
  Component: (props: BannerProps, ref, Element) => (
    <Box cs={bannerStencil({isClosed: props.isClosed})} ref={ref} as={Element} {...props} />
  ),
  subComponents: {Item: CookieBannerItem},
});

export const BasicExample = () => {
  const DefaultNotice = `We use cookies to ensure that we give you the best experience on our website. 
    If you continue without changing your settings, we'll assume that you are willing to receive cookies.`;

  return (
    <Box cs={styles.container}>
      <CookieBanner isClosed={false}>
        <CookieBanner.Item>{DefaultNotice}</CookieBanner.Item>
        <CookieBanner.Item isRow>
          <TertiaryButton>Settings</TertiaryButton>
          <PrimaryButton>Continue</PrimaryButton>
        </CookieBanner.Item>
      </CookieBanner>
    </Box>
  );
};

interface BannerProps {
  isClosed?: boolean;
}

interface ItemProps {
  isRow?: boolean;
}
