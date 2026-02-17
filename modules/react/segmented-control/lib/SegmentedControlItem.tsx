import * as React from 'react';

import {BaseButton, ButtonContainerProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Text} from '@workday/canvas-kit-react/text';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {colorSpace, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    fontWeight: system.fontWeight.normal,
    textAlign: 'start',
    paddingInline: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.x1),

    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.md, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.label]: cssVar(system.color.fg.muted.default, system.color.fg.muted.strong),
    [systemIconStencil.vars.color]: cssVar(
      system.color.fg.muted.default,
      system.color.fg.muted.strong
    ),

    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.alt.strong,
        system.color.bg.alt.strong,
        system.color.surface.overlay.mixin,
        system.opacity.surface.hover
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, system.color.fg.muted.strong),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(system.color.fg.strong, system.color.fg.muted.strong),
    },

    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.alt.strong,
        system.color.bg.alt.strong,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, system.color.fg.muted.strong),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(system.color.fg.strong, system.color.fg.muted.strong),
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.label]: system.color.fg.muted.strong,
      [systemIconStencil.vars.color]: system.color.fg.muted.strong,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },

    "&[aria-pressed='true']": {
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.default,
        system.color.bg.default
      ),
      [buttonStencil.vars.border]: system.color.border.input.default,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      [buttonStencil.vars.label]: system.color.fg.strong,

      '&:hover, &.hover': {
        [systemIconStencil.vars.color]: system.color.fg.strong,
        [buttonStencil.vars.label]: system.color.fg.strong,
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
        height: cssVar(system.size.md, system.space.x10),
        gap: cssVar(system.gap.sm, system.space.x2),
      },
      medium: {
        height: cssVar(system.size.sm, system.space.x8),
      },
      small: {
        ...system.type.subtext.medium,
        fontWeight: system.fontWeight.bold,
        height: system.space.x6,
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
        minWidth: cssVar(system.size.md, system.space.x10),
      },
    },
    {
      modifiers: {size: 'large', variant: 'iconWithText'},
      styles: {
        paddingInline: `${cssVar(system.padding.lg, px2rem(20))} ${cssVar(system.padding.xl, system.space.x6)}`,
      },
    },
    {
      modifiers: {size: 'large', variant: 'textOnly'},
      styles: {
        paddingInline: cssVar(system.padding.xl, system.space.x6),
      },
    },
    {
      modifiers: {size: 'medium', variant: 'iconOnly'},
      styles: {
        minWidth: cssVar(system.size.sm, system.space.x8),
      },
    },
    {
      modifiers: {size: 'medium', variant: 'iconWithText'},
      styles: {
        paddingInline: `${cssVar(system.padding.md, system.space.x4)} ${cssVar(system.padding.lg, px2rem(20))}`,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'textOnly'},
      styles: {
        paddingInline: cssVar(system.padding.lg, px2rem(20)),
      },
    },
    {
      modifiers: {size: 'small', variant: 'iconOnly'},
      styles: {
        minWidth: cssVar(system.size.xs, system.space.x6),
      },
    },
    {
      modifiers: {size: 'small', variant: 'iconWithText'},
      styles: {
        paddingInline: `${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.sm, system.space.x3)}`,
      },
    },
    {
      modifiers: {size: 'small', variant: 'textOnly'},
      styles: {
        paddingInline: cssVar(system.padding.sm, system.space.x3),
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
