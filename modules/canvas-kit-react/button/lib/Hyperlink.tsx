import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {type} from '@workday/canvas-kit-labs-react-core';
import {TextButtonVariant} from './types';
import {styled} from '@workday/canvas-kit-react-common';

export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The variant of the Hyperlink.
   * @default TextButtonVariant.Default
   */
  variant?: TextButtonVariant;
  /**
   * The href of the anchor tag.
   */
  href?: string;
}

const Anchor = styled('a')<HyperlinkProps>(
  {
    fontFamily: type.body.fontFamily,
    ...type.variant.link,
  },
  ({variant}) => {
    if (variant === TextButtonVariant.Inverse) {
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

const Hyperlink = ({variant, href, ...elemProps}: HyperlinkProps) => (
  <Anchor variant={variant} href={href} {...elemProps}></Anchor>
);

Hyperlink.Variant = TextButtonVariant;

export default Hyperlink;
