import * as React from 'react';
import {focusRing, createComponent} from '@workday/canvas-kit-react/common';
import {BaseButton, buttonStencil} from './BaseButton';
import {TertiaryButtonProps} from './TertiaryButton';
import {brand, system} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

export interface ToolbarIconButtonProps extends Omit<TertiaryButtonProps, 'size' | 'variant'> {
  onToggleChange?: (toggled: boolean | undefined) => void;
  toggled?: boolean;
  shouldMirrorIcon?: boolean;
  shouldMirrorIconInRTL?: boolean;
}

export const toolbarIconButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    minWidth: system.space.x8,
    padding: system.space.zero,
    height: system.space.x8,
    [buttonStencil.vars.borderRadius]: system.shape.x1,
    [systemIconStencil.vars.color]: system.color.fg.muted.soft,

    '&:focus-visible, &.focus': {
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
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
    },

    "&[aria-pressed='true']": {
      [systemIconStencil.vars.color]: brand.primary.base,
      [buttonStencil.vars.background]: brand.primary.lightest,

      '&:hover, &.hover': {
        [buttonStencil.vars.background]: system.color.bg.alt.default,
        [systemIconStencil.vars.color]: brand.primary.dark,
      },

      '&:active, &.active': {
        [buttonStencil.vars.background]: system.color.bg.alt.stronger,
        [systemIconStencil.vars.color]: brand.primary.dark,
      },

      '&:disabled, &.disabled': {
        [buttonStencil.vars.background]: brand.primary.lightest,
        [systemIconStencil.vars.color]: brand.primary.light,
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
