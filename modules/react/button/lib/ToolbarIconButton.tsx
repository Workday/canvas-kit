import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {BaseButton, buttonStencil} from './BaseButton';
import {TertiaryButtonProps} from './TertiaryButton';

export interface ToolbarIconButtonProps extends Omit<TertiaryButtonProps, 'size' | 'variant'> {
  onToggleChange?: (toggled: boolean | undefined) => void;
  toggled?: boolean;
  shouldMirrorIcon?: boolean;
  shouldMirrorIconInRTL?: boolean;
}

export const toolbarIconButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    minWidth: cssVar(system.size.sm, system.space.x8),
    padding: 0,
    height: cssVar(system.size.sm, system.space.x8),
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.sm, system.shape.x1),
    [systemIconStencil.vars.color]: cssVar(system.color.fg.default, system.color.fg.muted.soft),

    '&:focus-visible, &.focus': {
      [systemIconStencil.vars.color]: cssVar(system.color.fg.strong, system.color.fg.muted.soft),
      [buttonStencil.vars.boxShadowInner]: cssVar(
        system.color.focus.inverse,
        cssVar(system.color.border.inverse.default, base.neutral0)
      ),
      [buttonStencil.vars.boxShadowOuter]: cssVar(
        system.color.brand.focus.primary,
        brand.common.focusOutline
      ),
    },

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.default,
        system.color.surface.overlay.mixin,
        system.opacity.surface.hover
      ),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.strong,
        system.color.fg.muted.stronger
      ),
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.stronger,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },

    "&[aria-pressed='true']": {
      [systemIconStencil.vars.color]: cssVar(
        system.color.brand.fg.primary.default,
        brand.primary.base
      ),
      [buttonStencil.vars.background]: cssVar(
        system.color.brand.surface.primary.default,
        brand.primary.lightest
      ),

      '&:focus-visible, &.focus': {
        [systemIconStencil.vars.color]: cssVar(
          system.color.brand.fg.primary.strong,
          brand.primary.dark
        ),
      },

      '&:hover, &.hover': {
        [buttonStencil.vars.background]: colorSpace.darken(
          system.color.brand.surface.primary.default,
          system.color.bg.alt.default,
          system.color.surface.overlay.mixin,
          system.opacity.surface.hover
        ),
        [systemIconStencil.vars.color]: cssVar(
          system.color.brand.fg.primary.strong,
          brand.primary.dark
        ),
      },

      '&:active, &.active': {
        [buttonStencil.vars.background]: colorSpace.darken(
          system.color.brand.surface.primary.default,
          system.color.bg.alt.stronger,
          system.color.surface.overlay.mixin,
          system.opacity.surface.pressed
        ),
        [systemIconStencil.vars.color]: cssVar(
          system.color.brand.fg.primary.strong,
          brand.primary.dark
        ),
      },
    },
  },
});

export const ToolbarIconButton = createComponent('button')({
  displayName: 'ToolbarIconButton',
  Component: (
    {
      onToggleChange,
      icon,
      shouldMirrorIcon = false,
      shouldMirrorIconInRTL = false,
      toggled,
      children,
      ...elemProps
    }: ToolbarIconButtonProps,
    ref,
    Element
  ) => {
    const isInitialMount = React.useRef(true);

    // Only call onToggleChange on update - not on first mount
    React.useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else if (toggled && typeof onToggleChange === 'function') {
        onToggleChange(toggled);
      }
    }, [toggled, onToggleChange]);

    return (
      <BaseButton
        ref={ref}
        as={Element}
        size="small"
        fillIcon={toggled}
        aria-pressed={toggled}
        {...handleCsProp(elemProps, toolbarIconButtonStencil())}
      >
        {icon ? (
          <BaseButton.Icon
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            shouldMirrorIconInRTL={shouldMirrorIconInRTL}
          />
        ) : (
          children
        )}
      </BaseButton>
    );
  },
});
