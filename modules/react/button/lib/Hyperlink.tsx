import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';

import {createStencil, CSProps, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface HyperlinkProps extends CSProps {
  /**
   * attribute for the hyperlink URL
   */
  href?: string;
  /**
   * sets modifier styles for Hyperlink
   * - `inverse`: sets the color to frenchVanilla100 and updates hover, focus, and active pseudo-classes
   * @default 'default'
   */
  variant?: 'default' | 'inverse';
  /**
   * The children of this Hyperlink component
   */
  children?: React.ReactNode;
}

const hyperlinkStyles = createStencil({
  base: {
    fontFamily: system.fontFamily.default,
    textDecoration: 'underline',
    cursor: 'pointer',
    borderRadius: system.shape.half,
    display: 'inline-block',
    padding: `0 ${px2rem(2)}`,
    margin: `0 ${px2rem(-2)}`,
    transition: 'color 0.15s,background-color 0.15s',
    '&:focus, &.focus': {
      outline: 'none',
    },
  },
  modifiers: {
    variant: {
      default: {
        color: base.blueberry400,
        '&:hover, &.hover': {
          color: base.blueberry500,
          background: base.soap200,
        },
        '&:focus, &.focus': {
          boxShadow: `0 0 0 2px ${cssVar(base.blueberry400)}`,
        },
        '&:active, &.active': {
          color: base.blueberry600,
          background: base.soap300,
        },
      },
      inverse: {
        color: base.frenchVanilla100,
        '&:hover, &.hover': {
          color: base.frenchVanilla100,
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus, &.focus': {
          boxShadow: `0 0 0 2px ${cssVar(base.frenchVanilla100)}`,
        },
        '&:active, &.active': {
          color: base.blueberry600,
          background: base.soap200,
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
  Component: ({children, variant = 'default', ...elemProps}: HyperlinkProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, hyperlinkStyles({variant}))}>
      {children}
    </Element>
  ),
});
