import * as React from 'react';

import {colors, borderRadius, type, space} from '@workday/canvas-kit-react/tokens';
import {
  createElemPropsHook,
  composeHooks,
  createSubcomponent,
  styled,
  StyledType,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
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
  getMinWidthStyles,
} from '@workday/canvas-kit-react/button';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useSegmentedControlModel} from './useSegmentedControlModel';

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
  /**
   * The icon of the button.
   */
  icon?: CanvasSystemIcon;

  tooltipProps?: Omit<TooltipProps, 'children'>;
}

type WrapProps = {
  tooltipProps?: Omit<TooltipProps, 'children'>;
  children: React.ReactElement;
};

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

const getPaddingStyles = (
  children: React.ReactNode,
  size: ButtonContainerProps['size'],
  icon: CanvasSystemIcon | undefined
) => {
  if (!children) {
    // icon buttons do not have any padding
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
  const value = getMinWidthStyles(false, getButtonSize(size));

  return {
    minWidth: value,
    height: value,
    padding: getPaddingStyles(children, size, icon),
  };
};

const StyledButton = styled(BaseButton)<StyledType & ButtonContainerProps>(
  {
    borderRadius: borderRadius.m,
    overflow: 'visible',
    // flex: '1 1 0',
    // width: '100%',
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

const Container = ({tooltipProps, children}: WrapProps) =>
  tooltipProps ? (
    <Tooltip title={tooltipProps.title}>{children}</Tooltip>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

const useSegmentedControlItem = composeHooks(
  useListItemSelect,
  useListItemRegister,
  createElemPropsHook(useSegmentedControlModel)(
    ({state}, _?: React.Ref<HTMLButtonElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';
      const id = `${state.id}-${name}`;
      const selected = !!name && isSelected(name, state);
      return state.disabled ? {id, disabled: true} : {id, 'aria-pressed': selected};
    }
  )
);

export const SegmentedControlItem = createSubcomponent('button')({
  displayName: 'SegmentedControl.Item',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlItem,
})<ItemProps>(({children, icon, tooltipProps, ...elemProps}, Element, {state: {size}}) => {
  const isSmall = size === 'small';
  const {color, ...textStyles} = type.levels.subtext[isSmall ? 'medium' : 'large'];

  return (
    <Container tooltipProps={tooltipProps}>
      <StyledButton
        as={Element}
        colors={getIconButtonColors(elemProps['aria-pressed'])}
        size={size}
        {...textStyles}
        fontWeight="bold"
        {...geButtonStyles(size, children, icon)}
        {...elemProps}
      >
        {icon && (
          <BaseButton.Icon
            size={isSmall ? 'extraSmall' : 'medium'}
            icon={icon}
            shouldMirrorIcon={useIsRTL()}
            iconPosition="start"
          />
        )}
        {children && <BaseButton.Label textAlign="left">{children}</BaseButton.Label>}
      </StyledButton>
    </Container>
  );
});
