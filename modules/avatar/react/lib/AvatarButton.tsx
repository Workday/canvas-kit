import * as React from 'react';
import styled from 'react-emotion';
import isPropValid from '@emotion/is-prop-valid';
import Avatar, {AvatarVariant, AvatarProps} from './Avatar';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import {SystemIconCircleSize} from '@workday/canvas-kit-react-icon';

export interface AvatarButtonProps
  extends AvatarProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An event handler function that gets called when the avatar is clicked
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Ref of button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const Container = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<Pick<AvatarButtonProps, 'variant' | 'size' | 'onClick'>>(
  {
    display: 'flex',
    padding: 0,
    border: 0,
    borderRadius: '100%',
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
