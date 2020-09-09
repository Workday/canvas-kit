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
import {DropdownMenuItemLink} from './MenuItemLink';

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLUListElement>,
    Pick<DropdownContext, 'activeDropdownItem' | 'dropdownItems' | 'setActiveDropdownItem'> {
  activeDropdownItemRef: React.RefObject<HTMLAnchorElement>;
  resetFocus: () => void;
  toggleActiveItemUp: () => void;
  toggleActiveItemDown: () => void;
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
  dropdownItems = [],
  resetFocus,
  setActiveDropdownItem,
  toggleActiveItemDown,
  toggleActiveItemUp,
  ...props
}: DropdownMenuProps) => {
  const handleItemKeyUp = (e: React.KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'Up': // IE/Edge specific value
        return toggleActiveItemUp();
      case 'ArrowDown':
      case 'Down': // IE/Edge specific value
      case 'ArrowRight':
        return toggleActiveItemDown();
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
            <li onKeyUp={handleItemKeyUp} onKeyDown={e => handleItemKeyDown(e, item)} key={i}>
              <DropdownMenuItemLink ref={isFocused ? activeDropdownItemRef : null} href={item.link}>
                {item.text}
              </DropdownMenuItemLink>
            </li>
          );
        })}
      </Menu>
    </MenuWrapper>
  );
};
