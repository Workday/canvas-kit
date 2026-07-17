import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface HyperlinkProps extends CSProps {
  /**
   * Sets color styles for Hyperlink
   * - `inverse`: sets the color to white and updates hover, focus, and active pseudo-classes. Use this
   *   variant on dark backgrounds.
   * - `secondary`: sets the color to a dark gray (keeps the underline by default). Use this
   *   variant on colored backgrounds.
   */
  variant?: 'inverse' | 'secondary';
  /**
   * Sets underline behavior for Hyperlink
   * - `inline` (default): keeps the underline. Use when the hyperlink appears in body text.
   * - `standalone`: removes the underline. Use when a hyperlink is outside paragraph or body text.
   *
   * @default 'inline'
   */
  type?: 'inline' | 'standalone';
  /**
   * Attribute for the hyperlink URL
   */
  href?: string;
  children?: React.ReactNode;
}

export const hyperlinkStencil = createStencil({
  base: {
    fontFamily: system.fontFamily.default,
    textDecoration: 'underline',
    color: system.sana.color.brand.fg.link.default,
    cursor: 'pointer',
    borderRadius: px2rem(2),
    padding: `0 ${px2rem(2)}`,
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    wordBreak: 'break-word',
    '&:hover, &.hover': {
      color: system.sana.color.brand.fg.link.hover,
      background: system.legacy.color.surface.overlay.hover.default,
    },
    '&:focus, &.focus, &:focus-visible': {
      boxShadow: `0 0 0 ${px2rem(2)} ${system.legacy.color.brand.border.primary}`,
      outline: 'none',
    },
    '&:active, &.active': {
      color: system.sana.color.brand.fg.link.hover,
      background: system.legacy.color.surface.overlay.pressed.default,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        color: system.color.fg.inverse,
        '&:hover, &.hover': {
          color: system.color.fg.inverse,
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus, &:focus-visible': {
          boxShadow: `0 0 0 ${px2rem(2)}  ${system.color.fg.inverse}`,
        },
        '&:active, &.active': {
          color: system.legacy.color.fg.info.strong,
          background: system.legacy.color.surface.navigation,
        },
      },
      secondary: {
        color: system.color.fg.default,
        '&:hover, &.hover': {
          color: system.color.fg.strong,
          background: system.legacy.color.surface.overlay.hover.default,
        },
        '&:active, &.active': {
          color: system.color.fg.strong,
          background: system.legacy.color.surface.overlay.pressed.default,
        },
      },
    },
    type: {
      inline: {},
      standalone: {
        textDecoration: 'none',
      },
    },
  },
});

/**
 * `Hyperlink`s should be used when you want to navigate away from the current page or to an anchor
 * on the current page.
 */
export const Hyperlink = createComponent('a')({
  displayName: 'Hyperlink',
  Component: ({children, variant, type = 'inline', ...elemProps}: HyperlinkProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, hyperlinkStencil({variant, type}))}>
      {children}
    </Element>
  ),
});
