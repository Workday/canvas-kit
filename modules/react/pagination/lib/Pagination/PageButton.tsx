import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';

import {PaginationModel} from './types';

const StyledPageButton = styled(BaseButton)<{toggled?: boolean}>(
  {
    minWidth: space.l,
    width: space.l,
    borderRadius: borderRadius.circle,
    height: space.l,
  },
  ({toggled}) => {
    return {
      fontWeight: toggled ? 700 : 'normal',
    };
  }
);

const getPaginationButtonColors = (toggled: boolean) => {
  return {
    default: {
      background: toggled ? colors.blueberry400 : 'transparent',
      label: toggled ? colors.frenchVanilla100 : colors.blackPepper400,
    },
    hover: {
      background: toggled ? colors.blueberry400 : colors.soap300,
      label: toggled ? colors.frenchVanilla100 : colors.blackPepper400,
    },
    active: {
      background: toggled ? colors.blueberry400 : 'transparent',
      label: toggled ? colors.frenchVanilla100 : colors.blackPepper400,
    },
    focus: {
      background: toggled ? colors.blueberry400 : 'transparent',
      label: toggled ? colors.frenchVanilla100 : colors.blackPepper400,
    },
    disabled: {
      background: colors.licorice100,
    },
  };
};

export type PageButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
      colors={getPaginationButtonColors(isCurrentPage)}
      aria-pressed={undefined}
      onClick={handleClick}
      toggled={isCurrentPage}
      {...elemProps}
    >
      {children || pageNumber}
    </StyledPageButton>
  );
};
