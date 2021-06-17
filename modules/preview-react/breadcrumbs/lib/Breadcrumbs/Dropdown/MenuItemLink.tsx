import React, {forwardRef} from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {colors, commonColors, type, typeColors, space} from '@workday/canvas-kit-react/tokens';

interface DropdownMenuItemLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * The href url of the anchor tag
   */
  href: string;
}

const MenuItemLink = styled('a')({
  ...type.levels.subtext.large,
  boxSizing: 'border-box',
  textAlign: 'left',
  color: colors.blackPepper300,
  cursor: 'pointer',
  display: 'block',
  outline: 'none',
  padding: `${space.xxs} ${space.s}`,
  textDecoration: 'none',
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
    {children, href, ...elemProps}: DropdownMenuItemLinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <MenuItemLink ref={ref} href={href} role="menuitem" {...elemProps}>
        {children}
      </MenuItemLink>
    );
  }
);
