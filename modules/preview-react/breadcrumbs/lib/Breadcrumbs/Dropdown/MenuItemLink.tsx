import React, {forwardRef} from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {colors, commonColors, type, typeColors, space} from '@workday/canvas-kit-react/tokens';

interface DropdownMenuItemLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * The href url of the anchor tag
   */
  href: string;
  /**
   * A handler function for overriding hard-redirects with links
   */
  onAction?: (href: string) => void;
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
    {children, href, onAction, onClick, ...elemProps}: DropdownMenuItemLinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      // allow an override to the hard redirect
      if (onAction) {
        onAction(href);
      } else {
        // default to hard redirecting
        window.location.href = href;
      }
      // don't block the onClick event if it's provided
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <MenuItemLink ref={ref} href={href} role="menuitem" onClick={handleClick} {...elemProps}>
        {children}
      </MenuItemLink>
    );
  }
);
