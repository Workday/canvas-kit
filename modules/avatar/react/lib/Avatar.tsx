import * as React from 'react';
import styled, {CSSObject} from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {borderRadius, colors} from '@workday/canvas-kit-react-core';
import {SystemIconCircle, SystemIconCircleSize} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarVariant {
  Light,
  Dark,
}

export interface AvatarLocalProps {
  /**
   * The variant of the Avatar default state. Accepts `Light` or `Dark`.
   * @default AvatarVariant.Light
   */
  variant: AvatarVariant;
  /**
   * The size of the Avatar.
   * @default SystemIconCircleSize.m
   */
  size: SystemIconCircleSize | number;
  /**
   * The alt text of the Avatar image.
   * @default Avatar
   */
  altText: string;
  /**
   * The url of the Avatar image.
   */
  url?: string;
}

export interface AvatarProps extends AvatarLocalProps, React.HTMLAttributes<HTMLDivElement> {}

export const avatarStyles: CSSObject = {
  background: colors.soap200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 0,
  borderRadius: borderRadius.circle,
  boxSizing: 'border-box',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
  },
};

const StyledContainer = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<Pick<AvatarProps, 'variant' | 'size'>>(
  {
    ...avatarStyles,
  },
  ({size}) => ({
    height: size,
    width: size,
  })
);

export default class Avatar extends React.Component<AvatarProps> {
  static Variant = AvatarVariant;
  static Size = SystemIconCircleSize;

  static defaultProps = {
    variant: AvatarVariant.Light,
    size: SystemIconCircleSize.m,
    altText: 'Avatar',
  };

  render() {
    const {variant, altText, size, url, ...elemProps} = this.props;

    const background = variant === AvatarVariant.Dark ? colors.blueberry400 : colors.soap300;
    return (
      <StyledContainer variant={variant} size={size} aria-label={altText} {...elemProps}>
        {url ? (
          <img src={url} alt={altText} />
        ) : (
          <SystemIconCircle icon={userIcon} background={background} size={size} />
        )}
      </StyledContainer>
    );
  }
}
