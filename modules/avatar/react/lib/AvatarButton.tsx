import * as React from 'react';
import styled from '@emotion/styled';
import {AvatarVariant, AvatarLocalProps, avatarStyles, AvatarState} from './Avatar';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import {SystemIconCircle, SystemIconCircleSize} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export interface AvatarButtonProps
  extends AvatarLocalProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The function called when the AvatarButton is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const AvatarAsButton = styled('button')<AvatarButtonProps>(
  {...avatarStyles},
  ({size}) => ({
    height: size,
    width: size,
  }),
  ({variant, onClick}) => ({
    cursor: onClick ? 'pointer' : 'default',
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...(variant === AvatarVariant.Dark ? focusRing({separation: 2}) : focusRing()),
      },
    },
    ...hideMouseFocus,
  })
);

export default class AvatarButton extends React.Component<AvatarButtonProps, AvatarState> {
  static Variant = AvatarVariant;
  static Size = SystemIconCircleSize;

  static defaultProps = {
    variant: AvatarVariant.Light,
    size: SystemIconCircleSize.m,
    altText: 'Avatar',
  };

  constructor(props: AvatarButtonProps) {
    super(props);
    this.state = {
      hasImageError: false,
    };
  }

  public setFallbackIcon = () => {
    if (!this.state.hasImageError) {
      this.setState({
        hasImageError: true,
      });
    }
  };

  render() {
    const {
      variant = AvatarVariant.Light,
      altText = 'Avatar',
      size = SystemIconCircleSize.m,
      buttonRef,
      url,
      onClick,
      ...elemProps
    } = this.props;

    const background = variant === AvatarVariant.Dark ? colors.blueberry400 : colors.soap300;

    return (
      <AvatarAsButton
        variant={variant}
        size={size}
        url={url}
        altText={altText}
        onClick={onClick}
        disabled={onClick ? false : true}
        ref={buttonRef}
        aria-label={altText}
        {...elemProps}
      >
        {url && !this.state.hasImageError ? (
          <img src={url} alt={altText} onError={this.setFallbackIcon} />
        ) : (
          <SystemIconCircle icon={userIcon} background={background} size={size} />
        )}
      </AvatarAsButton>
    );
  }
}
