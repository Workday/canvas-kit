import React, {useState} from 'react';
import {Property} from 'csstype';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, calc, createVars} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';

import {userIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export interface AvatarProps {
  /**
   * The variant of the Avatar default state. Accepts `Light` or `Dark`.
   * @default 'light'
   */
  variant?: 'light' | 'dark';
  /**
   * The size of the Avatar.
   * @default `medium`
   */
  size?:
    | 'extraSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraExtraLarge'
    | (string & {});
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label
   * @default Avatar
   */
  altText?: string;
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  objectFit?: Property.ObjectFit;
}
export const avatarVars = createVars('background');

export const avatarStencil = createStencil({
  vars: {
    size: '',
  },
  base: ({size}) => ({
    background: cssVar(avatarVars.background, system.color.bg.caution.default),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    borderRadius: system.shape.round,
    width: cssVar(size),
    height: cssVar(size),
    '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
    ['& > [data-slot="avatar-icon"]']: {
      transition: 'opacity 150ms linear',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [systemIconStencil.vars.size]: calc.multiply(size, 0.625),
    },
    ['& > [data-slot="avatar-image"]']: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: borderRadius.circle,
      transition: 'opacity 150ms linear',
    },
  }),
  modifiers: {
    variant: {
      light: {
        backgroundColor: system.color.bg.alt.default,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.fg.default,
        },
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
    size: {
      extraSmall: {
        width: system.space.x4,
        height: system.space.x4,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
        },
      },
      small: {
        width: system.space.x6,
        height: system.space.x6,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
        },
      },
      medium: {
        width: system.space.x8,
        height: system.space.x8,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
        },
      },
      large: {
        width: system.space.x10,
        height: system.space.x10,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
        },
      },
      extraLarge: {
        width: system.space.x16,
        height: system.space.x16,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
        },
      },
      extraExtraLarge: {
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
        },
      },
    },
    elementType: {
      div: {
        cursor: 'default',
      },
      button: {
        cursor: 'pointer',
      },
    },
    objectFit: {
      contain: {
        objectFit: 'contain',
      },
      fill: {
        objectFit: 'fill',
      },
      cover: {
        objectFit: 'cover',
      },
      ['scale-down']: {
        objectFit: 'scale-down',
      },
      none: {
        objectFit: 'none',
      },
      ['-moz-initial']: {
        objectFit: '-moz-initial',
      },
      ['initial']: {
        objectFit: 'initial',
      },
      ['inherit']: {
        objectFit: 'inherit',
      },
      ['revert']: {
        objectFit: 'revert',
      },
      ['unset']: {
        objectFit: 'unset',
      },
    },
    isImageLoaded: {
      true: {
        ['& [data-slot="avatar-icon"]']: {
          opacity: 0,
        },
        ['& [data-slot="avatar-image"]']: {
          opacity: 1,
        },
      },
      false: {
        ['& [data-slot="avatar-icon"]']: {
          opacity: 1,
        },
        ['& [data-slot="avatar-image"]']: {
          opacity: 0,
        },
      },
    },
  },
  defaultModifiers: {
    variant: 'light',
    size: 'medium',
    isImageLoaded: 'false',
    objectFit: 'contain',
  },
});

export const Avatar = createComponent('button')({
  displayName: 'Avatar',
  Component: (
    {variant, size, altText, url, onClick, objectFit, ...elemProps}: AvatarProps,
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

    return (
      <Element
        ref={ref}
        aria-label={altText}
        onClick={onClick}
        {...mergeStyles(elemProps, [
          avatarStencil({
            variant,
            size,
            objectFit,
            isImageLoaded: imageLoaded,
            elementType: Element,
          }),
        ])}
      >
        <SystemIcon icon={userIcon} data-slot="avatar-icon" />
        {url && <img data-slot="avatar-image" src={url} alt={altText} onLoad={loadImage} />}
      </Element>
    );
  },
});
