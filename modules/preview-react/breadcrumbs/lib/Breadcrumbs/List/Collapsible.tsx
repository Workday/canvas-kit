import React, {Children, useRef} from 'react';
// local components
import {Dropdown} from '../Dropdown';
import {BreadcrumbsListItem} from './ListItem';
import {BreadcrumbsList} from './index';
// hooks
import {useBuildCollapsedList, useCollapse} from './hooks';
import {DropdownButtonProps} from '../Dropdown/Button';

const parseListItems = (children: React.ReactNode) => {
  const childArray = Children.toArray(children);
  const {0: rootItem, length, [length - 1]: currentItem} = childArray;
  const collapsibleItems = childArray.slice(1, -1);
  return {rootItem, collapsibleItems, currentItem};
};

export interface CollapsibleListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    Pick<DropdownButtonProps, 'buttonIcon'> {
  /**
   * The accessibility label for the dropdown menu button.
   *
   * Suggested value: "more links"
   */
  buttonAriaLabel: string;
  /**
   * The max-width before the list should collapse and render a dropdown menu
   */
  maxWidth: number;
}

export const CollapsibleList = ({
  children,
  buttonIcon,
  buttonAriaLabel,
  maxWidth,
  ...props
}: CollapsibleListProps) => {
  // refs
  const listRef = useRef<HTMLUListElement>(null);
  // behaviors
  const {shouldCollapseList} = useCollapse(listRef, maxWidth);
  const {collapsedItems, collapsedItemIndices} = useBuildCollapsedList(listRef, children, maxWidth);
  const {rootItem, collapsibleItems, currentItem} = parseListItems(children);
  console.log(collapsedItems, collapsedItemIndices);
  return (
    <BreadcrumbsList ref={listRef} {...props}>
      {rootItem}
      {shouldCollapseList && (
        <BreadcrumbsListItem>
          <Dropdown
            buttonAriaLabel={buttonAriaLabel}
            buttonIcon={buttonIcon}
            items={collapsedItems}
          />
        </BreadcrumbsListItem>
      )}
      {collapsibleItems.map((item, i) => {
        if (collapsedItemIndices.indexOf(i + 1) !== -1) {
          return;
        }
        return item;
      })}
      {currentItem}
    </BreadcrumbsList>
  );
};
