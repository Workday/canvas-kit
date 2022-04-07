import React from 'react';
import {createContainerComponent, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {useListModel2} from './useListModel';
import {useListRenderItems} from './useListRenderItem';
import {useListRegisterItem} from './useListRegisterItem';
export interface ListBoxProps extends BoxProps {
  children?: React.ReactNode | ((item: any) => React.ReactNode);
}

export const ListBoxItem = createSubcomponent('li')({
  displayName: 'Item',
  modelHook: useListModel2,
  elemPropsHook: useListRegisterItem,
})<BoxProps>((elemProps, Element) => {
  // Question: the `_` is the model, but it isn't used. `Element` is more common, should that go second?
  return <Box as={Element} {...elemProps} />;
});

/**
 * Basic list box that supports virtualization. `ListBox.Item` contains a very simple list item
 * without much functionality. The `ListBox` contains two `Box` elements:
 * - Outer Box: Presentational container element responsible for overflow and height. `height` and
 *   `maxHeight` props will be applied here.
 * - Inner Box: The element responsible for the virtual container. Height is controlled by the model
 *   and cannot be changed by the developer. All props and ref will be spread to this element.
 */
export const ListBox = createContainerComponent('ul')({
  displayName: 'ListBox',
  modelHook: useListModel2,
  subComponents: {
    /**
     * Extremely simple ListBox item that contains no functionality other than registering items and
     * adding aria virtualization attributes. If you need more functionality, create your own
     * component using list item hooks.
     */
    Item: ListBoxItem,
  },
})<ListBoxProps>(({height, maxHeight, ...elemProps}, Element, model) => {
  console.log('ref', elemProps.ref, Element);
  // TODO figure out what style props should go to which `Box`
  return (
    <Box
      ref={model.state.containerRef}
      height={height}
      maxHeight={maxHeight}
      overflowY={model.state.orientation === 'vertical' ? 'auto' : undefined}
    >
      <Box
        as={Element}
        style={{position: 'relative', height: model.state.UNSTABLE_virtual.totalSize}}
        {...elemProps}
      >
        {useListRenderItems(model, elemProps.children)}
      </Box>
    </Box>
  );
});
