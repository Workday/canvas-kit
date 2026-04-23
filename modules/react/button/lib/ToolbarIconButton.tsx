import * as React from 'react';

import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    minWidth: system.size.sm,
    padding: 0,
    height: system.size.sm,
    [buttonStencil.vars.borderRadius]: system.shape.sm,
    [systemIconStencil.vars.color]: system.color.fg.default,
    [buttonStencil.vars.background]: system.color.surface.transparent,

    '&:focus-visible, &.focus': {
      [systemIconStencil.vars.color]: system.color.fg.strong,
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.border.transparent,
        outerColor: system.color.brand.focus.primary,
      }),
    },

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: system.color.bg.alt.default,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.hover,
      }),
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: system.color.bg.alt.stronger,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.pressed,
      }),
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.color.surface.transparent,
      [systemIconStencil.vars.color]: system.color.fg.default,
    },

    "&[aria-pressed='true']": {
      [systemIconStencil.vars.color]: system.color.brand.fg.primary.default,

      [buttonStencil.vars.background]: system.color.brand.surface.primary.default,

      '&:focus-visible, &.focus': {
        [systemIconStencil.vars.color]: system.color.brand.fg.primary.strong,
      },

      '&:hover, &.hover': {
        [buttonStencil.vars.background]: colorSpace.darken({
          color: system.color.brand.surface.primary.default,
          fallback: system.color.bg.alt.default,
          mixinColor: system.color.surface.overlay.mixin,
          mixinValue: system.opacity.surface.hover,
        }),
        [systemIconStencil.vars.color]: system.color.brand.fg.primary.strong,
      },

      '&:active, &.active': {
        [buttonStencil.vars.background]: colorSpace.darken({
          color: system.color.brand.surface.primary.default,
          fallback: system.color.bg.alt.stronger,
          mixinColor: system.color.surface.overlay.mixin,
          mixinValue: system.opacity.surface.pressed,
        }),
        [systemIconStencil.vars.color]: system.color.brand.fg.primary.strong,
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
