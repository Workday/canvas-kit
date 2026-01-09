import {createComponent, focusRing, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {brand, system} from '@workday/canvas-tokens-web';

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
    padding: forwardFitTokens.system.padding.none,
    minWidth: forwardFitTokens.system.size.md,
    gap: forwardFitTokens.system.gap.none,
    [buttonStencil.vars.borderRadius]: forwardFitTokens.system.shape.xs,
    [systemIconStencil.vars.color]: system.color.fg.muted.soft,

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        system.color.fg.muted.soft
      ),
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.border.transparent,
        outerColor: brand.common.focusOutline,
      }),
    },

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.surface.alt.strong,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.hover.icon,
        system.color.fg.muted.stronger
      ),
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.surface.alt.strong,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        system.color.fg.muted.stronger
      ),
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.disabled
      ),
    },

    [customIconPart]: {
      marginInlineStart: forwardFitTokens.system.gap.xs,
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
