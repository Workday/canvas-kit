import * as React from 'react';

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
  cornerShapeStencil,
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
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
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
   * The variant of the TabsItem.
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
}

const tabItemStencil = createStencil({
  extends: cornerShapeStencil,
  base: {
    [cornerShapeStencil.vars.shape]: system.legacy.shape.lg,
    ...system.legacy.type.subtext.lg,
    fontWeight: system.fontWeight.medium,
    backgroundColor: system.legacy.color.surface.transparent,
    flex: '0 0 auto',
    minWidth: 0,
    alignItems: 'center',
    padding: `0 ${system.legacy.padding.md}`,
    height: system.legacy.size.md,
    cursor: 'pointer',
    color: system.color.fg.default,
    position: 'relative',
    transition: 'background 150ms ease, color 150ms ease',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: 'currentColor',
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,

    '&:has(span)': {
      display: 'flex',
      gap: base.legacy.size75,
    },

    '&:hover, &.hover': {
      color: system.color.fg.strong,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },

    '&:focus-visible, &.focus': {
      // focus outline for Windows high contrast theme
      outline: `${px2rem(2)} solid transparent`,
      backgroundColor: system.legacy.color.surface.transparent,
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
        [systemIconStencil.vars.color]: system.color.fg.default,
      },
    },

    '&[aria-selected=true]': {
      color: system.color.fg.default,
      [systemIconStencil.vars.color]: system.color.fg.default,
      '&:hover, &.hover, &:focus-visible, &.focus': {
        color: system.color.fg.default,
        [systemIconStencil.vars.color]: system.color.fg.default,
      },
    },
  },
  modifiers: {
    variant: {
      filled: {
        border: `${px2rem(1)} solid transparent`,

        '&:hover, &.hover': {
          backgroundColor: system.legacy.color.surface.overlay.hover.default,
        },

        '&:focus-visible, &.focus': {
          ...focusRing({
            width: 2,
            separation: 2,
            innerColor: system.legacy.color.focus.inverse,
            outerColor: system.legacy.color.brand.focus.primary,
          }),
        },

        '&[aria-selected=true]': {
          backgroundColor: system.legacy.color.surface.overlay.pressed.default,
          borderColor: system.color.border.input.default,
          '&:hover, &.hover, &:focus-visible, &.focus': {
            backgroundColor: system.legacy.color.surface.overlay.pressed.default,
          },

          '&:focus-visible, &.focus': {
            borderWidth: px2rem(2),
            marginInline: px2rem(-1),
          },

          // Non-color outline indicator for Windows high contrast theme
          '@media (forced-colors: active)': {
            outline: `${px2rem(2)} solid ButtonBorder`,
          },
        },
      },
      outlined: {
        border: `${px2rem(1)} solid ${system.legacy.color.border.default}`,
        // adding extra margin to the left and right of the tab item to avoid visual glitch when the tab is selected
        marginInline: px2rem(1),

        '&:hover, &.hover': {
          borderColor: system.legacy.color.border.strong,
        },

        '&:focus-visible, &.focus': {
          marginInline: px2rem(0),
          border: `${px2rem(2)} solid ${system.legacy.color.brand.focus.primary}`,
        },

        '&[aria-selected=true]': {
          marginInline: px2rem(0),
          border: `${px2rem(2)} solid ${system.color.border.contrast.default}`,
          '&:hover, &.hover, &:focus-visible, &.focus': {
            border: `${px2rem(2)} solid ${system.color.border.contrast.default}`,
          },

          '&:focus-visible, &.focus': {
            ...focusRing({
              width: 2,
              separation: 2,
              innerColor: system.legacy.color.focus.inverse,
              outerColor: system.legacy.color.brand.focus.primary,
            }),
          },
        },
      },
    },
  },
});

export const StyledTabItem = createComponent('button')<TabsItemProps>({
  displayName: 'StyledTabItem',
  Component: ({children, variant, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tabItemStencil({variant}))}>
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
})<TabsItemProps>(({children, ...elemProps}, Element, model) => {
  const modality = useModalityType();

  return (
    <OverflowTooltip>
      <StyledTabItem
        as={Element}
        maxWidth={modality === 'touch' ? undefined : 280}
        {...elemProps}
        variant={model.state.variant}
      >
        {children}
      </StyledTabItem>
    </OverflowTooltip>
  );
});
