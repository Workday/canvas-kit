import * as React from 'react';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarTheme {
  Light,
  Dark,
}

export enum AvatarSize {
  xs = 16,
  s = 24,
  m = 32,
  l = 40,
  xl = 64,
  xxl = 120,
}

export interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An AvatarTheme enum indicating which theme to use for the default state (Light vs. Dark)
   */
  themeColor: AvatarTheme;
  /**
   * An AvatarSize enum or number value indicating the size of the avatar
   */
  size: AvatarSize | number;
  /**
   * The url of the users avatar photo
   */
  url?: string;
  /**
   * An event handler function that gets called when the avatar is clicked
   */
  onClick?: (e: React.SyntheticEvent) => void;
  /**
   * Ref of button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const Container = styled('button')<AvatarProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    borderRadius: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  ({themeColor, size, url, onClick}) => ({
    height: size,
    width: size,
    cursor: onClick ? 'pointer' : 'default',
    backgroundColor: url
      ? undefined
      : themeColor === AvatarTheme.Dark
        ? colors.blueberry400
        : colors.soap300,
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...(themeColor === AvatarTheme.Dark ? focusRing(2, 2) : focusRing(2)),
      },
    },
    ...hideMouseFocus,
  })
);

export default class Avatar extends React.Component<AvatarProps> {
  static ThemeColor = AvatarTheme;
  static Size = AvatarSize;
  static defaultProps = {
    themeColor: AvatarTheme.Light,
    size: AvatarSize.m,
  };

  render() {
    const {buttonRef, themeColor, size, url, onClick} = this.props;

    const iconColor =
      themeColor === AvatarTheme.Dark ? colors.frenchVanilla100 : colors.licorice400;
    const iconColorHover =
      themeColor === AvatarTheme.Dark ? colors.blueberry100 : colors.licorice500;
    const iconSize = size * 0.625;

    return (
      <Container {...this.props} disabled={onClick ? false : true} innerRef={buttonRef}>
        {url ? (
          <img src={url} />
        ) : (
          <SystemIcon
            icon={userIcon}
            color={iconColor}
            colorHover={onClick ? iconColorHover : iconColor}
            size={iconSize}
          />
        )}
      </Container>
    );
  }
}
