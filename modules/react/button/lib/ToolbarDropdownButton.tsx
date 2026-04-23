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
    minWidth: system.size.sm,
    gap: 0,
    [buttonStencil.vars.borderRadius]: system.shape.sm,
    [systemIconStencil.vars.color]: cssVar(
      buttonColorPropVars.default.icon,
      system.color.fg.default
    ),
    [buttonStencil.vars.background]: system.color.surface.transparent,

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.surface.transparent,

      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        system.color.fg.strong
      ),
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.focus.inverse,

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
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.hover.icon,
        system.color.fg.default
      ),
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: system.color.bg.alt.stronger,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.pressed,
      }),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        system.color.fg.strong
      ),
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.surface.transparent,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.default
      ),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.default
      ),
    },

    [customIconPart]: {
      marginInlineStart: system.padding.xxs,
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
