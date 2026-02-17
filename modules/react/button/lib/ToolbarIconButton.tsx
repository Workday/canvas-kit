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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minWidth: cssVar(system.size.sm, system.space.x8),
    padding: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.sm, system.space.x8),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.color]: cssVar(system.color.fg.default, system.color.fg.muted.soft),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(
      system.color.surface.transparent,
      system.color.bg.transparent.default
    ),

    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(system.color.fg.strong, system.color.fg.muted.soft),
    },

    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.default,
        system.color.surface.overlay.mixin,
        system.opacity.surface.hover
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.strong,
        system.color.fg.muted.stronger
      ),
    },

    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.stronger,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.strong,
        system.color.fg.muted.stronger
      ),
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: cssVar(system.color.surface.transparent, 'transparent'),
      [systemIconStencil.vars.color]: cssVar(system.color.fg.default, system.color.fg.disabled),
    },

    "&[aria-pressed='true']": {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        system.color.brand.fg.primary.default,
        brand.primary.base
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(
        system.color.brand.surface.primary.default,
        brand.primary.lightest
      ),

      '&:focus-visible, &.focus': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [systemIconStencil.vars.color]: cssVar(
          system.color.brand.fg.primary.strong,
          brand.primary.dark
        ),
      },

      '&:hover, &.hover': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [buttonStencil.vars.background]: colorSpace.darken(
          system.color.brand.surface.primary.default,
          system.color.bg.alt.default,
          system.color.surface.overlay.mixin,
          system.opacity.surface.hover
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [systemIconStencil.vars.color]: cssVar(
          system.color.brand.fg.primary.strong,
          brand.primary.dark
        ),
      },

      '&:active, &.active': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [buttonStencil.vars.background]: colorSpace.darken(
          system.color.brand.surface.primary.default,
          system.color.bg.alt.stronger,
          system.color.surface.overlay.mixin,
          system.opacity.surface.pressed
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
