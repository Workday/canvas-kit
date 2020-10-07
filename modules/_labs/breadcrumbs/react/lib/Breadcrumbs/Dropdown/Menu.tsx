/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {styled} from '@workday/canvas-kit-react-common';
import {
  borderRadius,
  colors,
  commonColors,
  depth,
  spacing,
  type,
} from '@workday/canvas-kit-react-core';

// types
import {Breadcrumb} from '../types';
// local components
import {DropdownMenuItemLink} from './MenuItemLink';

export interface DropdownMenuProps {
  activeDropdownItem: Breadcrumb;
  'aria-labelledby': string;
  dropdownItems: Breadcrumb[];
  setActiveDropdownItem: React.Dispatch<React.SetStateAction<Breadcrumb>>;
  activeDropdownItemRef: React.RefObject<HTMLAnchorElement>;
  resetFocus: () => void;
  toggleActiveItemUp: () => void;
  toggleActiveItemDown: () => void;
}

const menuStyles = css({
  ...type.body,
  ...depth[2],
  backgroundColor: commonColors.background,
  border: `1px solid ${colors.soap500}`,
  borderRadius: borderRadius.m,
  boxSizing: 'border-box',
  display: 'inline-block',
  marginTop: spacing.xxxs,
  maxHeight: 200,
  outline: 'none',
  overflowY: 'auto',
  position: 'relative',
  width: 'max-content',
});

const StyledMenuList = styled('ul')({
  boxSizing: 'border-box',
  listStyle: 'none',
  margin: `${spacing.xxs} 0`,
  padding: 0,
  width: 280,
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
});

const MenuList = (elemProps: React.HTMLAttributes<HTMLUListElement>) => {
  return <StyledMenuList role="menu" {...elemProps} />;
};

export const DropdownMenu = ({
  activeDropdownItemRef,
  activeDropdownItem,
  dropdownItems = [],
  resetFocus,
  setActiveDropdownItem,
  toggleActiveItemDown,
  toggleActiveItemUp,
  ...elemProps
}: DropdownMenuProps) => {
  const handleItemKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'Up': // IE/Edge specific value
      case 'ArrowLeft':
      case 'Left': // IE/Edge specific value
        toggleActiveItemUp();
        break;
      case 'ArrowDown':
      case 'Down': // IE/Edge specific value
      case 'ArrowRight':
      case 'Right': // IE/Edge specific value
        toggleActiveItemDown();
        break;
      default:
        break;
    }
  };

  const handleItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, item: Breadcrumb) => {
    switch (event.key) {
      case 'Tab':
        event.preventDefault();
        break;
      case 'Enter':
        event.preventDefault();
        if (item.onAction) {
          item.onAction(item);
          resetFocus();
          break;
        }
        window.location.href = item.link;
        break;
      case 'Escape':
      case 'Esc':
        // TODO: remove this once it's available in the `useCloseOnEscape` hook
        resetFocus();
        break;
      default:
        break;
    }
  };

  return (
    <div css={menuStyles}>
      <MenuList {...elemProps}>
        {dropdownItems.map((item, i) => {
          const isFocused = item.index === activeDropdownItem.index;
          return (
            <li onKeyUp={handleItemKeyUp} onKeyDown={e => handleItemKeyDown(e, item)} key={i}>
              <DropdownMenuItemLink ref={isFocused ? activeDropdownItemRef : null} href={item.link}>
                {item.text}
              </DropdownMenuItemLink>
            </li>
          );
        })}
      </MenuList>
    </div>
  );
};
