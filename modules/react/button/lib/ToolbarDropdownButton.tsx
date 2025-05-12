import {focusRing, Themeable, createComponent} from '@workday/canvas-kit-react/common';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {BaseButton, buttonStencil} from './BaseButton';
import {ToolbarIconButtonProps} from './ToolbarIconButton';
import {systemIconStencil} from '../../icon';

export interface ToolbarDropdownButtonProps
  extends Omit<ToolbarIconButtonProps, 'toggled' | 'onToggleChange'>,
    Themeable {}

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
    [systemIconStencil.vars.color]: system.color.icon.default,

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.transparent,
      [systemIconStencil.vars.color]: system.color.icon.default,
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.bg.transparent,
        outerColor: brand.common.focusOutline,
      }),
    },

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [systemIconStencil.vars.color]: system.color.icon.strong,
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.stronger,
      [systemIconStencil.vars.color]: system.color.icon.strong,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent,
      [systemIconStencil.vars.color]: base.soap600,
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
  },
});

export const ToolbarDropdownButton = createComponent('button')({
  displayName: 'ToolbarDropdownButton',
  Component: (
    {icon, shouldMirrorIcon = false, children, ...elemProps}: ToolbarDropdownButtonProps,
    ref,
    Element
  ) => {
    return (
      <BaseButton
        ref={ref}
        as={Element}
        size="small"
        {...handleCsProp(elemProps, toolbarDropdownButtonStencil({shouldMirrorIcon}))}
      >
        {icon ? (
          <BaseButton.Icon
            className="wdc-toolbar-dropdown-btn-custom-icon"
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            {...toolbarDropdownButtonStencil.parts.customIcon}
          />
        ) : (
          children
        )}
        <BaseButton.Icon
          className="wdc-toolbar-dropdown-btn-arrow"
          icon={chevronDownSmallIcon}
          shouldMirrorIcon={shouldMirrorIcon}
          {...toolbarDropdownButtonStencil.parts.chevron}
        />
      </BaseButton>
    );
  },
});
