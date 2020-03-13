/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';
import range from 'lodash/range';
import React from 'react';

import type from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas from '@workday/canvas-kit-react-core';

interface PagesProps {
  total: number;
  current: number;
  onPageClick: (page: number) => void;
  isMobile: boolean;
  pageButtonAriaLabel: (page: number, selected: boolean) => string;
}

const ellipsisStyle = css({
  pointerEvents: 'none',
  width: canvas.spacing.l,
  textAlign: 'center',
  display: 'inline-block',
});

const PageButton = styled(IconButton)<{current: boolean}>(
  {
    width: 'auto',
    ...type.small,
  },
  ({current}) => ({
    color: current ? canvas.colors.frenchVanilla100 : undefined,
    pointerEvents: current ? 'none' : undefined,
    '&:not(:hover)': {transition: current ? 'none !important' : undefined},
  })
);

/**
 * Given some information about the page, return a tuple of left and right number
 * arrays. The left array will be numbers before a split and the right array will
 * be numbers after the split. An empty right array means there is no split.
 * @param total Total pages
 * @param current current page
 * @param isMobile mobile mode
 */
export function getPages(total: number, current: number, isMobile: boolean): [number[], number[]] {
  const max = isMobile ? 3 : 7; // max pages to be shown at once
  const maxWithSplit = isMobile ? 2 : 6; // max amount of pages shown if pages are split
  const padNumber = isMobile ? 0 : 2; // padding pages around active page
  const showEndThreshold = isMobile ? 1 : 4; // how many pages to last page where first page is show again and last pages are visible

  // show all pages on left side
  if (total <= max) {
    return [range(1, total + 1), []];
  }

  // Mobile shows last pages without first page, unlike desktop
  if (isMobile && current >= total - showEndThreshold) {
    return [range(total - max + 1, total + 1), []];
  }

  // show padding pages around current page on left and last page on right
  if (current <= total - showEndThreshold) {
    const minPage = Math.max(1, current - padNumber);
    const maxPage = Math.max(maxWithSplit, current + padNumber + 1);
    return [range(minPage, maxPage), [total]];
  }

  // show first page on left and last pages on the right
  return [[1], range(total - maxWithSplit + padNumber, total + 1)];
}

const Pages = ({total, current, onPageClick, isMobile, pageButtonAriaLabel}: PagesProps) => {
  const pageToButton = (page: number) => (
    <PageButton
      key={page}
      aria-label={pageButtonAriaLabel(page, page === current)}
      aria-pressed={undefined}
      variant={page === current ? IconButton.Variant.SquareFilled : IconButton.Variant.Square}
      size={IconButton.Size.Small}
      onClick={_ => onPageClick(page)}
      toggled={page === current}
      current={page === current}
    >
      {page}
    </PageButton>
  );

  const [left, right] = getPages(total, current, isMobile);

  const ellipsis =
    right.length === 0
      ? []
      : [
          <span css={ellipsisStyle} key={'ellipsis'} style={type.small}>
            ...
          </span>,
        ];

  const buttons = [...left.map(pageToButton), ...ellipsis, ...right.map(pageToButton)];

  return <React.Fragment>{buttons}</React.Fragment>;
};

export default Pages;
