import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {type} from '@workday/canvas-kit-labs-react/tokens';
import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';

export interface HyperlinkProps {
  /**
   * The variant of the Hyperlink.
   * @default 'text'
   */
  variant?: 'text' | 'inverse';
  /**
   * The href of the anchor tag.
   */
  href?: string;
  children?: React.ReactNode;
}

const Anchor = styled('a')<HyperlinkProps & StyledType>(
  {
    fontFamily: type.body.fontFamily,
    ...type.variant.link,
  },
  ({variant}) => {
    if (variant === 'inverse') {
      return {
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
      };
    }
    return {};
  }
);

export const Hyperlink = createComponent('a')({
  displayName: 'Hyperlink',
  Component: ({variant, href, children, ...elemProps}: HyperlinkProps, ref, Element) => (
    <Anchor ref={ref} as={Element} variant={variant} href={href} {...elemProps}>
      {children}
    </Anchor>
  ),
});
