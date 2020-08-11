import React, {Children, useRef} from 'react';
// local components
import {BreadcrumbsContext} from '../Provider';
import {DropdownContext} from '../Dropdown/Provider';
import {Dropdown} from '../Dropdown';
import {BreadcrumbsListItem} from './ListItem';
import {BreadcrumbsList} from './index';
// hooks
import {useBuildDropdown, useDropdown} from './hooks';

const parseListItems = (children: React.ReactNode) => {
  const childArray = Children.toArray(children);
  const {0: rootItem, length, [length - 1]: currentItem} = childArray;
  const collapsibleItems = childArray.slice(1, -1);
  return {rootItem, collapsibleItems, currentItem};
};

export interface CollapsibleListProps extends React.HTMLAttributes<HTMLUListElement> {
  expanderAriaLabel: string;
}

export const CollapsibleList = ({children, expanderAriaLabel, ...props}: CollapsibleListProps) => {
  // context
  const dropdownContext = React.useContext(DropdownContext);
  const listContext = React.useContext(BreadcrumbsContext);
  // refs
  const listRef = useRef<HTMLUListElement>(null);
  // behaviors
  const {shouldShowDropdown} = useDropdown(listRef, listContext.maxWidth);
  const {dropdownItems, dropdownItemIndices} = useBuildDropdown(
    listRef,
    children,
    listContext.maxWidth
  );

  dropdownContext.setDropdownItems(dropdownItems);

  const {rootItem, collapsibleItems, currentItem} = parseListItems(children);
  return (
    <BreadcrumbsList ref={listRef} {...props}>
      {rootItem}
      {shouldShowDropdown && (
        <BreadcrumbsListItem>
          <Dropdown aria-label={expanderAriaLabel} />
        </BreadcrumbsListItem>
      )}
      {collapsibleItems.map((item, i) => {
        if (dropdownItemIndices.indexOf(i + 1) !== -1) {
          return;
        }
        return item;
      })}
      {currentItem}
    </BreadcrumbsList>
  );
};
