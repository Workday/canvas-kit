import {createComponent} from '@workday/canvas-kit-react/common';
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
import {system} from '@workday/canvas-tokens-web';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minWidth: cssVar(system.size.sm, system.space.x8),
    gap: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.color]: cssVar(
      buttonColorPropVars.default.icon,
      cssVar(system.color.fg.default, system.color.fg.muted.soft)
    ),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(
      system.color.surface.transparent,
      system.color.bg.transparent.default
    ),

    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.transparent,
        system.color.bg.transparent.default
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        cssVar(system.color.fg.strong, system.color.fg.muted.soft)
      ),
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
        buttonColorPropVars.hover.icon,
        cssVar(system.color.fg.default, system.color.fg.muted.soft)
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
        buttonColorPropVars.active.icon,
        cssVar(system.color.fg.strong, system.color.fg.muted.stronger)
      ),
    },

    '&:disabled, &.disabled': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(system.color.surface.transparent, 'transparent'),
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        cssVar(system.color.fg.default, system.color.fg.disabled)
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        cssVar(system.color.fg.default, system.color.fg.muted.soft)
      ),
    },

    [customIconPart]: {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
