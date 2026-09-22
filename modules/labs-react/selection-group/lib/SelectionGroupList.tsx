import * as React from 'react';

import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {cornerShapeStencil, createSubcomponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useSelectionGroupModel} from './hooks/useSelectionGroupModel';

export interface SelectionGroupListProps<T = any> extends CSProps {
  /**
   * Accessible label for the group. The label should state the selection mode, for example
   * `"Select one"` or `"Select all that apply"`, so the mode is clear before interacting. Required
   * unless `aria-labelledby` is provided or the group is wrapped in a `FormField` with a visible
   * label.
   */
  'aria-label'?: string;
  /**
   * ID of an element that labels the group. Use when the group label is rendered outside the list.
   */
  'aria-labelledby'?: string;
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

export const selectionGroupListStencil = createStencil({
  extends: cornerShapeStencil,
  base: {
    [cornerShapeStencil.vars.shape]: system.legacy.shape.lg,
    display: 'flex',
    flexWrap: 'wrap',
    gap: system.legacy.gap.xs,
    width: 'fit-content',
    boxSizing: 'border-box',
    // Notification states draw a ring around the whole group, so the container always reserves the
    // space the ring occupies. Without it the ring would sit underneath the opaque items.
    border: `${px2rem(2)} solid transparent`,
    padding: system.legacy.padding.xxs,
    transition: '100ms border-color',
  },
  modifiers: {
    width: {
      content: {},
      // `1fr` auto columns inside a `fit-content` grid all resolve to the widest item's
      // max-content width, which sizes every item to the longest label without measuring the DOM.
      equal: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: '1fr',
      },
      column: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: '100%',
      },
    },
    error: {
      error: {
        borderColor: system.legacy.color.brand.border.critical,
      },
      caution: {
        borderColor: system.legacy.color.brand.border.caution,
      },
    },
  },
});

export const SelectionGroupList = createSubcomponent('div')({
  displayName: 'SelectionGroup.List',
  modelHook: useSelectionGroupModel,
})<SelectionGroupListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      role={model.state.mode === 'single' ? 'radiogroup' : 'group'}
      aria-invalid={model.state['aria-invalid']}
      aria-describedby={model.state['aria-describedby']}
      {...handleCsProp(
        elemProps,
        selectionGroupListStencil({
          width: model.state.width,
          error: model.state.error,
        })
      )}
    >
      {useListRenderItems(model, children)}
    </Element>
  );
});
