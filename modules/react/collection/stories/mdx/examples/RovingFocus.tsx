import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListModel,
  ListBox,
  ListItemProps,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

// create our own hook using `useListItemRegister` and `useListItemRovingFocus`. Note the
// `useListItemRegister` must be the last hook when using `composeHooks`
const useRovingFocusItem = composeHooks(useListItemRovingFocus, useListItemRegister);

// create our own item. We use `modelHook` to define which model should be used and `elemPropsHook`
// to determine which elemProps hook should be used. `elemProps` will be populated with props to
// pass to the element
const RovingFocusItem = createSubcomponent('li')({
  displayName: 'RovingFocusItem',
  modelHook: useListModel,
  elemPropsHook: useRovingFocusItem,
})<ListItemProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

export const RovingFocus = () => {
  return (
    <ListBox>
      {/* We can use `ListBox.Item` and add `useListItemRovingFocus`. Useful for one-off */}
      <ListBox.Item data-id="first" elemPropsHook={useListItemRovingFocus}>
        First
      </ListBox.Item>
      {/* Use a custom item. Useful for reusing components */}
      <RovingFocusItem data-id="second">Second</RovingFocusItem>
      <RovingFocusItem data-id="third">Third</RovingFocusItem>
    </ListBox>
  );
};
