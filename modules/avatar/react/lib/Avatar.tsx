import React, {useState} from 'react';
import styled from '@emotion/styled';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import isPropValid from '@emotion/is-prop-valid';
import {borderRadius, colors} from '@workday/canvas-kit-react-core';
import {SystemIconCircle, SystemIconCircleSize} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarVariant {
  Light,
  Dark,
}

export interface AvatarProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the Avatar default state. Accepts `Light` or `Dark`.
   * @default AvatarVariant.Light
   */
  variant?: AvatarVariant;
  /**
   * The size of the Avatar.
   * @default SystemIconCircleSize.m
   */
  size?: SystemIconCircleSize | number;
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label
   * @default Avatar
   */
  altText?: string;
  /**
   * The url of the Avatar image.
   */
  url?: string;
  /**
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `button` tag instead of a `div` when defined.
   */
  as?: 'div';
  /**
   * The function called when the AvatarButton is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const StyledContainer = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<Pick<AvatarProps, 'variant' | 'size' | 'onClick'>>(
  {
    background: colors.soap200,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
    borderRadius: borderRadius.circle,
  },
  ({size}) => ({
    height: size,
    width: size,
  }),
  ({variant, onClick}) => ({
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

const StyledStack = styled('span')<Pick<AvatarProps, 'size'>>(
  {
    position: 'absolute',
  },
  ({size}) => ({
    height: size,
    width: size,
  })
);

const StyledImage = styled('img')<{isLoaded: boolean}>(
  {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.circle,
    transition: 'opacity 200ms linear',
  },
  ({isLoaded}) => ({
    opacity: isLoaded ? 1 : 0,
  })
);

const Avatar = ({
  variant = AvatarVariant.Light,
  size = SystemIconCircleSize.m,
  altText = 'Avatar',
  url,
  onClick,
  buttonRef,
  ...elemProps
}: AvatarProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadImage = () => {
    if (!imageLoaded) {
      setImageLoaded(true);
    }
  };

  const background = variant === AvatarVariant.Dark ? colors.blueberry400 : colors.soap300;

  return (
    <StyledContainer
      variant={variant}
      size={size}
      aria-label={altText}
      onClick={onClick}
      disabled={onClick ? false : true}
      ref={buttonRef}
      {...elemProps}
    >
      <StyledStack size={size}>
        <SystemIconCircle icon={userIcon} background={background} size={size} />
      </StyledStack>
      {url && (
        <StyledStack size={size}>
          <StyledImage src={url} alt={altText} onLoad={loadImage} isLoaded={imageLoaded} />
        </StyledStack>
      )}
    </StyledContainer>
  );
};

Avatar.Variant = AvatarVariant;
Avatar.Size = SystemIconCircleSize;

export default Avatar;
