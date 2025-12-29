import * as React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {
  chevron2xLeftSmallIcon,
  chevron2xRightSmallIcon,
  chevronLeftSmallIcon,
  chevronRightSmallIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {PaginationContext} from './usePaginationModel';

export interface ControlButtonProps extends ExtractProps<typeof TertiaryButton, never> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PaginationControlsProps {}

export const paginationControlsStencil = createStencil({
  base: {
    display: 'flex',
    gap: system.space.x1,
    alignItems: 'center',
  },
});

const controlButtonStencil = createStencil({
  base: {
    '&:dir(rtl)': {
      '& .wd-icon': {
        transform: 'scaleX(-1)',
      },
    },
  },
});

export const PaginationControls = createComponent('div')({
  displayName: 'Pagination.Controls',
  Component(elemProps: PaginationControlsProps, ref, Element) {
    return <Element ref={ref} {...mergeStyles(elemProps, paginationControlsStencil())} />;
  },
});

export const JumpToFirstButton = createComponent('button')({
  displayName: 'Pagination.JumpToFirstButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage <= model.state.firstPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.firstPage);
    };

    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevron2xLeftSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, controlButtonStencil())}
      />
    );
  },
});

export const StepToPreviousButton = createComponent('button')({
  displayName: 'Pagination.StepToPreviousButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage <= model.state.firstPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.currentPage - 1);
    };

    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevronLeftSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, controlButtonStencil())}
      />
    );
  },
});

export const StepToNextButton = createComponent('button')({
  displayName: 'Pagination.StepToNextButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage >= model.state.lastPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.currentPage + 1);
    };

    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevronRightSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, controlButtonStencil())}
      />
    );
  },
});

export const JumpToLastButton = createComponent('button')({
  displayName: 'Paganation.JumpToLastButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage >= model.state.lastPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.lastPage);
    };

    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevron2xRightSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, controlButtonStencil())}
      />
    );
  },
});
