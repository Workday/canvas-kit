import * as React from 'react';
import {styled} from '@workday/canvas-kit-react-common';
import type from '@workday/canvas-kit-labs-react-core';
import canvas from '@workday/canvas-kit-react-core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';

import {PaginationModel} from './types';

const toggledStlyes = {
  color: canvas.colors.frenchVanilla100,
  fontWeight: 700,
  pointerEvents: 'none',
};

const StyledPageButton = styled(IconButton)<{toggled?: boolean}>(
  {
    ...type.small,
  },
  ({toggled}) => {
    return toggled ? toggledStlyes : {};
  }
);

export interface PageButtonProps extends PaginationModel, IconButtonProps {
  pageNumber: number;
}

export const PageButton = ({
  'aria-label': ariaLabel,
  state,
  events,
  pageNumber,
  children,
  ...elemProps
}: PageButtonProps) => {
  const isCurrentPage = pageNumber === state.currentPage;
  return (
    <StyledPageButton
      aria-current={isCurrentPage ? 'page' : undefined}
      aria-label={ariaLabel}
      aria-pressed={undefined}
      onClick={_ => events.goToPage(pageNumber)}
      size={IconButton.Size.Small}
      toggled={isCurrentPage}
      variant={IconButton.Variant.Square}
      {...elemProps}
    >
      {children || pageNumber}
    </StyledPageButton>
  );
};
