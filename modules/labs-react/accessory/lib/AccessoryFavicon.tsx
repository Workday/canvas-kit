import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {Accessory, AccessoryProps, AccessorySize, accessoryStencil} from './Accessory';

/** Hostname from a site URL or a bare domain such as `gmail.com`. */
function hostnameFromSiteUrl(siteUrl: string): string {
  const trimmed = siteUrl.trim();
  if (!trimmed) {
    return '';
  }

  try {
    const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    return new URL(withProtocol).hostname || '';
  } catch {
    return '';
  }
}

/**
 * Brand favicon URL for a site, resolved through the public Google favicon endpoint. Tiles larger
 * than 32px request a 180px source. Smaller tiles request 64px.
 */
function faviconSrcFromSiteUrl(siteUrl: string, size: AccessorySize): string {
  const host = hostnameFromSiteUrl(siteUrl);
  if (!host) {
    return '';
  }

  const sourceSize = size === 'extraLarge' ? 180 : 64;
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${sourceSize}`;
}

export interface AccessoryFaviconProps extends AccessoryProps {
  /**
   * The site URL or bare domain, such as `https://mail.google.com` or `gmail.com`. The hostname is
   * used to resolve the favicon.
   */
  url: string;
}

/**
 * Favicon treatment for `AccessoryFavicon`. At `large` and `extraLarge` the mark is inset in an
 * outlined tile. At `medium` and smaller the mark fills the tile and the frame is removed.
 * `background` overrides the tile fill.
 */
export const accessoryFaviconStencil = createStencil({
  parts: {
    icon: 'accessory-icon',
    image: 'accessory-favicon-image',
  },
  base: ({iconPart, imagePart}) => ({
    [iconPart]: {
      overflow: 'hidden',
      backgroundColor: cssVar(
        accessoryStencil.vars.tileBackground,
        system.legacy.color.surface.default
      ),
      borderWidth: px2rem(1),
      borderStyle: 'solid',
      borderColor: system.legacy.color.border.default,
    },
    [imagePart]: {
      width: `calc(100% - ${cssVar(system.space.x3)})`,
      height: `calc(100% - ${cssVar(system.space.x3)})`,
      objectFit: 'contain',
      borderRadius: system.legacy.shape.md,
      cornerShape: 'superellipse(1.1)',
    },
  }),
  modifiers: {
    size: {
      extraSmall: ({iconPart, imagePart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
        [imagePart]: {
          width: '100%',
          height: '100%',
          borderRadius: 0,
        },
      }),
      small: ({iconPart, imagePart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
        [imagePart]: {
          width: '100%',
          height: '100%',
          borderRadius: 0,
        },
      }),
      medium: ({iconPart, imagePart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
        [imagePart]: {
          width: '100%',
          height: '100%',
          borderRadius: 0,
        },
      }),
      large: {},
      extraLarge: {},
    },
  },
  defaultModifiers: {
    size: 'extraLarge',
  },
});

/**
 * `AccessoryFavicon` renders a site favicon in an accessory tile. Pass a site URL or domain as
 * `url`. The mark is inset in an outlined frame at `large` and `extraLarge`, and fills the tile at
 * smaller sizes. Always decorative.
 */
export const AccessoryFavicon = createComponent('span')({
  displayName: 'AccessoryFavicon',
  Component: (
    {url, size = 'extraLarge', background, ...elemProps}: AccessoryFaviconProps,
    ref,
    Element
  ) => {
    const src = faviconSrcFromSiteUrl(url, size);

    return (
      <Accessory
        as={Element}
        ref={ref}
        background={background}
        size={size}
        {...handleCsProp(elemProps, accessoryFaviconStencil({size}))}
      >
        {src ? (
          <span {...accessoryStencil.parts.icon}>
            <img alt="" src={src} aria-hidden={true} {...accessoryFaviconStencil.parts.image} />
          </span>
        ) : null}
      </Accessory>
    );
  },
});
