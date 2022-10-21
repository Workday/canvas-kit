import * as React from 'react';

import {colors, type, space} from '@workday/canvas-kit-react/tokens';
import {createSubcomponent, useIsRTL} from '@workday/canvas-kit-react/common';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {
  BaseButton,
  ButtonContainerProps,
  ButtonColors,
  ButtonSizes,
  getMinWidthStyles,
} from '@workday/canvas-kit-react/button';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';
import {Text} from '@workday/canvas-kit-react/text';
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

const getButtonSize = (size: ButtonContainerProps['size']) => {
  switch (size) {
    case 'large':
      return 'medium';
    case 'medium':
      return 'small';
    case 'small':
      return 'extraSmall';
    default:
      return 'medium';
  }
};

const getIconButtonColors = (toggled?: boolean): ButtonColors => {
  return {
    default: {
      background: toggled ? colors.frenchVanilla100 : colors.soap200,
      border: toggled ? colors.licorice200 : 'transparent',
      icon: toggled ? colors.blackPepper400 : colors.licorice400,
      label: toggled ? colors.blackPepper400 : colors.licorice400,
    },
    hover: {
      background: toggled ? colors.frenchVanilla100 : colors.soap400,
      icon: colors.licorice400,
      label: colors.licorice400,
    },
    active: {
      background: toggled ? colors.frenchVanilla100 : colors.soap400,
      icon: colors.licorice400,
      label: colors.licorice400,
    },
    focus: {},
    disabled: {
      background: colors.soap200,
      opacity: '1',
    },
  };
};

const getPaddingStyles = (
  children: React.ReactNode,
  size: ButtonContainerProps['size'],
  icon: CanvasSystemIcon | undefined
) => {
  if (!children) {
    return 0;
  }

  switch (size) {
    case 'large':
      return icon ? `0 ${space.m} 0 20px` : `0 ${space.m}`;

    case 'medium':
      return icon ? `0 20px 0 ${space.s}` : `0 ${space.s}`;

    case 'small':
      return icon ? `0 ${space.xs} 0 ${space.xxs}` : `0 ${space.xs}`;

    default:
      return icon ? `0 20px 0 ${space.s}` : `0 ${space.s}`;
  }
};

const geButtonStyles = (size: ButtonSizes, children: React.ReactNode, icon?: CanvasSystemIcon) => {
  const buttonSize = getButtonSize(size);
  const minWidthValue = getMinWidthStyles(children, children ? size : buttonSize);

  return {
    height: getMinWidthStyles(false, buttonSize),
    minWidth: minWidthValue,
    padding: getPaddingStyles(children, size, icon),
  };
};

const Container = ({
  tooltipProps,
  children,
}: {
  tooltipProps?: Omit<TooltipProps, 'children'>;
  children: React.ReactElement;
}) => {
  return tooltipProps ? (
    <Tooltip title={tooltipProps.title}>{children}</Tooltip>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export const SegmentedControlItem = createSubcomponent('button')({
  displayName: 'SegmentedControl.Item',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlItem,
})<ItemProps>(({children, icon, tooltipProps, ...elemProps}, Element, {state: {size}}) => {
  const {color, ...textStyles} = type.levels.subtext[size === 'small' ? 'medium' : 'large'];

  return (
    <Container tooltipProps={tooltipProps}>
      <BaseButton
        as={Element}
        borderRadius="m"
        colors={getIconButtonColors(elemProps['aria-pressed'])}
        {...geButtonStyles(size, children, icon)}
        {...elemProps}
      >
        {icon && (
          <BaseButton.Icon
            size={size === 'small' ? 'extraSmall' : 'medium'}
            icon={icon}
            shouldMirrorIcon={useIsRTL()}
          />
        )}
        {children && (
          <Text {...textStyles} fontWeight="bold" textAlign="left">
            {children}
          </Text>
        )}
      </BaseButton>
    </Container>
  );
});
