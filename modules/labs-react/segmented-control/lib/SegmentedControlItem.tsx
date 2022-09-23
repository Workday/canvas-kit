import * as React from 'react';

import {colors, borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {
  // mouseFocusBehavior,
  createElemPropsHook,
  composeHooks,
  createSubcomponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {
  useListItemRegister,
  useListItemRovingFocus,
  isSelected,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';
import {BaseButton, ButtonContainerProps, ButtonColors} from '@workday/canvas-kit-react/button';

import {useSegmentedControlModel} from './useSegmentedControlModel';

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
  icon?: any;
}

const getIconButtonColors = (toggled?: boolean): ButtonColors => {
  return {
    default: {
      background: toggled ? colors.frenchVanilla100 : colors.soap200,
      icon: toggled ? colors.blackPepper400 : colors.licorice200,
      border: toggled ? colors.licorice200 : 'transparent',
    },
    hover: {
      background: toggled ? colors.frenchVanilla100 : colors.soap400,
      icon: toggled ? colors.blackPepper400 : colors.licorice200,
    },
    active: {
      background: toggled ? colors.frenchVanilla100 : colors.soap200,
      icon: toggled ? colors.blackPepper400 : colors.licorice200,
    },
    focus: {
      background: toggled ? colors.blueberry400 : undefined,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    disabled: {},
  };
};

const StyledButton = styled(BaseButton)<StyledType & ButtonContainerProps>(
  {
    borderRadius: borderRadius.m,
    minWidth: space.xl,
    '&:focus': {
      borderRadius: borderRadius.m,
      zIndex: 1,
      animation: 'none', // reset focusRing animation
      transition: 'all 120ms, border-radius 1ms',
      // ...mouseFocusBehavior({
      //   '&': {
      //     borderRadius: borderRadius.m,
      //   },
      // }),
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
})<ItemProps>(({children, icon, ...elemProps}, Element) => {
  return (
    <OverflowTooltip>
      <StyledButton
        as={Element}
        colors={getIconButtonColors(elemProps['aria-selected'])}
        fillIcon={elemProps['aria-selected']}
        {...elemProps}
      >
        <BaseButton.Icon icon={icon} />
        {children}
      </StyledButton>
    </OverflowTooltip>
  );
});
