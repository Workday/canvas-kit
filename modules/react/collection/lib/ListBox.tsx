import React from 'react';
import {
  createContainer,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useListModel} from './useListModel';
import {useListRenderItems} from './useListRenderItem';
import {useListItemRegister} from './useListItemRegister';

export interface ListBoxProps<T = any> extends Omit<FlexProps, 'children'> {
  children?: React.ReactNode | ((item: T, index: number) => React.ReactNode);
  /**
   * Set the margin top of the list box. You must use this prop and not style any other way. The
   * `Menu` uses virtualization and needs margins to be set on the correct element. This ensure
   * proper rendering. If a `marginTop` is not provided, the value falls back to `marginY`.
   */
  marginTop?: FlexProps['marginTop'];
  /**
   * Set the margin bottom of the list box. You must use this prop and not style any other way. The
   * `Menu` uses virtualization and needs margins to be set on the correct element. This ensure
   * proper rendering. If a `marginBottom` is not provided, the value falls back to `marginY`.
   */
  marginBottom?: FlexProps['marginBottom'];
  /**
   * Set the margin top and bottom of the list box. You must use this prop and not style any other way. The
   * `Menu` uses virtualization and needs margins to be set on the correct element. This ensure
   * proper rendering.
   */
  marginY?: FlexProps['marginY'];
}

export const ListBoxItem = createSubcomponent('li')({
  displayName: 'Item',
  modelHook: useListModel,
  elemPropsHook: useListItemRegister,
})<FlexProps>((elemProps, Element) => {
  return <Element {...mergeStyles(elemProps)} />;
});

export const useListBox = createElemPropsHook(useListModel)(model => {
  return {
    style: {
      position: 'relative' as const,
      height: model.state.isVirtualized ? model.state.UNSTABLE_virtual.getTotalSize() : undefined,
    },
  };
});

const listBoxContainerStencil = createStencil({
  base: {
    '& :where([data-part="list"])': {
      display: 'flex',
      flexDirection: 'column',
      marginBlockStart: system.space.zero,
      marginBlockEnd: system.space.zero,
    },
  },
  modifiers: {
    orientation: {
      vertical: {
        overflowY: 'auto',
      },
      horizontal: {
        overflowY: undefined,
        '& :where([data-part="list"])': {
          flexDirection: 'row',
        },
      },
    },
  },
});

/**
 * The `ListBox` component that offers vertical rendering of a collection in the form of a
 * 2-dimension list. It supports virtualization, rendering only visible items in the DOM while also
 * providing aria attributes to allow screen readers to still navigate virtual lists. The `ListBox`
 * contains a basic `ListBox.Item` that renders list items that render correctly with virtualization
 * and adds `aria-setsize` and `aria-posinset` for screen readers.

 * The `ListBox` is very basic and only adds enough functionality to render correctly. No additional
 * behaviors are added to navigate or select. React Hooks are provided to add this functionality and
 * are used by higher level components like `Menu` and `Menu.Item` which utilize `ListBox`. The
 * `ListBox` contains two `Box` elements:
 *
 * - Outer Box: Presentational container element responsible for overflow and height. `height` and
 *   `maxHeight` props will be applied here.
 * - Inner Box: The element responsible for the virtual container. Height is controlled by the model
 *   and cannot be changed by the developer. All props and ref will be spread to this element.
 */
export const ListBox = createContainer('ul')({
  displayName: 'ListBox',
  modelHook: useListModel,
  elemPropsHook: useListBox,
  subComponents: {
    /**
     * The `ListBox.Item` is a simple placeholder for listbox items. The functionality of a
     * collection item varies between components. For example, a `Tabs.Item` and a `Menu.Item` have
     * shared functionality, but have different behavior. All collection-based components should
     * implement a custom `Item` subcomponent using the collection-based behavior hooks. The [Roving
     * Tabindex](#roving-tabindex) example uses the `elemPropsHook` to provide additional
     * functionality. `elemPropsHook` is provided on all compound components and is useful in the
     * example to add additional functionality without making a new component.
     */
    Item: ListBoxItem,
  },
})<ListBoxProps>(
  (
    {height, maxHeight, marginY, marginBottom, overflowY, marginTop, ...elemProps},
    Element,
    model
  ) => {
    // We're removing `marginY, marginBottom, overflowY, marginTo` from elemProps and applying them to the container as to not interfere with the virtualization size. We set
    // the `marginY` on the Flex to `0` to avoid inaccurate scrollbars
    return (
      <div
        ref={model.state.containerRef}
        {...handleCsProp(
          {
            style: {
              height,
              maxHeight,
              marginBottom: marginBottom ?? marginY,
              marginTop: marginTop ?? marginY,
            },
          },
          listBoxContainerStencil({orientation: model.state.orientation})
        )}
      >
        <Element {...mergeStyles(elemProps)} data-part="list">
          {useListRenderItems(model, elemProps.children)}
        </Element>
      </div>
    );
  }
);
