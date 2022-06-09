import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useListModel,
  ListItemProps,
  ListBox,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';
import {multiSelectionManager} from '../../lib/useSelectionListModel';

const useMultiSelectItem = composeHooks(
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

const Item = createSubcomponent('button')({
  displayName: 'MultiSelectableItem',
  modelHook: useListModel,
  elemPropsHook: useMultiSelectItem,
})<ListItemProps>((elemProps, Element, model) => {
  return (
    <Element
      role="listitem"
      {...elemProps}
      style={{
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      }}
    />
  );
});

export const MultiSelection = () => {
  const model = useListModel({
    initialSelectedIds: ['first', 'second'],
    selection: multiSelectionManager,
    orientation: 'horizontal',
  });
  return (
    <>
      <ListBox model={model}>
        <Item data-id="first">First</Item>
        <Item data-id="second">Second</Item>
        <Item data-id="third">Third</Item>
      </ListBox>

      <p>Cursor ID: {model.state.cursorId}</p>
      <p>
        Selected IDs: {(model.state.selectedIds !== 'all' ? model.state.selectedIds : []).join(',')}
      </p>
    </>
  );
};
