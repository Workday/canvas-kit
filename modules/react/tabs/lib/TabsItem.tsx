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
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

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
    fontFamily: system.fontFamily.default,
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    fontWeight: system.fontWeight.medium,
    border: 'none',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.surface.transparent, system.color.bg.transparent.default),
    flex: '0 0 auto',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minWidth: cssVar(system.padding.none, system.space.zero),
    alignItems: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `0 ${cssVar(system.padding.md, system.space.x4)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.lg, px2rem(48)),
    cursor: 'pointer',
    color: system.color.fg.muted.default,
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: `${cssVar(system.shape.md, system.space.x2)} ${cssVar(system.shape.md, system.space.x2)} ${cssVar(system.shape.none, system.space.zero)} ${cssVar(system.shape.zero, system.space.zero)}`,
    transition: 'background 150ms ease, color 150ms ease',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: 'currentColor',
    [systemIconStencil.vars.size]: px2rem(20),

    '&:has(span)': {
      display: 'flex',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      gap: cssVar(system.gap.sm, system.space.x2),
    },

    '&:hover, &.hover, &:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(
        system.color.surface.overlay.hover.default,
        system.color.bg.alt.default
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.muted.strong, system.color.fg.contrast.default),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.muted.strong,
        system.color.fg.contrast.default
      ),
    },

    '&:focus-visible, &.focus': {
      // focus outline for Windows high contrast theme
      outline: `${px2rem(2)} solid transparent`,
      ...focusRing({inset: 'outer', width: 0, separation: 2}),
      [buttonStencil.vars.boxShadowInner]: cssVar(system.color.focus.inverse, base.neutral0),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.boxShadowOuter]: cssVar(
        system.color.brand.focus.primary,
        brand.common.focusOutline
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.strong, system.color.fg.contrast.default),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(system.color.fg.strong, system.color.icon.strong),
    },

    // Using opacity token applied to container to achieve disabled state instead of 'disabled" color tokens for
    // icon and text colors
    '&:disabled, &.disabled, &[aria-disabled]': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      opacity: cssVar(system.opacity.disabled, '0.4'),
      '&:hover': {
        cursor: 'auto',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(
          system.color.surface.transparent,
          system.color.bg.transparent.default
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [systemIconStencil.vars.color]: cssVar(
          system.color.fg.muted.default,
          system.color.fg.disabled
        ),
      },
    },

    '&[aria-selected=true]': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.brand.fg.primary.default, brand.primary.base),
      cursor: 'default',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        system.color.brand.fg.primary.default,
        brand.primary.base
      ),
      '&:after': {
        position: 'absolute',
        // selected state for Windows high contrast theme
        borderBottom: `${system.space.x1} solid transparent`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderRadius: `${cssVar(system.shape.md, system.space.x2)} ${cssVar(system.shape.md, system.space.x2)} ${cssVar(system.shape.none, system.space.zero)} ${cssVar(system.shape.zero, system.space.zero)}`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.fg.primary.default, brand.primary.base),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        bottom: cssVar(system.padding.none, system.space.zero),
        content: `''`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        left: cssVar(system.padding.none, system.space.zero),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        marginBlockStart: `${calc.negate(calc.divide(cssVar(system.padding.xs, system.space.x2), cssVar(system.padding.xxs, system.space.x1)))}`,
        width: '100%',
      },
      '&:hover, &.hover, &:focus-visible, &.focus': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(
          system.color.surface.transparent,
          system.color.bg.transparent.default
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.brand.fg.primary.default, brand.primary.base),
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
