import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

export interface HyperlinkProps extends CSProps {
  /**
   * sets modifier styles for Hyperlink
   * - `inverse`: sets the color to white and updates hover, focus, and active pseudo-classes
   * - `standalone`: removes the underline of the Hyperlink. This is useful when a hyperlink is used outside the context of a paragraph or body text.
   * - `standaloneInverse`: removes the underline of the Hyperlink and sets the color to white. This is useful when a hyperlink is used outside the context of a paragraph or body text on a dark background.
   */
  variant?: 'inverse' | 'standalone' | 'standaloneInverse';
  /**
   * attribute for the hyperlink URL
   */
  href?: string;
  children?: React.ReactNode;
}

export const hyperlinkStencil = createStencil({
  base: {
    fontFamily: system.fontFamily.default,
    textDecoration: 'underline',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.info.default, system.color.text.primary.default),
    cursor: 'pointer',
    borderRadius: px2rem(2),
    padding: `0 ${px2rem(2)} `,
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    wordBreak: 'break-word',
    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.info.strong, system.color.text.primary.strong),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      background: cssVar(system.color.surface.alt.default, system.color.bg.alt.soft),
    },
    '&:focus, &.focus, &:focus-visible': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      boxShadow: `0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.primary, brand.common.focusOutline)}`,
      outline: 'none',
    },
    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.info.strong, system.color.text.primary.stronger),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      background: cssVar(system.color.surface.alt.default, system.color.bg.alt.default),
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.inverse, system.color.text.inverse),
        '&:hover, &.hover': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          color: cssVar(system.color.fg.inverse, system.color.text.inverse),
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus, &:focus-visible': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token.
          boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.fg.inverse, system.color.text.inverse)}`,
        },
        '&:active, &.active': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          color: cssVar(system.color.brand.fg.primary.strong, system.color.text.primary.stronger),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          background: cssVar(system.color.surface.navigation, system.color.bg.alt.soft),
        },
      },
      standalone: {
        textDecoration: 'none',
      },
      standaloneInverse: {
        textDecoration: 'none',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.inverse, system.color.text.inverse),
        '&:hover, &.hover': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          color: cssVar(system.color.fg.inverse, system.color.text.inverse),
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus, &:focus-visible': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.focus.inverse, system.color.text.inverse)}`,
        },
        '&:active, &.active': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          color: cssVar(system.color.brand.fg.primary.strong, system.color.text.primary.stronger),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          background: cssVar(system.color.surface.navigation, system.color.bg.alt.soft),
        },
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
  Component: ({children, variant, ...elemProps}: HyperlinkProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, hyperlinkStencil({variant}))}>
      {children}
    </Element>
  ),
});
