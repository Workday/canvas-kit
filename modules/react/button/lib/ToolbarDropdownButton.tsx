import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {
  calc,
  colorSpace,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {BaseButton, buttonColorPropVars, buttonStencil} from './BaseButton';
import {ToolbarIconButtonProps} from './ToolbarIconButton';

export interface ToolbarDropdownButtonProps
  extends Omit<ToolbarIconButtonProps, 'toggled' | 'onToggleChange'> {}

export const toolbarDropdownButtonStencil = createStencil({
  extends: buttonStencil,
  parts: {
    chevron: 'toolbar-dropdown-btn-arrow',
    customIcon: 'toolbar-dropdown-btn-custom-icon',
  },
  base: ({chevronPart, customIconPart}) => ({
    padding: 0,
    minWidth: cssVar(system.size.sm, system.space.x8),
    gap: 0,
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.sm, system.shape.x1),
    [systemIconStencil.vars.color]: cssVar(
      system.color.fg.default,
      cssVar(buttonColorPropVars.default.icon, system.color.fg.muted.soft)
    ),

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.transparent,
        system.color.bg.transparent.default
      ),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.default,
        cssVar(buttonColorPropVars.focus.icon, system.color.fg.muted.soft)
      ),
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
        cssVar(buttonColorPropVars.hover.icon, 'currentColor')
      ),
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.stronger,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.strong,
        cssVar(buttonColorPropVars.active.icon, system.color.fg.muted.stronger)
      ),
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },

    [customIconPart]: {
      marginInlineStart: cssVar(system.padding.xxs, system.space.x1),
      marginInlineEnd: calc.negate(px2rem(2)),
    },

    [chevronPart]: {
      margin: 0,
      marginInlineEnd: px2rem(2),
    },
  }),
  modifiers: {
    shouldMirrorIcon: {
      true: ({customIconPart}) => ({
        [customIconPart]: {
          marginInlineEnd: 0,
          marginInlineStart: px2rem(2),
        },
      }),
    },
    shouldMirrorIconInRTL: {
      true: ({customIconPart}) => ({
        [`&:dir(rtl) ${customIconPart}`]: {
          marginInlineEnd: 0,
          marginInlineStart: px2rem(2),
        },
      }),
    },
  },
});

export const ToolbarDropdownButton = createComponent('button')({
  displayName: 'ToolbarDropdownButton',
  Component: (
    {
      icon,
      shouldMirrorIcon = false,
      shouldMirrorIconInRTL = false,
      children,
      ...elemProps
    }: ToolbarDropdownButtonProps,
    ref,
    Element
  ) => {
    return (
      <BaseButton
        ref={ref}
        as={Element}
        size="small"
        {...handleCsProp(
          elemProps,
          toolbarDropdownButtonStencil({shouldMirrorIcon, shouldMirrorIconInRTL})
        )}
      >
        {icon ? (
          <BaseButton.Icon
            className="wdc-toolbar-dropdown-btn-custom-icon"
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            shouldMirrorIconInRTL={shouldMirrorIconInRTL}
            {...toolbarDropdownButtonStencil.parts.customIcon}
          />
        ) : (
          children
        )}
        <BaseButton.Icon
          className="wdc-toolbar-dropdown-btn-arrow"
          icon={chevronDownSmallIcon}
          shouldMirrorIcon={shouldMirrorIcon}
          shouldMirrorIconInRTL={shouldMirrorIconInRTL}
          {...toolbarDropdownButtonStencil.parts.chevron}
        />
      </BaseButton>
    );
  },
});
