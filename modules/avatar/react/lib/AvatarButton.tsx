import * as React from 'react';
import styled from 'react-emotion';
import isPropValid from '@emotion/is-prop-valid';
import Avatar, {AvatarVariant} from './Avatar';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import {SystemIconCircleSize} from '@workday/canvas-kit-react-icon';

export interface AvatarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An AvatarVariant enum indicating which variant to use for the default state (Light vs. Dark)
   */
  variant: AvatarVariant;
  /**
   * An SystemIconCircleSize enum or number value indicating the size of the avatar
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

const Container = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<Omit<AvatarButtonProps, 'altText'>>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    borderRadius: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  ({variant, size, onClick}) => ({
    background: colors.soap200,
    height: size,
    width: size,
    cursor: onClick ? 'pointer' : 'default',
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...(variant === AvatarVariant.Dark ? focusRing(2, 2) : focusRing(2)),
      },
    },
    ...hideMouseFocus,
  })
);

export default class AvatarButton extends React.Component<AvatarButtonProps> {
  static Variant = AvatarVariant;
  static Size = SystemIconCircleSize;

  static defaultProps = {
    variant: AvatarVariant.Light,
    size: SystemIconCircleSize.m,
    altText: 'Avatar',
  };

  render() {
    const {buttonRef, variant, altText, size, url, onClick, ...elemProps} = this.props;

    return (
      <Container
        variant={variant}
        size={size}
        onClick={onClick}
        disabled={onClick ? false : true}
        innerRef={buttonRef}
        aria-label={altText}
        {...elemProps}
      >
        <Avatar variant={variant} size={size} url={url} aria-label={altText} />
      </Container>
    );
  }
}
