import React, {useState} from 'react';
import {Property} from 'csstype';
import {
  createComponent,
  focusRing,
  hideMouseFocus,
  pickForegroundColor,
} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, px2rem, calc} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {SystemIconCircleSize, SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {userIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

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
  Variant: 'light' | 'dark';
  Size: typeof SystemIconCircleSize;
};

export interface AvatarProps {
  /**
   * The variant of the Avatar default state. Accepts `Light` or `Dark`.
   * @default 'light'
   */
  variant?: 'light' | 'dark';
  /**
   * The size of the Avatar.
   * @default `system.space.x8`
   */
  size?: string | number;
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label
   * @default Avatar
   */
  altText?: string;
  background?: string;
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  objectFit?: Property.ObjectFit;
}

const avatarContainerStencil = createStencil({
  vars: {size: ''},
  base: ({size}) => ({
    background: base.soap200,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    cursor: 'default',
    borderRadius: system.shape.round,
    width: cssVar(size, system.space.x8),
    height: cssVar(size, system.space.x8),
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...focusRing({separation: 2}),
      },
    },
    ...hideMouseFocus,
  }),
  modifiers: {
    hasOnClick: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

const avatarIconStencil = createStencil({
  vars: {size: ''},
  base: ({size}) => ({
    transition: 'opacity 150ms linear',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    width: cssVar(size, system.space.x8),
    height: cssVar(size, system.space.x8),
  }),
  modifiers: {
    variant: {
      light: {
        backgroundColor: system.color.bg.alt.default,
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
      },
    },
    isImageLoaded: {
      true: {
        opacity: 0,
      },
    },
  },
});

const avatarImageStencil = createStencil({
  vars: {objectFit: ''},
  base: ({objectFit}) => ({
    width: '100%',
    height: '100%',
    opacity: 1,
    borderRadius: borderRadius.circle,
    transition: 'opacity 150ms linear',
    objectFit: cssVar(objectFit, 'container'),
  }),
  modifiers: {
    isImageLoaded: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});

export const Avatar: AvatarOverload = createComponent('button')({
  displayName: 'Avatar',
  Component: (
    {variant, size, altText, url, onClick, objectFit, background, ...elemProps}: AvatarProps,
    ref,
    Element
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const loadImage = () => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    };

    React.useLayoutEffect(() => {
      setImageLoaded(false);
    }, [url]);

    const backgroundFallback = background && !background.startsWith('--') ? background : '#F0F1F2';
    const iconColor = pickForegroundColor(backgroundFallback, 'rgba(0,0,0,0.65)', '#fff');

    return (
      <Element
        ref={ref}
        aria-label={altText}
        onClick={onClick}
        {...mergeStyles(elemProps, [
          avatarContainerStencil({
            size: typeof size === 'number' ? px2rem(size) : size,
            hasOnClick: onClick !== undefined,
          }),
        ])}
      >
        {!imageLoaded && (
          <div
            {...systemIconCircleStencil({
              containerSize: typeof size === 'number' ? px2rem(size) : size,
              backgroundColor: background,
              iconColor,
            })}
          >
            <SystemIcon
              icon={userIcon}
              {...mergeStyles(elemProps, [
                avatarIconStencil({
                  variant,
                  isImageLoaded: imageLoaded,
                  size: typeof size === 'number' ? px2rem(size) : size,
                }),
              ])}
            />
          </div>
        )}
        {url && (
          <img
            {...mergeStyles(elemProps, [
              avatarImageStencil({
                isImageLoaded: imageLoaded,
                objectFit,
              }),
            ])}
            src={url}
            alt={altText}
            onLoad={loadImage}
          />
        )}
      </Element>
    );
  },
});

const systemIconCircleStencil = createStencil({
  vars: {
    containerSize: '',
    backgroundColor: '',
    iconColor: '',
  },
  base: ({backgroundColor, containerSize, iconColor}) => ({
    background: cssVar(backgroundColor, base.soap200),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: system.space.zero,
    border: 'none',
    borderRadius: system.shape.round,
    overflow: 'hidden',
    width: cssVar(containerSize, system.space.x10),
    height: cssVar(containerSize, system.space.x10),
    [systemIconStencil.vars.size]: calc.multiply(cssVar(containerSize, system.space.x10), 0.625),
    [systemIconStencil.vars.color]: iconColor,
    '& img': {
      width: '100%',
      height: '100%',
    },
  }),
});
