import * as React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, commonColors, depth, type, space} from '@workday/canvas-kit-react/tokens';
import {Hyperlink, HyperlinkProps, PrimaryButton} from '@workday/canvas-kit-react/button';

const CookieBannerItem = createComponent('div')({
  displayName: 'CookieBanner.Item',
  Component: ({isRow, ...elProps}: ItemProps, ref) => (
    <BannerItem ref={ref} isRow={isRow} {...elProps} />
  ),
});

const CookieBannerSettings = createComponent('a')({
  displayName: 'CookieBanner.Settings',
  Component: (props: CookieSettingsProps, ref, Element) => (
    <CookieSettings ref={ref} as={Element} {...props} />
  ),
});

const CookieBanner = createComponent('div')({
  displayName: 'CookieBanner',
  Component: (props: CookieBannerProps, ref, Element) => (
    <Banner ref={ref} as={Element} {...props} />
  ),
  subComponents: {Item: CookieBannerItem, Settings: CookieBannerSettings},
});

export const Basic = () => {
  const DefaultNotice = `We use cookies to ensure that we give you the best experience on our website. 
    If you continue without changing your settings, we'll assume that you are willing to receive cookies.`;
  const onClickSettings = e => e.preventDefault();

  return (
    <ExampleContainer>
      <CookieBanner isClosed={false}>
        <CookieBanner.Item>{DefaultNotice}</CookieBanner.Item>
        <CookieBanner.Item isRow>
          <CookieBanner.Settings onClick={onClickSettings}>Settings</CookieBanner.Settings>
          <PrimaryButton>Continue</PrimaryButton>
        </CookieBanner.Item>
      </CookieBanner>
    </ExampleContainer>
  );
};

interface CookieBannerProps extends StyledType {
  isClosed?: boolean;
}

interface ItemProps extends StyledType {
  isRow?: boolean;
}

interface CookieSettingsProps extends HyperlinkProps, StyledType {}

const ExampleContainer = styled('div')({
  minHeight: 84,
  margin: space.xs,
  position: 'relative',
});

const Banner = styled('div')(
  type.levels.subtext.medium,
  {
    backgroundColor: commonColors.background,
    borderTop: `1px solid ${colors.soap400}`,
    display: 'flex',
    ...depth[1],
    padding: space.m,
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
      padding: `${space.s} 0`,
    },
  },
  ({isClosed}: Pick<CookieBannerProps, 'isClosed'>) =>
    isClosed ? {transform: 'translateY(100%)'} : null
);

const BannerItem = styled('div')(
  {
    marginLeft: space.s,
    marginRight: space.s,
    '@media (max-width: 450px)': {
      '&:not(:first-of-type)': {
        marginTop: space.s,
      },
    },
  },
  ({isRow}: Pick<ItemProps, 'isRow'>) => (isRow ? {display: 'flex'} : null)
);

const CookieSettings = styled(Hyperlink)({
  marginRight: space.s,
  border: 0,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  padding: 0,
  height: '0%',
  alignSelf: 'center',
  backgroundColor: 'transparent',
});
