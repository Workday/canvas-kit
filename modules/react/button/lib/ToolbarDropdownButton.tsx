import {focusRing, Themeable, createComponent} from '@workday/canvas-kit-react/common';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {BaseButton, buttonColorPropVars} from './BaseButton';
import {ToolbarIconButtonProps} from './ToolbarIconButton';

export interface ToolbarDropdownButtonProps
  extends Omit<ToolbarIconButtonProps, 'toggled' | 'onToggleChange'>,
    Themeable {}

export const toolbarDropdownButtonStencil = createStencil({
  parts: {
    chevron: 'toolbar-dropdown-btn-arrow',
    customIcon: 'toolbar-dropdown-btn-custom-icon',
  },
  base: ({chevronPart, customIconPart}) => ({
    padding: system.space.zero,
    minWidth: system.space.x8,
    borderRadius: system.shape.x1,
    gap: system.space.zero,
    [buttonColorPropVars.default.icon]: system.color.icon.default,
    [buttonColorPropVars.hover.icon]: system.color.icon.strong,
    [buttonColorPropVars.hover.background]: system.color.bg.alt.default,
    [buttonColorPropVars.active.icon]: system.color.icon.strong,
    [buttonColorPropVars.active.background]: system.color.bg.alt.stronger,
    [buttonColorPropVars.focus.icon]: system.color.icon.default,
    [buttonColorPropVars.focus.background]: system.color.bg.transparent,
    [buttonColorPropVars.disabled.icon]: base.soap600,
    [buttonColorPropVars.disabled.background]: system.color.bg.transparent,
    [buttonColorPropVars.disabled.opacity]: system.opacity.full,

    [customIconPart]: {
      marginLeft: system.space.x1,
      marginRight: calc.negate(px2rem(2)),
    },
    [chevronPart]: {
      margin: 0,
      marginRight: px2rem(2),
    },
    '&:focus-visible, &.focus': {
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.bg.transparent,
        outerColor: brand.common.focusOutline,
      }),
    },
  }),
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
        {...handleCsProp(elemProps, toolbarDropdownButtonStencil())}
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
