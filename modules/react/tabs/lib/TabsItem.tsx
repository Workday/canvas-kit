import * as React from 'react';

import {colors, space, type, borderRadius, iconColors} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  focusRing,
  hideMouseFocus,
  styled,
  StyledType,
  useModelContext,
  createHook,
  composeHooks,
  ExtractProps,
  ellipsisStyles,
  EllipsisText,
  useLocalRef,
  useMount,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {useListRegisterItem} from './list';
import {useRovingFocus} from './cursor';
import {isSelected, useSelectionItem} from './selection';
import {useOverflowMeasureItem} from './overflow';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';
export interface TabsItemProps extends ExtractProps<typeof Box, never> {
  /**
   * Optionally pass index to tab item. This should be done if `Tabs.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
  /**
   * The name of the tab. This name will be used in change events and for `initialTab`. Must match
   * the `name` of the associated tab panel. If this property is not provided, it will default to a
   * string representation of the the zero-based index of the Tab when it was initialized.
   */
  name?: string;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel;
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
  /**
   * Use `hasIcon={true}` when the Tab item contains an icon. This instructs the tab item to render
   * children as a flex container to accommodate icons. You will have to use `Tabs.Item.Text` as a
   * child element if this is set to true.
   *
   * @example
   * <Tabs.Item hasIcon>
   *   <Tabs.Item.Icon icon={someIcon} />
   *   <Tabs.Item.Text>Tab Text</Tabs.Item.Text>
   * </Tabs.Item>
   */
  hasIcon?: boolean;
}

export const StyledTabItem = styled(Box.as('button'))<StyledType & {hasIcon?: boolean}>(
  ({theme}) => ({
    ...type.levels.subtext.large,
    '& > *:not(style) ~ *:not(style)': {
      marginLeft: space.xxs,
    },
    fontWeight: type.properties.fontWeights.medium,
    border: 'none',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    alignItems: 'center',
    maxWidth: '280px',
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
  ({hasIcon}) => {
    if (hasIcon) {
      return {
        display: 'flex',
      };
    } else {
      return ellipsisStyles;
    }
  }
);

export const TabsItem = createComponent('button')({
  displayName: 'Tabs.Item',
  Component: ({model, children, ...elemProps}: TabsItemProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);

    const props = useTabsItem(localModel, elemProps, ref);

    if ('production' !== process.env.NODE_ENV) {
      // ensure `hasIcon` is used when a child has an icon
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const {elementRef, localRef} = useLocalRef(props.ref);
      props.ref = elementRef;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useMount(() => {
        if (localRef.current.querySelector('svg') && !props.hasIcon) {
          console.warn(
            `A Tabs.Item with an icon should have the 'hasIcon' prop set to true. This ensures correct rendering`
          );
        }
      });
    }

    return (
      <OverflowTooltip>
        <StyledTabItem as={Element} {...props}>
          {children}
        </StyledTabItem>
      </OverflowTooltip>
    );
  },
  subComponents: {
    Icon: SystemIcon,
    Text: EllipsisText,
  },
});

export const useTabsItem = composeHooks(
  createHook(
    (model: TabsModel, _?: React.Ref<HTMLButtonElement>, elemProps: {name?: string} = {}) => {
      const {state} = model;
      const name = elemProps.name || '';

      const selected = !!elemProps.name && isSelected(name, state);

      return {
        type: 'button' as 'button', // keep Typescript happy
        role: 'tab',
        'aria-selected': selected,
        'aria-controls': `tabpanel-${state.id}-${name}`,
      };
    }
  ),
  useSelectionItem,
  useOverflowMeasureItem,
  useRovingFocus,
  useListRegisterItem
);
