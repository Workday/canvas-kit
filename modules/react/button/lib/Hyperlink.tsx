import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

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
  /**
   * The children of the `Expandable` container. This should contain `Expandable.Target` and
   * `Expandable.Container`
   */
  children?: React.ReactNode;
}

export const hyperlinkStencil = createStencil({
  base: {
    fontFamily: system.fontFamily.default, // type.properties.fontFamilies.default,
    textDecoration: 'underline',
    color: system.color.text.primary.default, // colors.blueberry400,
    cursor: 'pointer',
    borderRadius: system.shape.half,
    display: 'inline-block',
    padding: `0 ${px2rem(2)}`,
    margin: `0 -${px2rem(2)}`,
    transition: 'color 0.15s,background-color 0.15s',
    '&:hover': {
      color: system.color.text.primary.strong, // colors.blueberry500,
      background: system.color.bg.alt.soft, // colors.soap200,
    },
    '&:focus': {
      boxShadow: `0 0 0 ${px2rem(2)} ${system.color.text.primary.default}`, // colors.blueberry400
      outline: 'none',
    },
    '&:active': {
      color: system.color.text.primary.stronger, // colors.blueberry600,
      background: system.color.bg.alt.default, // colors.soap300,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        color: system.color.text.inverse, // colors.frenchVanilla100,
        '&:hover': {
          color: system.color.text.inverse, // colors.frenchVanilla100,
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus': {
          boxShadow: `0 0 0 ${px2rem(2)} ${system.color.text.inverse}`, // colors.frenchVanilla100
        },
        '&:active': {
          color: system.color.text.primary.stronger, // colors.blueberry600,
          // It's weird to me that this is soap 200 and not 300 like the default active state.
          background: system.color.bg.alt.soft, // colors.soap200,
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
  Component: ({variant, ...elemProps}: HyperlinkProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, hyperlinkStencil({variant}))} />
  ),
});
