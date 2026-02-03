import * as React from 'react';

import {
  focusRing,
  slugify,
  createElemPropsHook,
  composeHooks,
  ExtractProps,
  EllipsisText,
  createSubcomponent,
  useModalityType,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {Box, FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {
  useListItemRegister,
  useListItemRovingFocus,
  isSelected,
  useListItemSelect,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';

import {useTabsModel} from './useTabsModel';
import {buttonStencil} from '@workday/canvas-kit-react/button';
import {system, brand} from '@workday/canvas-tokens-web';
export interface TabsItemProps
  extends ExtractProps<typeof Box, never>,
    Partial<Pick<FlexProps, 'gap'>> {
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
}

const tabItemStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    fontFamily: `${system.fontFamily.default}, Helvetica Neue, Helvetica, Arial, sans-serif`,
    fontWeight: system.fontWeight.medium,
    border: 'none',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    minWidth: system.space.zero,
    alignItems: 'center',
    padding: `${system.space.x3} ${system.space.x4}`,
    height: px2rem(52),
    cursor: 'pointer',
    color: system.color.fg.muted.default,
    position: 'relative',
    borderRadius: `${system.space.x1} ${system.space.x1} ${system.space.zero} ${system.space.zero}`,
    transition: 'background 150ms ease, color 150ms ease',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: 'currentColor',

    '&:has(span)': {
      display: 'flex',
      gap: system.space.x2,
    },

    '&:hover, &.hover, &:focus-visible, &.focus': {
      backgroundColor: system.color.bg.alt.default,
      color: system.color.fg.contrast.default,
      [systemIconStencil.vars.color]: system.color.fg.contrast.default,
    },

    '&:focus-visible, &.focus': {
      // focus outline for Windows high contrast theme
      outline: `${px2rem(2)} solid transparent`,
      ...focusRing({inset: 'outer', width: 0, separation: 2}),
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.icon.strong,
    },

    '&:disabled, &.disabled, &[aria-disabled]': {
      color: system.color.text.disabled,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
      '&:hover': {
        cursor: 'auto',
        backgroundColor: system.color.bg.transparent.default,
        [systemIconStencil.vars.color]: system.color.fg.disabled,
      },
    },

    '&[aria-selected=true]': {
      color: brand.primary.base,
      cursor: 'default',
      [systemIconStencil.vars.color]: brand.primary.base,
      '&:after': {
        position: 'absolute',
        // selected state for Windows high contrast theme
        borderBottom: `${system.space.x1} solid transparent`,
        borderRadius: `${system.shape.x1} ${system.shape.x1} ${system.shape.zero} ${system.shape.zero}`,
        backgroundColor: brand.primary.base,
        bottom: system.space.zero,
        content: `''`,
        left: system.space.zero,
        marginBlockStart: `${calc.negate(calc.divide(system.space.x2, system.space.x1))}`,
        width: '100%',
      },
      '&:hover, &.hover, &:focus-visible, &.focus': {
        backgroundColor: system.color.bg.transparent.default,
        color: brand.primary.base,
      },
    },
  },
});

export const StyledTabItem = createComponent('button')<TabsItemProps>({
  displayName: 'StyledTabItem',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tabItemStencil())}>
        {children}
      </Element>
    );
  },
});

export const useTabsItem = composeHooks(
  createElemPropsHook(useTabsModel)(({state}, _, elemProps: {'data-id'?: string} = {}) => {
    const name = elemProps['data-id'] || '';

    const selected = !!elemProps['data-id'] && isSelected(name, state);

    return {
      type: 'button' as const,
      role: 'tab' as const,
      'aria-selected': selected,
      'aria-controls': slugify(`tabpanel-${state.id}-${name}`),
    };
  }),
  useListItemSelect,
  useOverflowListItemMeasure,
  useListItemRovingFocus,
  useListItemRegister
);

export const TabsItem = createSubcomponent('button')({
  displayName: 'Tabs.Item',
  modelHook: useTabsModel,
  elemPropsHook: useTabsItem,
  subComponents: {
    Icon: SystemIcon,
    Text: EllipsisText,
  },
})<TabsItemProps>(({children, ...elemProps}, Element) => {
  const modality = useModalityType();
  return (
    <OverflowTooltip>
      <StyledTabItem as={Element} maxWidth={modality === 'touch' ? undefined : 280} {...elemProps}>
        {children}
      </StyledTabItem>
    </OverflowTooltip>
  );
});
