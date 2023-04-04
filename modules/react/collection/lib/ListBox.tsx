import React from 'react';
import {
  createContainer,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Box, Flex, FlexProps} from '@workday/canvas-kit-react/layout';

import {useListModel} from './useListModel';
import {useListRenderItems} from './useListRenderItem';
import {useListItemRegister} from './useListItemRegister';

export interface ListBoxProps extends Omit<FlexProps, 'children'> {
  children?: React.ReactNode | ((item: any, index: number) => React.ReactNode);
}

export const ListBoxItem = createSubcomponent('li')({
  displayName: 'Item',
  modelHook: useListModel,
  elemPropsHook: useListItemRegister,
})<FlexProps>((elemProps, Element) => {
  return <Box as={Element} {...elemProps} />;
});

export const useListBox = createElemPropsHook(useListModel)(model => {
  return {
    style: {
      position: 'relative' as const,
      height: model.state.isVirtualized ? model.state.UNSTABLE_virtual.totalSize : undefined,
    },
  };
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
})<ListBoxProps>(({height, maxHeight, marginY, ...elemProps}, Element, model) => {
  // We're moving `marginY` to the container to not interfere with the virtualization size. We set
  // the `marginY` on the Flex to `0` to avoid inaccurate scrollbars

  // TODO figure out what style props should go to which `Box`
  return (
    <Box
      ref={model.state.containerRef}
      height={
        height || model.state.isVirtualized ? model.state.UNSTABLE_virtual.totalSize : undefined
      }
      marginY={marginY}
      maxHeight={maxHeight}
      overflowY={model.state.orientation === 'vertical' ? 'auto' : undefined}
    >
      <Flex as={Element} {...elemProps} marginY={0}>
        {useListRenderItems(model, elemProps.children)}
      </Flex>
    </Box>
  );
});
