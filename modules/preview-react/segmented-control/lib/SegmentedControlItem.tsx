import * as React from 'react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {
  buttonStencil,
  buttonColorPropVars,
  BaseButton,
  ButtonContainerProps,
} from '@workday/canvas-kit-react/button';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';
import {Text} from '@workday/canvas-kit-react/text';
import {useSegmentedControlItem} from './hooks/useSegmentedControlItem';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    textAlign: 'left',
    borderRadius: system.shape.x1,
    gap: system.space.x1,
    [buttonColorPropVars.default.background]: colors.soap200,
    [buttonColorPropVars.default.border]: 'transparent',
    [buttonColorPropVars.default.icon]: colors.licorice400,
    [buttonColorPropVars.default.label]: colors.licorice400,
    [buttonColorPropVars.hover.background]: colors.soap400,
    [buttonColorPropVars.hover.border]: 'transparent',
    [buttonColorPropVars.hover.icon]: colors.licorice400,
    [buttonColorPropVars.hover.label]: colors.licorice400,
    [buttonColorPropVars.active.background]: colors.soap400,
    [buttonColorPropVars.active.border]: 'transparent',
    [buttonColorPropVars.active.icon]: colors.licorice400,
    [buttonColorPropVars.active.label]: colors.licorice400,
    [buttonColorPropVars.focus.background]: colors.soap200,
    [buttonColorPropVars.focus.border]: 'transparent',
    [buttonColorPropVars.focus.icon]: colors.licorice400,
    [buttonColorPropVars.focus.label]: colors.licorice400,
    [buttonColorPropVars.disabled.background]: colors.soap200,
    [buttonColorPropVars.disabled.opacity]: '1',
    [buttonColorPropVars.disabled.icon]: colors.licorice400,
    [buttonColorPropVars.disabled.border]: 'transparent',
    [buttonColorPropVars.disabled.label]: colors.blackPepper400,

    "&[aria-pressed='true']": {
      [buttonColorPropVars.default.background]: colors.frenchVanilla100,
      [buttonColorPropVars.default.border]: colors.licorice200,
      [buttonColorPropVars.default.icon]: colors.blackPepper400,
      [buttonColorPropVars.default.label]: colors.blackPepper400,
      [buttonColorPropVars.hover.background]: colors.frenchVanilla100,
      [buttonColorPropVars.hover.border]: colors.licorice200,
      [buttonColorPropVars.hover.icon]: colors.blackPepper400,
      [buttonColorPropVars.hover.label]: colors.blackPepper400,
      [buttonColorPropVars.active.background]: colors.frenchVanilla100,
      [buttonColorPropVars.active.border]: colors.licorice200,
      [buttonColorPropVars.focus.background]: colors.frenchVanilla100,
      [buttonColorPropVars.focus.border]: colors.licorice200,
      [buttonColorPropVars.focus.icon]: colors.blackPepper400,
      [buttonColorPropVars.focus.label]: colors.blackPepper400,
      [buttonColorPropVars.disabled.border]: colors.licorice200,
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
        height: 'fit-content',
        minWidth: system.space.x10,
        paddingBlock: px2rem(9),
        gap: system.space.x2,
      },
      medium: {
        height: 'fit-content',
        minWidth: system.space.x8,
        paddingBlock: px2rem(5),
      },
      small: {
        ...system.type.subtext.small,
        fontWeight: system.fontWeight.bold,
        height: 'fit-content',
        minWidth: system.space.x8,
        paddingBlock: px2rem(3),
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
        paddingInline: px2rem(9),
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
        paddingInline: px2rem(5),
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
        paddingInline: px2rem(5),
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
