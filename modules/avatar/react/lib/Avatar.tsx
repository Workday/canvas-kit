import * as React from 'react';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import {SystemIconCircle, SystemIconCircleSize} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarTheme {
  Light,
  Dark,
}

export interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An AvatarTheme enum indicating which theme to use for the default state (Light vs. Dark)
   */
  themeColor: AvatarTheme;
  /**
   * An AvatarSize enum or number value indicating the size of the avatar
   */
  size: SystemIconCircleSize | number;
  /**
   * Text describing what the avatar is showing
   */
  altText: string;
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

const Container = styled('button')<Omit<AvatarProps, 'altText'>>(
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
  ({themeColor, size, onClick}) => ({
    background: themeColor === AvatarTheme.Dark ? colors.blueberry400 : colors.soap300,
    height: size,
    width: size,
    cursor: onClick ? 'pointer' : 'default',
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
  static Size = SystemIconCircleSize;

  static defaultProps = {
    themeColor: AvatarTheme.Light,
    size: SystemIconCircleSize.m,
    altText: 'Avatar',
  };

  render() {
    const {buttonRef, themeColor, altText, size, url, onClick, ...elemProps} = this.props;

    const background = themeColor === AvatarTheme.Dark ? colors.blueberry400 : colors.soap300;
    return (
      <Container
        {...elemProps}
        themeColor={themeColor}
        size={size}
        onClick={onClick}
        disabled={onClick ? false : true}
        innerRef={buttonRef}
        aria-label={altText}
      >
        {url ? (
          <img src={url} alt={altText} />
        ) : (
          <SystemIconCircle icon={userIcon} background={background} size={size} />
        )}
      </Container>
    );
  }
}
