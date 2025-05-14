import * as React from 'react';

import {BaseButton, ButtonContainerProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {Text} from '@workday/canvas-kit-react/text';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';
import {useSegmentedControlItem} from './hooks/useSegmentedControlItem';

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
    ...system.type.subtext.large,
    fontWeight: system.fontWeight.bold,
    textAlign: 'start',
    paddingInline: system.space.zero,
    gap: system.space.x1,

    [buttonStencil.vars.borderRadius]: system.shape.x1,
    [buttonStencil.vars.label]: system.color.fg.muted.strong,
    [systemIconStencil.vars.color]: system.color.fg.muted.strong,

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
      [buttonStencil.vars.label]: system.color.fg.muted.strong,
      [systemIconStencil.vars.color]: system.color.fg.muted.strong,
    },

    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
      [buttonStencil.vars.label]: system.color.fg.muted.strong,
      [systemIconStencil.vars.color]: system.color.fg.muted.strong,
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.label]: system.color.fg.muted.strong,
      [systemIconStencil.vars.color]: system.color.fg.muted.strong,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.alt.soft,
    },

    "&[aria-pressed='true']": {
      [buttonStencil.vars.background]: system.color.bg.default,
      [buttonStencil.vars.border]: system.color.border.input.default,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      [buttonStencil.vars.label]: system.color.fg.strong,

      '&:hover, &.hover': {
        [systemIconStencil.vars.color]: system.color.fg.strong,
        [buttonStencil.vars.label]: system.color.fg.strong,
      },

      '&:disabled, &.disabled': {
        [buttonStencil.vars.border]: system.color.border.input.default,
        [buttonStencil.vars.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: system.color.fg.strong,
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
        height: system.space.x10,
        gap: system.space.x2,
      },
      medium: {
        height: system.space.x8,
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
        minWidth: system.space.x10,
      },
    },
    {
      modifiers: {size: 'large', variant: 'iconWithText'},
      styles: {
        paddingInline: `${px2rem(20)} ${system.space.x6}`,
      },
    },
    {
      modifiers: {size: 'large', variant: 'textOnly'},
      styles: {
        paddingInline: system.space.x6,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'iconOnly'},
      styles: {
        minWidth: system.space.x8,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'iconWithText'},
      styles: {
        paddingInline: `${system.space.x4} ${px2rem(20)}`,
      },
    },
    {
      modifiers: {size: 'medium', variant: 'textOnly'},
      styles: {
        paddingInline: px2rem(20),
      },
    },
    {
      modifiers: {size: 'small', variant: 'iconOnly'},
      styles: {
        minWidth: system.space.x6,
      },
    },
    {
      modifiers: {size: 'small', variant: 'iconWithText'},
      styles: {
        paddingInline: `${system.space.x2} ${system.space.x3}`,
      },
    },
    {
      modifiers: {size: 'small', variant: 'textOnly'},
      styles: {
        paddingInline: system.space.x3,
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
