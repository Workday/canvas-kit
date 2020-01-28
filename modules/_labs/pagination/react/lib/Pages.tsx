/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import type from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas from '@workday/canvas-kit-react-core';
import _ from 'lodash';
import React from 'react';

import {PaginationAriaLabelsDefault} from './PaginationAriaLabels';

interface PagesProps {
  numPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
  mobile: boolean;
  ariaLabels: PaginationAriaLabelsDefault;
}

interface PaginationButtonProps {
  page: number;
  onPageClick: (page: number) => void;
  active?: boolean;
  ariaLabel: string;
}

const noPointerEvents = css({
  pointerEvents: 'none',
});

const noTransitions = css({
  '&:not(:hover)': {transition: 'none !important'},
});

const activeStyling = css(noPointerEvents, noTransitions, {
  color: canvas.colors.frenchVanilla100,
});

const Pages: React.FC<PagesProps> = props => {
  const {numPages, currentPage, onPageClick, mobile, ariaLabels} = props;

  let pagesToDisplay = 5;
  let start = 1;

  if (mobile) {
    start = currentPage;
    if (currentPage >= numPages - 1) {
      start = Math.max(numPages - 2, 1);
      pagesToDisplay = 3;
    } else {
      pagesToDisplay = 1;
    }
  } else {
    const midwayAndMorePages = currentPage > 2 && numPages > pagesToDisplay;
    if (midwayAndMorePages) {
      const oneOfLastThreePages = currentPage >= numPages - 3;
      if (oneOfLastThreePages) {
        start = numPages - 4;
      } else {
        start = currentPage - 2;
      }
    }
  }

  const end = Math.min(start + pagesToDisplay, numPages + 1);
  const pages = _.range(start, end);

  const less = end === numPages + 1 && numPages > pagesToDisplay && !mobile;
  const more = end < numPages;

  if (less) {
    pages.unshift(1);
  }
  if (more) {
    pages.push(numPages);
  }

  const buttons = pages.map(page => (
    <PaginationButton
      onPageClick={(page: number) => onPageClick(page)}
      page={page}
      key={page}
      active={page === currentPage}
      ariaLabel={ariaLabels.pageButtonAriaLabel(page, page === currentPage)}
    />
  ));

  const ellipse = (
    <span
      key={'ellipse'}
      aria-label={ariaLabels.navigationEllipseAriaLabel}
      tabIndex={-1}
      style={type.small}
    >
      ...
    </span>
  );

  if (less) {
    buttons.splice(1, 0, ellipse);
  }
  if (more) {
    buttons.splice(buttons.length - 1, 0, ellipse);
  }

  return <React.Fragment>{buttons}</React.Fragment>;
};

const PaginationButton: React.FC<PaginationButtonProps> = props => (
  <IconButton
    aria-label={props.ariaLabel}
    aria-pressed={undefined}
    variant={props.active ? IconButton.Variant.SquareFilled : IconButton.Variant.Square}
    size={IconButton.Size.Small}
    onClick={_ => props.onPageClick(props.page)}
    toggled={props.active}
    css={props.active ? activeStyling : noTransitions}
  >
    {props.page}
  </IconButton>
);

export default Pages;
