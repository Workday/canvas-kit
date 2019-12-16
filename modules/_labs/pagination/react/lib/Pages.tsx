import {css, jsx} from '@emotion/core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas from '@workday/canvas-kit-react-core';
import _ from 'lodash';
import React, {useRef} from 'react';

import {PaginationAriaLabelsDefault} from './PaginationAriaLabels';

/** @jsx jsx */
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

const activeStyling = css(noPointerEvents, {
  color: canvas.colors.frenchVanilla100,
});

const Ellipse = ({ariaLabel}: {ariaLabel: string}) => (
  <IconButton
    key={'ellipse'}
    aria-label={ariaLabel}
    variant={IconButton.Variant.Square}
    size={IconButton.Size.Small}
    tabIndex={-1}
    css={noPointerEvents}
  >
    ...
  </IconButton>
);

const Pages: React.FC<PagesProps> = props => {
  const {numPages, currentPage, onPageClick, mobile, ariaLabels} = props;
  const lastPage = useRef<number>(0);

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
  const onClick = (page: number) => {
    lastPage.current = currentPage;
    onPageClick(page);
  };
  const buttons = pages.map(page => (
    <PaginationButton
      onPageClick={onClick}
      page={page}
      key={page}
      active={page === currentPage}
      ariaLabel={ariaLabels.pageButtonAriaLabel(page, page === currentPage)}
    />
  ));

  const ellipseAriaLabel = ariaLabels.navigationEllipseAriaLabel;
  if (less) {
    buttons.splice(1, 0, <Ellipse ariaLabel={ellipseAriaLabel} />);
  }
  if (more) {
    buttons.splice(buttons.length - 1, 0, <Ellipse ariaLabel={ellipseAriaLabel} />);
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
    css={props.active ? activeStyling : ''}
  >
    {props.page}
  </IconButton>
);

export default Pages;
