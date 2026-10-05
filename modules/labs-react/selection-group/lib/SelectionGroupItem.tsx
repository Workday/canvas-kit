import * as React from 'react';

import {isSelected} from '@workday/canvas-kit-react/collection';
import {cornerShapeStencil, createSubcomponent, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {SelectionGroupIcon} from './SelectionGroupIcon';
import {useSelectionGroupItem} from './hooks/useSelectionGroupItem';
import {useSelectionGroupModel} from './hooks/useSelectionGroupModel';

export interface SelectionGroupItemProps {
  /**
   * Optionally pass index to the item. This should be done if `SelectionGroup.Item` components were
   * created via a `map` function. This index will ensure keyboard navigation works even if items
   * are inserted out of order.
   */
  index?: number;
  /**
   * The contents of the item. This is text used as the accessible name of the button for screen
   * readers. Labels should be short and concise.
   */
  children?: React.ReactNode;
  /**
   * The identifier of the item. This identifier will be used in change events.
   * If this property is not provided, it will default to a string representation
   * of the zero-based index of the item when it was initialized.
   */
  'data-id'?: string;
  /**
   * Optional id. If not set, it will inherit the ID passed to the `SelectionGroup` component and
   * append the index at the end. Only set this for advanced cases.
   */
  id?: string;
}

export const selectionGroupItemStencil = createStencil({
  extends: cornerShapeStencil,
  parts: {
    label: 'selection-group-item-label',
  },
  base: ({labelPart}) => ({
    [cornerShapeStencil.vars.shape]: system.legacy.shape.lg,
    ...system.legacy.type.subtext.lg,
    display: 'inline-flex',
    alignItems: 'center',
    gap: base.legacy.size75,
    border: `${px2rem(1)} solid ${system.color.border.default}`,
    padding: `${system.legacy.padding.xs} ${system.legacy.padding.sm}`,
    backgroundColor: system.legacy.color.surface.default,
    color: system.color.fg.strong,
    cursor: 'pointer',
    textAlign: 'start',
    transition: 'background-color 80ms ease, color 80ms ease, border-color 80ms ease',
    [systemIconStencil.vars.color]: 'currentColor',
    [systemIconStencil.vars.accentColor]: 'currentColor',

    [labelPart]: {
      whiteSpace: 'nowrap',
    },

    '&:not([aria-checked="true"]):is(:hover, .hover)': {
      backgroundColor: system.legacy.color.surface.overlay.hover.default,
    },

    '&:not([aria-checked="true"]):is(:active, .active)': {
      backgroundColor: system.legacy.color.surface.overlay.pressed.default,
    },

    // The ring sits outside the item so it never competes with the selected background, and so a
    // selected item and a focused item remain visually distinct.
    '&:is(:focus-visible, .focus)': {
      ...focusRing({separation: 1}),
    },

    '&:is(:disabled, .disabled)': {
      cursor: 'default',
      opacity: system.opacity.disabled,

      '&:is(:hover, .hover)': {
        backgroundColor: system.legacy.color.surface.default,
      },
    },

    // No border on a selected item - a selected border would compete with the focus ring. The
    // transparent border keeps the item the same size as an unselected one.
    '&[aria-checked="true"]': {
      backgroundColor: system.legacy.color.brand.surface.selected,
      border: `${px2rem(1)} solid transparent`,
      color: system.legacy.color.brand.fg.selected,

      '&:is(:hover, .hover)': {
        backgroundColor: system.legacy.color.brand.surface.selected,
      },

      '&:is(:active, .active)': {
        backgroundColor: system.legacy.color.brand.surface.selected,
      },

      '&:is(:disabled, .disabled)': {
        backgroundColor: system.legacy.color.brand.surface.selected,
        color: system.legacy.color.brand.fg.selected,
      },
    },
  }),
  modifiers: {
    width: {
      content: {
        width: 'fit-content',
      },
      equal: {
        width: '100%',
      },
      column: {
        width: '100%',
      },
    },
  },
});

export const SelectionGroupItem = createSubcomponent('button')({
  displayName: 'SelectionGroup.Item',
  modelHook: useSelectionGroupModel,
  elemPropsHook: useSelectionGroupItem,
})<SelectionGroupItemProps>(({children, ...elemProps}, Element, model) => {
  const name = elemProps['data-id'] || '';
  const selected = !!name && isSelected(name, model.state);

  return (
    <Element
      {...handleCsProp(
        elemProps,
        selectionGroupItemStencil({
          width: model.state.width,
        })
      )}
    >
      <SelectionGroupIcon mode={model.state.mode} selected={selected} />
      {children && <span {...selectionGroupItemStencil.parts.label}>{children}</span>}
    </Element>
  );
});
