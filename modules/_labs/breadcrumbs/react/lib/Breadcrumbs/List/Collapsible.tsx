import React, {Children, useRef} from 'react';
// local components
import {DropdownProvider} from '../Dropdown/Provider';
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
  expanderAriaLabel: string;
  maxWidth: number;
}

export const CollapsibleList = ({
  children,
  buttonIcon,
  expanderAriaLabel,
  maxWidth,
  ...props
}: CollapsibleListProps) => {
  // refs
  const listRef = useRef<HTMLUListElement>(null);
  // behaviors
  const {shouldCollapseList} = useCollapse(listRef, maxWidth);
  const {collapsedItems, collapsedItemIndices} = useBuildCollapsedList(listRef, children, maxWidth);

  const {rootItem, collapsibleItems, currentItem} = parseListItems(children);
  return (
    <BreadcrumbsList ref={listRef} {...props}>
      {rootItem}
      {shouldCollapseList && (
        <BreadcrumbsListItem>
          <DropdownProvider items={collapsedItems}>
            <Dropdown buttonAriaLabel={expanderAriaLabel} buttonIcon={buttonIcon} />
          </DropdownProvider>
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
