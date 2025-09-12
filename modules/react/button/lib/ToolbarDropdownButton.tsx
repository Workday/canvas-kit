import {brand, system} from '@workday/canvas-tokens-web';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {focusRing, createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

import {BaseButton, buttonStencil} from './BaseButton';
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
    padding: system.space.zero,
    minWidth: system.space.x8,
    gap: system.space.zero,
    [buttonStencil.vars.borderRadius]: system.shape.x1,
    [systemIconStencil.vars.color]: system.color.fg.muted.soft,

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [systemIconStencil.vars.color]: system.color.fg.muted.soft,
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.border.transparent,
        outerColor: brand.common.focusOutline,
      }),
    },

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [systemIconStencil.vars.color]: system.color.fg.muted.stronger,
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.stronger,
      [systemIconStencil.vars.color]: system.color.fg.muted.stronger,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
    },

    [customIconPart]: {
      marginInlineStart: system.space.x1,
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
