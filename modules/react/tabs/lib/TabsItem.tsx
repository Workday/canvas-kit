import * as React from 'react';

import {buttonStencil} from '@workday/canvas-kit-react/button';
import {
  isSelected,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {
  EllipsisText,
  ExtractProps,
  composeHooks,
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  focusRing,
  slugify,
  useModalityType,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Box, FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, component, system} from '@workday/canvas-tokens-web';

import {useTabsModel} from './useTabsModel';

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
   * Part of the ARIA specification for tabs. Lets screen readers know which tab is active.  This
   * is automatically set by the component and should only be used in advanced cases.
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
    fontFamily: system.fontFamily.default,
    fontSize: system.legacy.fontSize.subtext.lg,
    lineHeight: system.legacy.lineHeight.subtext.lg,
    letterSpacing: system.legacy.letterSpacing.subtext.lg,
    fontWeight: system.fontWeight.medium,
    border: 'none',
    backgroundColor: system.legacy.color.surface.transparent,
    flex: '0 0 auto',
    minWidth: 0,
    alignItems: 'center',
    padding: `0 ${system.legacy.padding.md}`,
    height: system.legacy.size.lg,
    cursor: 'pointer',
    color: system.color.fg.muted.default,
    position: 'relative',
    borderRadius: `${system.legacy.shape.md} ${system.legacy.shape.md} ${system.legacy.shape.none} ${system.legacy.shape.none}`,
    transition: 'background 150ms ease, color 150ms ease',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: 'currentColor',
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,

    '&:has(span)': {
      display: 'flex',
      gap: system.legacy.gap.sm,
    },

    '&:hover, &.hover, &:focus-visible, &.focus': {
      backgroundColor: system.legacy.color.surface.overlay.hover.default,
      color: system.color.fg.muted.strong,
      [systemIconStencil.vars.color]: system.color.fg.muted.strong,
    },

    '&:focus-visible, &.focus': {
      // focus outline for Windows high contrast theme
      outline: `${px2rem(2)} solid transparent`,
      ...focusRing({inset: 'outer', width: 0, separation: 2}),
      [buttonStencil.vars.boxShadowInner]: system.legacy.color.focus.inverse,
      [buttonStencil.vars.boxShadowOuter]: system.legacy.color.brand.focus.primary,
      color: system.color.fg.strong,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },

    // Using opacity token applied to container to achieve disabled state instead of 'disabled" color tokens for
    // icon and text colors
    '&:disabled, &.disabled, &[aria-disabled]': {
      opacity: system.opacity.disabled,
      '&:hover': {
        cursor: 'auto',
        backgroundColor: system.legacy.color.surface.transparent,
        [systemIconStencil.vars.color]: system.color.fg.muted.default,
      },
    },

    '&[aria-selected=true]': {
      color: system.legacy.color.brand.fg.primary.default,
      cursor: 'default',
      [systemIconStencil.vars.color]: system.legacy.color.brand.fg.primary.default,
      '&:after': {
        position: 'absolute',
        // selected state for Windows high contrast theme
        borderBlockEnd: `${base.legacy.size50} solid transparent`,
        borderRadius: `${system.legacy.shape.md} ${system.legacy.shape.md} ${system.legacy.shape.none} ${system.legacy.shape.none}`,
        backgroundColor: system.legacy.color.brand.fg.primary.default,
        bottom: 0,
        content: `''`,
        left: 0,
        marginBlockStart: `${calc.negate(calc.divide(system.legacy.padding.xs, system.legacy.padding.xxs))}`,
        width: '100%',
      },
      '&:hover, &.hover, &:focus-visible, &.focus': {
        backgroundColor: system.legacy.color.surface.transparent,
        color: system.legacy.color.brand.fg.primary.default,
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
