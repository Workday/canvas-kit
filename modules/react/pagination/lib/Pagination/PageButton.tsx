import * as React from 'react';

import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {PaginationContext} from './usePaginationModel';

export const paginationPageButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    minWidth: system.legacy.size.sm,
    height: system.legacy.size.sm,
    padding: 0,
    fontWeight: system.fontWeight.normal,
    [buttonStencil.vars.label]: system.color.fg.default,

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.legacy.color.surface.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.boxShadowInner]: system.legacy.color.focus.inverse,
      [buttonStencil.vars.boxShadowOuter]: system.legacy.color.brand.focus.primary,
    },

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.legacy.color.surface.overlay.hover.default,
      [buttonStencil.vars.label]: system.color.fg.stronger,
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: system.legacy.color.surface.overlay.pressed.default,
      [buttonStencil.vars.label]: system.color.fg.stronger,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.fg.disabled,
    },
  },
  modifiers: {
    toggled: {
      true: {
        fontWeight: system.fontWeight.bold,
        [buttonStencil.vars.background]: system.legacy.color.brand.accent.primary,

        [buttonStencil.vars.label]: system.color.fg.inverse,

        '&:hover, &.hover, &:active, &.active, &:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.legacy.color.brand.accent.primary,

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
