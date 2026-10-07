import React from 'react';

import {cornerShapeStencil, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {Accessory, AccessoryProps, accessoryStencil} from './Accessory';

export interface AccessoryMediaProps extends AccessoryProps {
  /**
   * The URL of the image.
   */
  src: string;
  /**
   * The alternative text for the image. Accessories are decorative, so the image is always hidden
   * from assistive technology. Prefer an empty string when adjacent text already names the media.
   */
  alt: string;
  /**
   * How the image is resized to fit the tile.
   * @default 'cover'
   */
  objectFit?: 'contain' | 'cover';
  /**
   * The icon to display from `@workday/canvas-system-icons-web`, centered over the image. When
   * set, a scrim is painted under the icon for contrast. Uses `color` from `Accessory` for the
   * glyph (`system.color.fg.inverse` by default).
   */
  icon?: SystemIconProps['icon'];
}

export const accessoryMediaStencil = createStencil({
  vars: {
    background: '',
  },
  parts: {
    image: 'accessory-media-image',
  },
  base: ({background, imagePart}) => ({
    backgroundColor: cssVar(background, system.legacy.color.surface.alt.default),
    [imagePart]: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      overflow: 'hidden',
      borderRadius: cssVar(cornerShapeStencil.vars.shape),
      cornerShape: 'superellipse(1.1)',
    },
  }),
  modifiers: {
    imageLoaded: {
      false: ({imagePart}) => ({
        [imagePart]: {
          display: 'none',
        },
      }),
      true: {},
    },
    objectFit: {
      cover: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'cover',
        },
      }),
      contain: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'contain',
        },
      }),
    },
  },
});

export const accessoryMediaScrimStencil = createStencil({
  base: {
    position: 'absolute',
    inset: 0,
    backgroundColor: system.legacy.color.surface.overlay.scrim,
    borderRadius: cssVar(cornerShapeStencil.vars.shape),
    cornerShape: 'superellipse(1.1)',
    pointerEvents: 'none',
  },
});

/**
 * `AccessoryMedia` fills an accessory tile with an image. Pass `icon` to center a decorative icon
 * on a contrast scrim. The image stays hidden until it loads; a failed load keeps the tile
 * background. Always decorative.
 */
export const AccessoryMedia = createComponent('span')({
  displayName: 'AccessoryMedia',
  Component: (
    {
      src,
      alt,
      size = 'extraLarge',
      objectFit = 'cover',
      icon,
      color = system.color.fg.inverse,
      background,
      ...elemProps
    }: AccessoryMediaProps,
    ref,
    Element
  ) => {
    // Track the loaded URL so a `src` change hides the image again without a mount effect that
    // can race a synchronous `onLoad` (cached images and data URLs).
    const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null);
    const imageRef = React.useRef<HTMLImageElement>(null);
    const imageLoaded = loadedSrc === src;

    React.useEffect(() => {
      const image = imageRef.current;
      if (image?.complete && image.naturalWidth > 0) {
        setLoadedSrc(src);
      }
    }, [src]);

    return (
      <Accessory
        as={Element}
        ref={ref}
        color={icon ? color : undefined}
        size={size}
        {...handleCsProp(elemProps, accessoryMediaStencil({background, imageLoaded, objectFit}))}
      >
        <img
          ref={imageRef}
          alt={alt}
          onLoad={() => setLoadedSrc(src)}
          src={src}
          aria-hidden={true}
          {...accessoryMediaStencil.parts.image}
        />
        {icon && (
          <>
            <span {...handleCsProp({}, accessoryMediaScrimStencil())} />
            <SystemIcon icon={icon} {...accessoryStencil.parts.icon} aria-hidden={true} />
          </>
        )}
      </Accessory>
    );
  },
});
