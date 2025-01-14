import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface HyperlinkProps extends CSProps {
  /**
   * sets modifier styles for Hyperlink
   * - `inverse`: sets the color to frenchVanilla100 and updates hover, focus, and active pseudo-classes
   */
  variant?: 'inverse';
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
    display: 'inline-block',
    padding: '0 2px',
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    '&:hover, &.hover': {
      color: system.color.text.primary.strong,
      background: system.color.bg.alt.soft,
    },
    '&:focus, &.focus, &:focus-visible': {
      boxShadow: `0 0 0 2px ${cssVar(system.color.bg.primary.default)}`,
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
          boxShadow: `0 0 0 2px ${cssVar(system.color.text.inverse)}`,
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
