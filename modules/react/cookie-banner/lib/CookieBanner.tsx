/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';
import {colors, commonColors, type, space} from '@workday/canvas-kit-react/tokens';
import {Hyperlink, HyperlinkProps, PrimaryButton} from '@workday/canvas-kit-react/button';

/**
 * ### Deprecated Cookie Banner Props
 *
 * As of Canvas Kit v6, CookieBanner is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export interface DeprecatedCookieBannerProps {
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
  type.levels.subtext.medium,
  {
    backgroundColor: commonColors.background,
    borderTop: `1px solid ${colors.soap400}`,
    display: 'flex',
    padding: space.m,
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
      padding: `${space.s} 0`,
    },
  },
  ({isClosed}: Pick<DeprecatedCookieBannerProps, 'isClosed'>) =>
    isClosed ? {transform: 'translateY(100%)'} : null
);

const BannerItem = styled('div')({
  marginLeft: space.s,
  marginRight: space.s,
  '@media (max-width: 450px)': {
    '&:not(:first-of-type)': {
      marginTop: space.s,
    },
  },
});

const rowStyle = css({
  display: 'flex',
});

const cookieSettingsStyles = css({
  marginRight: space.s,
  border: 0,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  padding: 0,
  height: '0%',
  alignSelf: 'center',
  backgroundColor: 'transparent', // To prevent Safari from rendering grey 'buttonface' as bgcolor
});

interface CookieSettingsProps extends HyperlinkProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CookieSettings = (props: CookieSettingsProps) => {
  return <Hyperlink as="button" css={cookieSettingsStyles} {...props} />;
};

/**
 * ### Deprecated Cookie Banner
 *
 * As of Canvas Kit v6, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export default class DeprecatedCookieBanner extends React.Component<DeprecatedCookieBannerProps> {
  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V7.\n
      For more information, please see the V6 migration guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page
      `
    );
  }

  public static DefaultNotice =
    'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we’ll assume that you are willing to receive cookies.';

  public render(): React.ReactNode {
    const {
      notice = DeprecatedCookieBanner.DefaultNotice,
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
          <PrimaryButton onClick={onAccept} grow={true}>
            Continue
          </PrimaryButton>
        </BannerItem>
      </Banner>
    );
  }
}
