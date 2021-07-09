import * as React from 'react';
import {borderRadius, colors, type} from '@workday/canvas-kit-react/tokens';
import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';

export interface HyperlinkProps {
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

const variantStyles = {
  inverse: {
    color: colors.frenchVanilla100,
    '&:hover': {
      color: colors.frenchVanilla100,
      background: 'rgba(255, 255, 255, 0.1)',
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.frenchVanilla100}`,
    },
    '&:active': {
      color: colors.blueberry600,
      background: colors.soap200,
    },
  },
};

const anchorVariants = (props: HyperlinkProps) => {
  if (props.variant === 'inverse') {
    return variantStyles.inverse;
  }
  return {};
};

const Anchor = styled('a')<HyperlinkProps & StyledType>(
  {
    fontFamily: type.properties.fontFamilies.default,
    textDecoration: 'underline',
    color: colors.blueberry400,
    cursor: 'pointer',
    borderRadius: borderRadius.s,
    display: 'inline-block',
    padding: '0 2px',
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    '&:hover': {
      color: colors.blueberry500,
      background: colors.soap200,
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.blueberry400}`,
      outline: 'none',
    },
    '&:active': {
      color: colors.blueberry600,
      background: colors.soap300,
    },
  },
  anchorVariants
);

export const Hyperlink = createComponent('a')({
  displayName: 'Hyperlink',
  Component: ({variant, href, children, ...elemProps}: HyperlinkProps, ref, Element) => (
    <Anchor ref={ref} as={Element} variant={variant} href={href} {...elemProps}>
      {children}
    </Anchor>
  ),
});
