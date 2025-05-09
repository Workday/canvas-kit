import * as React from 'react';
import {focusRing, Themeable, createComponent} from '@workday/canvas-kit-react/common';
import {BaseButton, buttonColorPropVars} from './BaseButton';
import {TertiaryButtonProps} from './TertiaryButton';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';

export interface ToolbarIconButtonProps
  extends Omit<TertiaryButtonProps, 'size' | 'variant'>,
    Themeable {
  onToggleChange?: (toggled: boolean | undefined) => void;
  toggled?: boolean;
  shouldMirrorIcon?: boolean;
}

export const toolbarIconButtonStencil = createStencil({
  base: {
    minWidth: system.space.x8,
    padding: system.space.zero,
    height: system.space.x8,
    borderRadius: system.shape.x1,

    [buttonColorPropVars.default.icon]: system.color.icon.default,
    [buttonColorPropVars.default.background]: system.color.bg.transparent,
    [buttonColorPropVars.hover.icon]: system.color.icon.strong,
    [buttonColorPropVars.hover.background]: system.color.bg.alt.default,
    [buttonColorPropVars.active.icon]: system.color.icon.strong,
    [buttonColorPropVars.active.background]: system.color.bg.alt.stronger,
    [buttonColorPropVars.focus.icon]: system.color.icon.default,
    [buttonColorPropVars.focus.background]: system.color.bg.transparent,
    [buttonColorPropVars.disabled.icon]: base.soap600,
    [buttonColorPropVars.disabled.background]: system.color.bg.transparent,

    "&[aria-pressed='true']": {
      [buttonColorPropVars.default.icon]: brand.primary.base,
      [buttonColorPropVars.default.background]: brand.primary.lightest,
      [buttonColorPropVars.hover.icon]: brand.primary.dark,
      [buttonColorPropVars.hover.background]: system.color.bg.alt.default,
      [buttonColorPropVars.active.icon]: brand.primary.dark,
      [buttonColorPropVars.active.background]: system.color.bg.alt.stronger,
      [buttonColorPropVars.focus.icon]: brand.primary.base,
      [buttonColorPropVars.focus.background]: brand.primary.lightest,
      [buttonColorPropVars.disabled.icon]: brand.primary.light,
      [buttonColorPropVars.disabled.background]: brand.primary.lightest,
    },

    '&:focus-visible, &.focus': {
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.bg.transparent,
        outerColor: brand.common.focusOutline,
      }),
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
      } else {
        if (toggled && typeof onToggleChange === 'function') {
          onToggleChange(toggled);
        }
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
        {icon ? <BaseButton.Icon icon={icon} shouldMirrorIcon={shouldMirrorIcon} /> : children}
      </BaseButton>
    );
  },
});
