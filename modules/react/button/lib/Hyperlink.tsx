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
    color: system.color.fg.info.default,
    cursor: 'pointer',
    borderRadius: px2rem(2),
    padding: `0 ${px2rem(2)} `,
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    wordBreak: 'break-word',
    '&:hover, &.hover': {
      color: system.color.fg.info.strong,
      background: system.color.surface.alt.default,
    },
    '&:focus, &.focus, &:focus-visible': {
      boxShadow: `0 0 0 ${px2rem(2)} ${system.color.brand.focus.primary}`,
      outline: 'none',
    },
    '&:active, &.active': {
      color: system.color.fg.info.strong,
      background: system.color.surface.alt.default,
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
          color: system.color.fg.info.strong,
          background: system.color.surface.navigation,
        },
      },
      standalone: {
        textDecoration: 'none',
      },
      standaloneInverse: {
        textDecoration: 'none',
        color: system.color.fg.inverse,
        '&:hover, &.hover': {
          color: system.color.fg.inverse,
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus, &:focus-visible': {
          boxShadow: `0 0 0 ${px2rem(2)}  ${system.color.focus.inverse}`,
        },
        '&:active, &.active': {
          color: system.color.fg.info.strong,
          background: system.color.surface.navigation,
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

const stencil1 = createStencil({
  vars: {
    color: '',
  },
  base: ({color}) => ({
    color: color,
  }),
  modifiers: {
    variant: {
      inverse: {
        color: 'red',
      },
    },
  },
});

const stencil2 = createStencil({
  extends: stencil1,
  vars: {
    color: '',
  },
  base: ({color}) => ({
    background: color,
  }),
  modifiers: {
    size: {
      small: {},
    },
  },
});

const test = stencil2({size: 'small', color: 'blue', variant: 'inverse'});

const Test = () => {
  return (
    <div>
      <button {...stencil2({size: 'small', color: 'blue', variant: 'inverse'})}>
        <span>Test</span>
      </button>
    </div>
  );
};
