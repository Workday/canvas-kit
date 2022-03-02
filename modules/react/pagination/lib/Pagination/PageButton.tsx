import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import canvas, {colors, type} from '@workday/canvas-kit-react/tokens';
// import {TertiaryButtonNewProps} from '@workday/canvas-kit-react/button';
import {Button} from '../../../button/lib/Button';

import {PaginationModel} from './types';

const toggledStyles = {
  color: canvas.colors.frenchVanilla100,
  fontWeight: 700,
  pointerEvents: 'none',
};

const StyledPageButton = styled(Button)<{toggled?: boolean}>(
  {
    ...type.levels.subtext.large,
  },
  ({toggled}) => {
    return toggled ? toggledStyles : {};
  }
);

const getPaginationButtonColors = (toggled: boolean) => {
  return {
    default: {
      background: toggled ? colors.blueberry400 : 'transparent',
      icon: colors.frenchVanilla100,
      label: toggled ? colors.frenchVanilla400 : colors.blackPepper400,
    },
    hover: {
      background: toggled ? colors.blueberry400 : colors.soap400,
    },
    active: {
      background: toggled ? colors.blueberry400 : 'transparent',
    },
    focus: {
      background: toggled ? colors.blueberry400 : 'transparent',
    },
    disabled: {
      background: 'grey',
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
      size="small"
      {...elemProps}
    >
      {children || pageNumber}
    </StyledPageButton>
  );
};
