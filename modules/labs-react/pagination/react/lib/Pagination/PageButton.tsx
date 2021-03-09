import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-labs-react/core';
import canvas from '@workday/canvas-kit-react/core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';

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

export interface PageButtonProps extends IconButtonProps {
  model: PaginationModel;
  pageNumber: number;
}

export const PageButton = ({
  model,
  onClick,
  pageNumber,
  children,
  ...elemProps
}: PageButtonProps) => {
  const isCurrentPage = pageNumber === model.state.currentPage;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    model.events.goTo(pageNumber);
  };

  return (
    <StyledPageButton
      aria-current={isCurrentPage ? 'page' : undefined}
      aria-pressed={undefined}
      onClick={handleClick}
      size={IconButton.Size.Small}
      toggled={isCurrentPage}
      variant={IconButton.Variant.Square}
      {...elemProps}
    >
      {children || pageNumber}
    </StyledPageButton>
  );
};
