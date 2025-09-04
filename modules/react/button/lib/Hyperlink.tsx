import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system, brand} from '@workday/canvas-tokens-web';

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
    color: system.color.text.primary.default,
    cursor: 'pointer',
    borderRadius: system.shape.half,
    padding: `0 ${px2rem(2)} `,
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    wordBreak: 'break-word',
    '&:hover, &.hover': {
      color: system.color.text.primary.strong,
      background: system.color.bg.alt.soft,
    },
    '&:focus, &.focus, &:focus-visible': {
      boxShadow: `0 0 0 ${px2rem(2)} ${cssVar(brand.common.focusOutline)}`,
      outline: 'none',
    },
    '&:active, &.active': {
      color: system.color.text.primary.stronger,
      background: system.color.bg.alt.default,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        color: system.color.text.inverse,
        '&:hover, &.hover': {
          color: system.color.text.inverse,
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus, &:focus-visible': {
          boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.text.inverse)}`,
        },
        '&:active, &.active': {
          color: system.color.text.primary.stronger,
          background: system.color.bg.alt.soft,
        },
      },
      standalone: {
        textDecoration: 'none',
      },
      standaloneInverse: {
        textDecoration: 'none',
        color: system.color.text.inverse,
        '&:hover, &.hover': {
          color: system.color.text.inverse,
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus, &:focus-visible': {
          boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.text.inverse)}`,
        },
        '&:active, &.active': {
          color: system.color.text.primary.stronger,
          background: system.color.bg.alt.soft,
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
