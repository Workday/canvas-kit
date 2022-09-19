import * as React from 'react';

import {colors, space, type, borderRadius, iconColors} from '@workday/canvas-kit-react/tokens';
import {
  focusRing,
  hideMouseFocus,
  styled,
  StyledType,
  createElemPropsHook,
  composeHooks,
  ExtractProps,
  ellipsisStyles,
  EllipsisText,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Box, StackProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {
  useListItemRegister,
  useListItemRovingFocus,
  isSelected,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';

import {useSegmentedControlModel} from './useSegmentedControlModel';

export interface TabsItemProps
  extends ExtractProps<typeof Box, never>,
    Partial<Pick<StackProps, 'spacing'>> {
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
  children: React.ReactNode;
  /**
   * The identifier of the tab. This identifier will be used in change events and for `initialTab`.
   * Must match the `data-id` of the associated tab panel. If this property is not provided, it will
   * default to a string representation of the the zero-based index of the Tab when it was
   * initialized.
   */
  value?: string;
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
}

export const StyledTabItem = styled(Box.as('button'))<StyledType & Pick<TabsItemProps, 'spacing'>>(
  ({theme, spacing}) => ({
    ...type.levels.subtext.large,
    '& > *:not(style) ~ *:not(style)': {
      marginLeft: spacing || space.xxs,
    },
    fontWeight: type.properties.fontWeights.medium,
    border: 'none',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    alignItems: 'center',
    padding: `${space.xs} ${space.s}`,
    height: 52,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.licorice300,
    position: 'relative',
    borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
    transition: 'background 150ms ease, color 150ms ease',

    ...hideMouseFocus,

    '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
      fill: iconColors.active,
    },

    '&:hover, &:focus': {
      backgroundColor: colors.soap200,
      color: colors.blackPepper400,
      '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
        fill: iconColors.hover,
      },
      '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
        fill: iconColors.active,
      },
    },

    '&:focus': {
      outline: `none`,
      ...focusRing({inset: 'outer', width: 0, separation: 2}, theme),
    },

    '&:disabled, &[aria-disabled]': {
      color: colors.licorice100,
      '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
        fill: iconColors.disabled,
      },
      '&:hover': {
        cursor: 'auto',
        backgroundColor: `transparent`,
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
          fill: iconColors.disabled,
        },
      },
    },

    '&[aria-selected=true]': {
      color: theme.canvas.palette.primary.main,
      cursor: 'default',
      '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
        fill: theme.canvas.palette.primary.main,
      },
      '&:after': {
        position: 'absolute',
        height: space.xxxs,
        borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
        backgroundColor: theme.canvas.palette.primary.main,
        bottom: 0,
        content: `''`,
        left: 0,
        marginTop: '-2px',
        width: '100%',
      },
      '&:hover, &:focus': {
        backgroundColor: `transparent`,
        color: theme.canvas.palette.primary.main,
      },
    },
  }),
  ({children}) => {
    if (typeof children === 'string') {
      return ellipsisStyles;
    } else {
      return {
        display: 'flex',
      };
    }
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
  subComponents: {
    Icon: SystemIcon,
    Text: EllipsisText,
  },
})<TabsItemProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip>
      <StyledTabItem as={Element} {...elemProps}>
        {children}
      </StyledTabItem>
    </OverflowTooltip>
  );
});
