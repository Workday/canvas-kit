import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useListModel,
  ListItemProps,
  ListBox,
  getCursor,
} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';

// Create a custom hook for our item
const useItem = composeHooks(
  createElemPropsHook(useListModel)((model, ref, elemProps: ListItemProps) => {
    return {
      role: 'listitem',
      style: {
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      },
    };
  }),
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

// Create a custom item
const SelectableItem = createSubcomponent('button')({
  displayName: 'SelectableItem',
  modelHook: useListModel,
  elemPropsHook: useItem,
})<ListItemProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

export const Selection = () => {
  const model = useListModel({
    initialSelectedIds: ['first'],
    orientation: 'horizontal',
  });
  return (
    <>
      <ListBox model={model}>
        <SelectableItem data-id="first">First</SelectableItem>
        <SelectableItem data-id="second">Second</SelectableItem>
        <SelectableItem data-id="third">Third</SelectableItem>
      </ListBox>

      <p>Cursor ID: {getCursor(model.state)}</p>
      <p>Selected ID: {model.state.selectedIds[0]}</p>
    </>
  );
};
