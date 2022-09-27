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
// import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
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
   * Optionally pass index to tab item. This should be done if `Tabs.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The contents of the tab item. This will be the accessible name of the tab for screen readers.
   * Often, this is text. Icons are also supported. Using `Tabs.Icon` will render an icon that is
   * not visible to screen readers and therefore the icon should not be necessary to understand the
   * tab. In most circumstances, `aria-label` should not be used.
   *
   * ```tsx
   * <Tabs.Item>First Tab</Tabs.Item>
   * <Tabs.Item>
   *   <Tabs.Icon icon={canvasIcon} />
   *   <Tabs.Text>Second Tab</Tabs.Text>
   * </Tabs.Item>
   * ```
   */
  children?: React.ReactNode;
  /**
   * The identifier of the tab. This identifier will be used in change events and for `initialTab`.
   * Must match the `data-id` of the associated tab panel. If this property is not provided, it will
   * default to a string representation of the the zero-based index of the Tab when it was
   * initialized.
   */
  'data-id'?: string;
  /**
   * Optional id. If not set, it will inherit the ID passed to the `Tabs` component and append the
   * index at the end. Only set this for advanced cases.
   */
  id?: string;
  /**
   * Part of the ARIA specification for tabs. This attributes links a `role=tab` to a
   * `role=tabpanel`. This value must be the same as the associated `id` attribute of the tab panel.
   * This is automatically set by the component and should only be used in advanced cases.
   */
  'aria-controls'?: string;
  /**
   * Part of the ARIA specification for tabs. Lets screen readers know which tab is active. This
   * should either be `true` or `undefined` and never `false`. This is automatically set by the
   * component and should only be used in advanced cases.
   */
  'aria-selected'?: boolean;
  /**
   * Part of the ARIA specification for tabs. The currently active tab should not have a `tabIndex`
   * set while all inactive tabs should have a `tabIndex={-1}`
   */
  tabIndex?: number;
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

      const selected = !!elemProps['data-id'] && isSelected(name, state);

      return {
        type: 'button',
        role: 'tab',
        id: `${state.id}-${name}`,
        'aria-selected': selected,
        'aria-controls': `tabpanel-${state.id}-${name}`,
      };
    }
  ),
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

export const SegmentedControlItem = createSubcomponent('button')({
  displayName: 'SegmentedControl.Item',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useTabsItem,
})<ItemProps>(({children, icon, ...elemProps}, Element, {state: {size, orientation}}) => {
  const isSmall = size === 'small';
  const isSelected = elemProps['aria-selected'];
  const {color, ...textStyles} = type.levels.subtext[isSmall ? 'medium' : 'large'];

  return (
    <StyledContainer isSelected={isSelected} orientation={orientation}>
      <StyledButton
        as={Element}
        colors={getIconButtonColors(elemProps['aria-selected'])}
        size={size as ButtonContainerProps['size']}
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
    </StyledContainer>
  );
});
