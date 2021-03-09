/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';
import {colors, commonColors, type, spacing} from '@workday/canvas-kit-react/core';
import Button from '@workday/canvas-kit-react/button';

export interface CookieBannerProps {
  /**
   * If true, set the CookieBanner to the closed state.
   * @default false
   */
  isClosed?: boolean;

  /**
   * The function called when cookies are accepted via the CookieBanner. This callback function should set `isClosed` to `true`.
   */
  onAccept: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The function called when the CookieBanner settings button is clicked. The settings button is automatically displayed if this callback function is provided.
   */
  onClickSettings?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The notice text or element of the CookieBanner.
   * @default CookieBanner.DefaultNotice
   */
  notice?: string | React.ReactNode;

  /**
   * The text of the CookieBanner settings button.
   * @default 'Cookie Settings'
   */
  settingsLabel?: string;
}

const Banner = styled('div')(
  type.body2,
  {
    backgroundColor: commonColors.background,
    borderTop: `1px solid ${colors.soap400}`,
    display: 'flex',
    padding: spacing.m,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    transition: 'transform 0.2s ease-out',
    '@media (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      textAlign: 'center',
      padding: `${spacing.s} 0`,
    },
  },
  ({isClosed}: Pick<CookieBannerProps, 'isClosed'>) =>
    isClosed ? {transform: 'translateY(100%)'} : null
);

const BannerItem = styled('div')({
  marginLeft: spacing.s,
  marginRight: spacing.s,
  '@media (max-width: 450px)': {
    '&:not(:first-of-type)': {
      marginTop: spacing.s,
    },
  },
});

const rowStyle = css({
  display: 'flex',
});

const CookieSettings = styled('button')(type.body2, type.link, {
  marginRight: spacing.s,
  border: 0,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  padding: 0,
  height: '0%',
  alignSelf: 'center',
});

export default class CookieBanner extends React.Component<CookieBannerProps> {
  public static DefaultNotice =
    'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we’ll assume that you are willing to receive cookies.';

  public render(): React.ReactNode {
    const {
      notice = CookieBanner.DefaultNotice,
      settingsLabel = 'Cookie Settings',
      isClosed,
      onAccept,
      onClickSettings,
      ...elemProps
    } = this.props;

    return (
      <Banner isClosed={isClosed} {...elemProps}>
        <BannerItem>{notice}</BannerItem>
        <BannerItem css={rowStyle}>
          {onClickSettings && (
            <CookieSettings onClick={onClickSettings}>{settingsLabel}</CookieSettings>
          )}
          <Button onClick={onAccept} variant={Button.Variant.Primary} grow={true}>
            Continue
          </Button>
        </BannerItem>
      </Banner>
    );
  }
}
