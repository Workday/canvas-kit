/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {type} from '@workday/canvas-kit-react-core';

interface DropdownMenuItemLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const menuItemLinkStyles = css({
  ...type.body,
  color: 'inherit',
  textDecoration: 'none',
  outline: 'none',
});

export const DropdownMenuItemLink = ({children, href, ...props}: DropdownMenuItemLinkProps) => {
  return (
    <a css={menuItemLinkStyles} tabIndex={-1} role="menuitem" href={href} {...props}>
      {children}
    </a>
  );
};
