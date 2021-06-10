import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import canvas, {type} from '@workday/canvas-kit-react/tokens';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';

import {PaginationModel} from './types';

const toggledStyles = {
  color: canvas.colors.frenchVanilla100,
  fontWeight: 700,
  pointerEvents: 'none',
};

const StyledPageButton = styled(IconButton)<{toggled?: boolean}>(
  {
    ...type.levels.subtext.large,
  },
  ({toggled}) => {
    return toggled ? toggledStyles : {};
  }
);

export type PageButtonProps = IconButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    model: PaginationModel;
    pageNumber: number;
  };

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
      size="small"
      toggled={isCurrentPage}
      variant="square"
      {...elemProps}
    >
      {children || pageNumber}
    </StyledPageButton>
  );
};
