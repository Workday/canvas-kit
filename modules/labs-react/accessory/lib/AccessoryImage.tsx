import {ImgHTMLAttributes} from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {accessoryStencil} from './Accessory';
import {AccessoryIcon} from './AccessoryIcon';

export interface AccessoryImageProps
  extends CSProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'children'> {
  /**
   * The URL of the image.
   */
  src: string;
  /**
   * The alternative text for the image. Use an empty string when the image is decorative and the
   * meaning is available in adjacent text.
   */
  alt: string;
  /**
   * How the image is resized to fit the tile.
   * @default 'cover'
   */
  objectFit?: 'contain' | 'cover';
  /**
   * The icon to display from `@workday/canvas-system-icons-web`, centered over the image. When
   * set, `Accessory.Image` also renders `Accessory.Icon`. The icon is decorative.
   */
  icon?: SystemIconProps['icon'];
  /**
   * The color of the icon. Used when `icon` is set.
   * @default `system.color.fg.inverse`
   */
  color?: string;
  /**
   * The background color behind the image. Visible when the image does not cover the tile, such as
   * `objectFit="contain"`.
   * @default `system.legacy.color.surface.alt.default`
   */
  background?: string;
}

export const accessoryImageStencil = createStencil({
  vars: {
    background: '',
  },
  base: ({background}) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: cssVar(background, system.legacy.color.surface.alt.default),
  }),
  modifiers: {
    objectFit: {
      cover: {
        objectFit: 'cover',
      },
      contain: {
        objectFit: 'contain',
      },
    },
  },
});

export const AccessoryImage = createComponent('img')({
  displayName: 'Accessory.Image',
  Component: (
    {
      src,
      alt,
      objectFit = 'cover',
      icon,
      color = system.color.fg.inverse,
      background,
      ...elemProps
    }: AccessoryImageProps,
    ref,
    Element
  ) => {
    return (
      <>
        <Element
          ref={ref}
          src={src}
          alt={alt}
          {...handleCsProp(elemProps, accessoryImageStencil({objectFit, background}))}
          {...accessoryStencil.parts.image}
          aria-hidden={elemProps['aria-hidden'] ?? (alt === '' ? true : undefined)}
        />
        {icon && <AccessoryIcon background="transparent" color={color} icon={icon} />}
      </>
    );
  },
});
