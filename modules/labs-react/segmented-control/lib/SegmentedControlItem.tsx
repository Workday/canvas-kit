import * as React from 'react';

import {colors, borderRadius, space, type} from '@workday/canvas-kit-react/tokens';
import {
  // mouseFocusBehavior,
  createElemPropsHook,
  composeHooks,
  createSubcomponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {OverflowTooltip, Tooltip} from '@workday/canvas-kit-react/tooltip';
import {
  useListItemRegister,
  useListItemRovingFocus,
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
   * Optionally pass index to the item. This should be done if `Tabs.Item` components were created
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
  /**
   * Part of the ARIA specification for buttons. The currently active button should not have a `buttonIndex`
   * set while all inactive buttons should have a `buttonIndex={-1}`
   */
  buttonIndex?: number;
  icon?: CanvasSystemIcon;
}

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
    // TO REFACT
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

const StyledContainer = styled('div')<{
  isSelected?: boolean;
  orientation: 'horizontal' | 'vertical';
}>(
  {
    // flex: '1 1 0',
    // minWidth: 0,
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: colors.soap600,
      position: 'absolute',
    },
    '&:first-of-type': {
      padding: 0,
      '&::after': {
        display: 'none',
      },
    },
  },
  ({orientation}) =>
    orientation === 'horizontal'
      ? {
          paddingLeft: '5px',
          '&::after': {
            width: '1px',
            height: 'calc(100% - 8px)',
            margin: '0 2px',
            top: '4px',
            left: '0',
          },
        }
      : {
          paddingTop: '5px',
          '&::after': {
            height: '1px',
            width: 'calc(100% - 8px)',
            margin: '2px 0',
            left: '4px',
            top: '0',
          },
        },
  ({isSelected}) =>
    isSelected && {
      '&, & + div': {
        '&::after': {
          display: 'none',
        },
      },
    }
);

export const useTabsItem = composeHooks(
  createElemPropsHook(useSegmentedControlModel)(
    ({state}, _?: React.Ref<HTMLButtonElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';
      const selected = !!name && isSelected(name, state);

      return {
        id: `${state.id}-${name}`,
        'aria-pressed': selected,
      };
    }
  ),
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister,
  createElemPropsHook(useSegmentedControlModel)(({state}) => {
    return state.disabled ? {disabled: true} : {};
  })
);

export const SegmentedControlItem = createSubcomponent('button')({
  displayName: 'SegmentedControl.Item',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useTabsItem,
})<ItemProps>(
  ({children, icon, ...elemProps}, Element, {state: {size, orientation, isIconOnly}}) => {
    const isSmall = size === 'small';
    const isSelected = elemProps['aria-pressed'];
    const {color, ...textStyles} = type.levels.subtext[isSmall ? 'medium' : 'large'];

    const WrappedElement = icon && !children ? Tooltip : React.Fragment;

    return (
      <StyledContainer isSelected={isSelected} orientation={orientation}>
        {
          <WrappedElement title="text">
            <StyledButton
              as={Element}
              colors={getIconButtonColors(isSelected)}
              size={size}
              padding={`${getPaddingStyles(children, size, icon)} !important`}
              {...getSizeStyles(size)}
              {...elemProps}
            >
              {icon && <BaseButton.Icon size={isSmall ? 'extraSmall' : 'medium'} icon={icon} />}
              {children && (
                <Text {...textStyles} fontWeight="bold">
                  {children}
                </Text>
              )}
            </StyledButton>
          </WrappedElement>
        }
      </StyledContainer>
    );
  }
);
