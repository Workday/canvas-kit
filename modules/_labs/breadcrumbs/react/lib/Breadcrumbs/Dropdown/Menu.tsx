/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {
  borderRadius,
  colors,
  commonColors,
  depth,
  spacing,
  type,
} from '@workday/canvas-kit-react-core';

// types
import {DropdownContext} from './Provider';
import {Breadcrumb} from '../types';
// local components
import {DropdownMenuItem} from './MenuItem';
import {DropdownMenuItemLink} from './MenuItemLink';

interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLUListElement>,
    Pick<DropdownContext, 'activeDropdownItem' | 'dropdownItems' | 'setActiveDropdownItem'> {
  activeDropdownItemRef: React.RefObject<HTMLLIElement>;
  resetFocus: () => void;
}

const menuWrapperStyles = css({
  ...type.body,
  ...depth[2],
  backgroundColor: commonColors.background,
  border: `1px solid ${colors.soap500}`,
  borderRadius: borderRadius.m,
  boxSizing: 'border-box',
  display: 'inline-block',
  marginTop: spacing.xxxs,
  position: 'relative',
  width: 'max-content',
});

const MenuWrapper = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div css={menuWrapperStyles} {...props} />;
};

const menuStyles = css({
  boxSizing: 'border-box',
  listStyle: 'none',
  margin: `${spacing.xxs} 0`,
  padding: 0,
  width: 280,
  wordBreak: 'break-word',
});

const Menu = (props: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul role="menu" css={menuStyles} {...props} />;
};

export const DropdownMenu = ({
  activeDropdownItemRef,
  activeDropdownItem,
  dropdownItems,
  resetFocus,
  setActiveDropdownItem,
  ...props
}: DropdownMenuProps) => {
  const findActiveDropdownItemByIndex = (index: number) => {
    return dropdownItems.filter(item => item.index === index)[0];
  };

  const handleItemKeyUp = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.stopPropagation();
    e.preventDefault();
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'Up': // IE/Edge specific value
        const itemAbove = findActiveDropdownItemByIndex(activeDropdownItem.index - 1);
        // if the item is at the top of the list, transfer focus back to the button
        if (itemAbove) {
          return setActiveDropdownItem(itemAbove);
        }
        // otherwise, toggle up
        return resetFocus();
      case 'ArrowDown':
      case 'Down': // IE/Edge specific value
      case 'ArrowRight':
        const itemBelow = findActiveDropdownItemByIndex(activeDropdownItem.index + 1);
        if (itemBelow) {
          return setActiveDropdownItem(itemBelow);
        }
        return setActiveDropdownItem(dropdownItems[0]);
      default:
        break;
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, item: Breadcrumb) => {
    switch (e.key) {
      case 'Tab':
        e.preventDefault();
        break;
      case 'Enter':
        e.preventDefault();
        console.log('enter');
        if (item.onAction) {
          item.onAction(item);
          return resetFocus();
        }
        return (window.location.href = item.link);
      default:
        break;
    }
  };

  return (
    <MenuWrapper>
      <Menu {...props}>
        {dropdownItems.map((item, i) => {
          const isFocused = item.index === activeDropdownItem.index;
          return (
            <DropdownMenuItem
              onKeyUp={handleItemKeyUp}
              onKeyDown={e => handleItemKeyDown(e, item)}
              ref={isFocused ? activeDropdownItemRef : null}
              key={i}
            >
              <DropdownMenuItemLink href={item.link}>{item.text}</DropdownMenuItemLink>
            </DropdownMenuItem>
          );
        })}
      </Menu>
    </MenuWrapper>
  );
};
