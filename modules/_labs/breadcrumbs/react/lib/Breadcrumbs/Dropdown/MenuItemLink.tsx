/** @jsx jsx */
import React, {forwardRef} from 'react';
import {css, jsx} from '@emotion/core';
import {colors, commonColors, type, typeColors, spacing} from '@workday/canvas-kit-react-core';

interface DropdownMenuItemLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const menuItemLinkStyles = css({
  ...type.body,
  textDecoration: 'none',
  outline: 'none',
  padding: `${spacing.xxs} ${spacing.s}`,
  flex: 1,
  alignItems: 'center',
  boxSizing: 'border-box',
  color: colors.blackPepper300,
  cursor: 'pointer',
  display: 'flex',
  transition: 'background-color color 80ms',
  '&:hover': {
    backgroundColor: commonColors.hoverBackground,
  },
  '&:focus': {
    backgroundColor: commonColors.focusBackground,
    color: typeColors.inverse,
    outline: 'none',
  },
});

export const DropdownMenuItemLink = forwardRef(
  (
    {children, href, ...props}: DropdownMenuItemLinkProps,
    ref: React.RefObject<HTMLAnchorElement>
  ) => {
    return (
      <a css={menuItemLinkStyles} ref={ref} href={href} role="menuitem" {...props}>
        {children}
      </a>
    );
  }
);
