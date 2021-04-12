import React, {useState} from 'react';
import {styled, focusRing, hideMouseFocus} from '@workday/canvas-kit-react/common';
import isPropValid from '@emotion/is-prop-valid';
import {borderRadius, colors} from '@workday/canvas-kit-react/tokens';
import {SystemIconCircle, SystemIconCircleSize} from '@workday/canvas-kit-react/icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarVariant {
  Light,
  Dark,
}

export interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
   * Will render an `div` tag instead of a `button` when defined.
   */
  as?: 'div';
}

/**
 * Used to get the props of the div version of an avatar
 */
type AvatarDivProps = Omit<AvatarProps, keyof React.ButtonHTMLAttributes<HTMLButtonElement>> &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * Returns an overloaded functional component that uses button props by default.
 */
type AvatarOverload = {
  (props: {as: 'div'} & AvatarDivProps & {ref?: React.Ref<HTMLElement>}): React.ReactElement;
  (props: Omit<AvatarProps, 'as'> & {ref?: React.Ref<HTMLButtonElement>}): React.ReactElement;
  Variant: typeof AvatarVariant;
  Size: typeof SystemIconCircleSize;
};

const fadeTransition = 'opacity 150ms linear';

const StyledContainer = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<Pick<AvatarProps, 'size' | 'onClick'>>(
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
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...focusRing({separation: 2}),
      },
    },
    ...hideMouseFocus,
  },
  ({size}) => ({
    height: size,
    width: size,
  }),
  ({onClick}) => ({
    cursor: onClick ? 'pointer' : 'default',
  })
);

const StyledStack = styled('span')<Pick<AvatarProps, 'size'>>(
  {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ({size}) => ({
    height: size,
    width: size,
  })
);

const StyledIcon = styled(SystemIconCircle)<{isImageLoaded: boolean}>(
  {
    transition: fadeTransition,
  },
  ({isImageLoaded}) => ({
    opacity: isImageLoaded ? 0 : 1,
  })
);

const StyledImage = styled('img')<{isLoaded: boolean}>(
  {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.circle,
    transition: fadeTransition,
  },
  ({isLoaded}) => ({
    opacity: isLoaded ? 1 : 0,
  })
);

const Avatar: AvatarOverload = React.forwardRef(
  (
    {
      variant = AvatarVariant.Light,
      size = SystemIconCircleSize.m,
      altText = 'Avatar',
      url,
      onClick,
      ...elemProps
    }: AvatarProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const loadImage = () => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    };

    const background = variant === AvatarVariant.Dark ? colors.blueberry400 : colors.soap300;

    return (
      <StyledContainer
        size={size}
        aria-label={altText}
        onClick={onClick}
        disabled={onClick ? false : true}
        ref={ref}
        {...elemProps}
      >
        <StyledStack size={size}>
          <StyledIcon
            icon={userIcon}
            background={background}
            size={size}
            isImageLoaded={imageLoaded}
          />
        </StyledStack>
        {url && (
          <StyledStack size={size}>
            <StyledImage src={url} alt={altText} onLoad={loadImage} isLoaded={imageLoaded} />
          </StyledStack>
        )}
      </StyledContainer>
    );
  }
) as any; // AvatarProps and forwardRef signatures are incompatible, so we must force cast

Avatar.Variant = AvatarVariant;
Avatar.Size = SystemIconCircleSize;

export default Avatar;
