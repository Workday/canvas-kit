import * as React from 'react';

import {colors, borderRadius, space, type} from '@workday/canvas-kit-react/tokens';
import {
  createElemPropsHook,
  composeHooks,
  createSubcomponent,
  styled,
  StyledType,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {
  useListItemRegister,
  isSelected,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';
import {
  BaseButton,
  ButtonContainerProps,
  ButtonColors,
  ButtonSizes,
} from '@workday/canvas-kit-react/button';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useSegmentedControlModel} from './useSegmentedControlModel';
import {Text} from '@workday/canvas-kit-react/text';

export interface ItemProps extends ButtonContainerProps {
  /**
   * Optionally pass index to the item. This should be done if `SegmentedControl.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
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
   * should either be `true` or `undefined` and never `false`. This is automatically set by the
   * component and should only be used in advanced cases.
   */
  'aria-pressed'?: boolean;
  // ADD DESCRIPTION HERE
  icon?: CanvasSystemIcon;
}

type WrapProps = {
  isIconOnly: boolean;
  title: React.ReactNode;
  children: React.ReactElement;
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
      icon: colors.blackPepper400,
      label: colors.blackPepper400,
    },
    active: {
      background: toggled ? colors.frenchVanilla100 : colors.soap200,
      icon: toggled ? colors.blackPepper400 : colors.licorice200,
    },
    focus: {},
    disabled: {},
  };
};

const getSizeStyles = (size?: ButtonSizes) => {
  const sizeValue = size === 'large' ? space.xl : size === 'small' ? space.m : space.l;

  return {
    minWidth: sizeValue,
    height: sizeValue,
  };
};

// USE FROM BUTTON PACKAGE
const getPaddingStyles = (
  children: React.ReactNode,
  size: ButtonContainerProps['size'],
  icon?: CanvasSystemIcon
) => {
  if (!children) {
    return `0 0`;
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

const StyledButton = styled(BaseButton)<StyledType & ButtonContainerProps>(
  {
    padding: 0,
    borderRadius: borderRadius.m,
    width: '100%',
    '&:disabled': {
      opacity: 1,
    },
  },
  ({theme}) => ({
    '[aria-pressed="true"]': {
      borderColor: theme.canvas.palette.primary.main,
      '&:hover, &:focus:hover': {
        background: theme.canvas.palette.primary.main,
      },
    },
  })
);

export const useSegmentedControlItem = composeHooks(
  useListItemSelect,
  useListItemRegister,
  createElemPropsHook(useSegmentedControlModel)(
    ({state}, _?: React.Ref<HTMLButtonElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';
      const id = `${state.id}-${name}`;
      const selected = !!name && isSelected(name, state);

      return state.disabled ? {id, disabled: true} : selected ? {id, 'aria-pressed': true} : {id};
    }
  )
);

const Container = ({title, isIconOnly, children}: WrapProps) =>
  isIconOnly ? (
    <Tooltip title={title}>{children}</Tooltip>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

export const SegmentedControlItem = createSubcomponent('button')({
  displayName: 'SegmentedControl.Item',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlItem,
})<ItemProps>(({children, icon, ...elemProps}, Element, {state: {size, variant}}) => {
  const isSmall = size === 'small';
  const isSelected = elemProps['aria-pressed'];
  const isIconOnly = variant === 'icon';
  const {color, ...textStyles} = type.levels.subtext[isSmall ? 'medium' : 'large'];

  return (
    <Container title={children} isIconOnly={isIconOnly}>
      <StyledButton
        as={Element}
        colors={getIconButtonColors(isSelected)}
        size={size}
        padding={`${getPaddingStyles(!isIconOnly, size, icon)} !important`}
        {...getSizeStyles(size)}
        {...elemProps}
      >
        {icon && (
          <BaseButton.Icon
            size={isSmall ? 'extraSmall' : 'medium'}
            icon={icon}
            shouldMirrorIcon={useIsRTL()}
          />
        )}
        {!isIconOnly && (
          <Text {...textStyles} fontWeight="bold" whiteSpace="break-spaces">
            {children}
          </Text>
        )}
      </StyledButton>
    </Container>
  );
});
