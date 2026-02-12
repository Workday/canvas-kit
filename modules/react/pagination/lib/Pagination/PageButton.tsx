import * as React from 'react';

import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {PaginationContext} from './usePaginationModel';

export const paginationPageButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minWidth: cssVar(system.size.sm, system.space.x8),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.sm, system.space.x8),
    padding: 0,
    fontWeight: system.fontWeight.normal,
    [buttonStencil.vars.label]: system.color.fg.default,

    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.alt.default,
        system.color.bg.alt.soft
      ),
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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [buttonStencil.vars.background]: cssVar(
          system.color.brand.accent.primary,
          brand.primary.base
        ),
        [buttonStencil.vars.label]: system.color.fg.inverse,

        '&:hover, &.hover, &:active, &.active, &:focus-visible, &.focus': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: cssVar(
            system.color.brand.accent.primary,
            brand.primary.base
          ),
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
