import * as React from 'react';

import {brand, system} from '@workday/canvas-tokens-web';
import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {PaginationContext} from './usePaginationModel';

export const paginationPageButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    minWidth: system.space.x8,
    padding: system.space.zero,
    fontWeight: system.fontWeight.normal,
    [buttonStencil.vars.label]: system.color.fg.default,

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.soft,
      [buttonStencil.vars.label]: system.color.fg.strong,
    },

    '&:active, &.active, &:focus-visible, &.focus': {
      [buttonStencil.vars.label]: system.color.fg.strong,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.fg.disabled,
    },
  },
  modifiers: {
    toggled: {
      true: {
        fontWeight: system.fontWeight.bold,
        [buttonStencil.vars.background]: brand.primary.base,
        [buttonStencil.vars.label]: system.color.fg.inverse,

        '&:hover, &.hover, &:active, &.active, &:focus-visible, &.focus': {
          [buttonStencil.vars.background]: brand.primary.base,
          [buttonStencil.vars.label]: system.color.fg.inverse,
        },

        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: system.color.fg.disabled,
        },
      },
    },
  },
});

export interface PageButtonProps {
  pageNumber: number;
  children?: React.ReactNode;
}

export const PageButton = createComponent('button')({
  displayName: 'Pagination.PageButton',
  Component({pageNumber, children, ...elemProps}: PageButtonProps) {
    const model = React.useContext(PaginationContext);
    const isCurrentPage = pageNumber === model.state.currentPage;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      (elemProps as any).onClick?.(e);
      model.events.goTo(pageNumber);
    };

    return (
      <BaseButton
        aria-current={isCurrentPage ? 'page' : undefined}
        aria-pressed={undefined}
        size="small"
        onClick={handleClick}
        {...handleCsProp(elemProps, paginationPageButtonStencil({toggled: isCurrentPage}))}
      >
        {children || pageNumber}
      </BaseButton>
    );
  },
});
