import * as React from 'react';

import {BaseButton, ButtonContainerProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Text} from '@workday/canvas-kit-react/text';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {colorSpace, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

import {useSegmentedControlItem} from './hooks/useSegmentedControlItem';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';

export interface ItemProps extends ButtonContainerProps {
  /**
   * Optionally pass index to the item. This should be done if `SegmentedControl.Item` components were created
   * via a `[Array::map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The contents of the item. This is text used as the accessible name of the button for screen readers.
   */
  children?: React.ReactNode;
  /**
   * The identifier of the item. This identifier will be used in change events and for `initialTab`.
   * If this property is not provided, it will default to a string representation
   * of the the zero-based index of the item when it was initialized.
   */
  'data-id'?: string;
  /**
   * Optional id. If not set, it will inherit the ID passed to the `SegmentedControl` component and append the
   * index at the end. Only set this for advanced cases.
   */
  id?: string;
  /**
   * Part of the ARIA specification for buttons. Lets screen readers know which button is active. This
   * should either be `true` or `false`. This is automatically set by the
   * component and should only be used in advanced cases.
   */
  'aria-pressed'?: boolean;
  /**
   * The icon of the button.
   */
  icon?: CanvasSystemIcon;
  /**
   * Tooltip Props
   */
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

export const segmentedControlItemStencil = createStencil({
  extends: buttonStencil,
  base: {
    fontFamily: system.fontFamily.default,
    fontSize: system.legacy.fontSize.subtext.lg,
    lineHeight: system.legacy.lineHeight.subtext.lg,
    letterSpacing: system.legacy.letterSpacing.subtext.lg,
    fontWeight: system.fontWeight.medium,
    textAlign: 'start',
    paddingInline: 0,
    gap: system.legacy.gap.xs,

    [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
    [buttonStencil.vars.label]: system.color.fg.muted.default,
    [systemIconStencil.vars.color]: system.color.fg.muted.default,

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.surface.overlay.hover.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.surface.overlay.pressed.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.label]: system.color.fg.muted.strong,
      [systemIconStencil.vars.color]: system.color.fg.muted.strong,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
      [buttonStencil.vars.label]: system.color.fg.muted.default,
      [systemIconStencil.vars.color]: system.color.fg.muted.default,
    },

    "&[aria-pressed='true']": {
      [buttonStencil.vars.background]: system.legacy.color.surface.default,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      [buttonStencil.vars.label]: system.color.fg.strong,
      boxShadow: system.depth[2],

      '&:hover, &.hover': {
        [systemIconStencil.vars.color]: system.color.fg.strong,
        [buttonStencil.vars.label]: system.color.fg.strong,
      },

      '&:focus-visible, &.focus': {
        boxShadow: `0 0 0 ${px2rem(2)} ${system.color.border.inverse.default},0 0 0 ${px2rem(4)} ${system.color.brand.border.primary}`,
      },

      '&:disabled, &.disabled': {
        [buttonStencil.vars.opacity]: system.opacity.disabled,
      },
    },
    ':dir(rtl)': {
      svg: {
        transform: 'scaleX(-1)',
      },
    },
  },
  modifiers: {
    size: {
      large: {
        height: system.legacy.size.sm,
        fontSize: system.legacy.fontSize.subtext.lg,
      },
      medium: {
        height: base.legacy.size350,
        fontWeight: system.sana.fontWeight.semibold,
      },
      small: {
        fontFamily: system.fontFamily.default,
        fontSize: system.legacy.fontSize.subtext.md,
        lineHeight: system.legacy.lineHeight.subtext.md,
        letterSpacing: system.legacy.letterSpacing.subtext.md,
        fontWeight: system.fontWeight.medium,
        height: system.legacy.size.xs,
        gap: base.legacy.size25,
      },
    },
    variant: {
      iconOnly: {},
      textOnly: {},
      iconWithText: {},
    },
  },
  compound: [
    {
      modifiers: {size: 'large', variant: 'iconOnly'},
      styles: {
        minWidth: system.legacy.size.sm,
      },
    },
    {
      modifiers: {size: 'large', variant: 'iconWithText'},
      styles: {
        paddingInline: `${system.legacy.padding.sm} ${system.legacy.padding.md}`,
      },
    },
    {
      modifiers: {size: 'large', variant: 'textOnly'},
      styles: {
        paddingInline: system.legacy.padding.xl,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'iconOnly'},
      styles: {
        minWidth: base.legacy.size350,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'iconWithText'},
      styles: {
        paddingInline: `${system.legacy.padding.xs} ${system.legacy.padding.sm}`,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'textOnly'},
      styles: {
        paddingInline: system.legacy.padding.lg,
      },
    },
    {
      modifiers: {size: 'small', variant: 'iconOnly'},
      styles: {
        minWidth: system.legacy.size.xs,
      },
    },
    {
      modifiers: {size: 'small', variant: 'iconWithText'},
      styles: {
        paddingInline: `${base.legacy.size75} ${system.legacy.padding.xs}`,
      },
    },
    {
      modifiers: {size: 'small', variant: 'textOnly'},
      styles: {
        paddingInline: system.legacy.padding.sm,
      },
    },
  ],
});

type ContainerProps = {
  tooltipProps?: Omit<TooltipProps, 'children'>;
  children: React.ReactElement;
};

const Container = ({tooltipProps, children}: ContainerProps) => {
  return tooltipProps ? (
    <Tooltip {...tooltipProps}>{children}</Tooltip>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

const getVariant = (icon: CanvasSystemIcon | undefined, children: React.ReactNode) => {
  if (icon && children) {
    return 'iconWithText';
  } else if (!icon && children) {
    return 'textOnly';
  } else {
    return 'iconOnly';
  }
};

export const SegmentedControlItem = createSubcomponent('button')({
  displayName: 'SegmentedControl.Item',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlItem,
})<ItemProps>(({children, icon, tooltipProps, ...elemProps}, Element, {state: {size}}) => {
  const variant = getVariant(icon, children);
  const iconSize = size === 'small' ? 'extraSmall' : 'small';

  return (
    <Container tooltipProps={tooltipProps}>
      <BaseButton
        as={Element}
        {...handleCsProp(elemProps, segmentedControlItemStencil({size, variant}))}
      >
        {icon && <BaseButton.Icon icon={icon} size={iconSize} />}
        {children && <Text>{children}</Text>}
      </BaseButton>
    </Container>
  );
});
