import React, {Children, useLayoutEffect, useState, useEffect} from 'react';
import {CSSObject} from '@emotion/core';

import {BreadcrumbLink} from './Link';
import {Breadcrumb} from '../types';

export const useCollapse = <E extends HTMLElement>(listEl: React.RefObject<E>, maxWidth = 0) => {
  const [shouldCollapseList, setShouldCollapseList] = useState<boolean>(false);

  useLayoutEffect(() => {
    const listWidth = listEl.current?.clientWidth || 0;
    setShouldCollapseList(listWidth > maxWidth);
  }, [listEl, maxWidth]);

  return {shouldCollapseList};
};

const getBreadcrumbLink = (breadcrumb: React.ReactElement) => {
  return Children.toArray(breadcrumb.props.children).filter(child => {
    return child.type === BreadcrumbLink;
  })[0];
};

const buildCollapsedList = (
  list: Breadcrumb[],
  containerWidth: number,
  maxWidth: number,
  collapsedList: Breadcrumb[] = []
): Breadcrumb[] => {
  // TODO: Calculate expander width dynamically
  const EXPANDER_WIDTH = 66;
  // recurse over the breadcrumb items until the containerWidth is less than or equal to the maxWidth
  if (!list.length || containerWidth + EXPANDER_WIDTH <= maxWidth) {
    return collapsedList;
  }

  const [firstCrumb, ...restList] = list;
  const updatedCollapsedList = collapsedList.concat(firstCrumb);
  const adjustedWidth = containerWidth - firstCrumb.width;
  return buildCollapsedList(restList, adjustedWidth, maxWidth, updatedCollapsedList);
};

export const useBuildCollapsedList = <E extends HTMLElement>(
  listEl: React.RefObject<E>,
  children: React.ReactNode,
  maxWidth: number
) => {
  const [collapsedItems, setCollapsedItems] = useState<Breadcrumb[]>([]);

  useLayoutEffect(() => {
    const listItemNodes = listEl.current ? listEl.current.querySelectorAll('li') : [];
    const containerWidth = listEl.current ? listEl.current.clientWidth : 0;
    const listItems: Breadcrumb[] = [];
    Children.forEach(children, (child: React.ReactElement, index) => {
      const breadcrumbLink = getBreadcrumbLink(child);
      // We should make this match work better
      const listItemNode = listItemNodes[index];

      listItems.push({
        index: index, // TODO: use unique identifiers instead of indices
        link: breadcrumbLink ? breadcrumbLink.props.href : '',
        text: listItemNode ? listItemNode.innerText : '',
        width: listItemNode ? listItemNode.clientWidth : 0,
        onAction: breadcrumbLink ? breadcrumbLink.props.onAction : undefined,
      } as Breadcrumb);
    });

    // don't collapse the root breadcrumb
    const collapsibleListItems = listItems.slice(1);
    const collaspedList = buildCollapsedList(collapsibleListItems, containerWidth, maxWidth);
    setCollapsedItems(collaspedList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxWidth]);

  const collapsedItemIndices = collapsedItems.map(child => child.index);
  return {collapsedItems, collapsedItemIndices};
};

export const useTruncateTooltip = (
  maxWidth: number | string = 350,
  ref?: React.RefObject<HTMLSpanElement>
) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
  useEffect(() => {
    if (ref?.current) {
      setShouldShowTooltip(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [ref]);

  const truncateStyles: CSSObject = {
    display: 'inline-block',
    maxWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const openTooltip = (event: React.MouseEvent | React.FocusEvent) => {
    const {currentTarget} = event;
    // if the target is truncated, show the tooltip
    if (currentTarget.scrollWidth > currentTarget.clientWidth) {
      setIsTooltipOpen(true);
    }
  };

  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };

  const tooltipProps = {
    role: 'tooltip',
  };

  return {
    truncateStyles,
    isTooltipOpen,
    openTooltip,
    closeTooltip,
    shouldShowTooltip,
    tooltipProps,
  };
};
