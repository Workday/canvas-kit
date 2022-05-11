import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListRenderItems,
  useListItemSelect,
  useListModel,
  multiSelectionManager,
  ListProps,
  ListItemProps,
  ListBox,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const ListModelContext = useListModel.Context;

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

const useMultiSelectableItem = useItem;

const MultiSelectableItem = createSubcomponent('button')({
  displayName: 'MultiSelectableItem',
  modelHook: useListModel,
  elemPropsHook: useMultiSelectableItem,
});

const Item = (elemProps: ListItemProps) => {
  const model = React.useContext(ListModelContext);

  const props = useItem(model, elemProps);

  return (
    <button
      role="listitem"
      {...props}
      style={{background: model.state.selectedIds.includes(props['data-id']) ? 'gray' : 'white'}}
    >
      {props.children} - {props['data-id']}
    </button>
  );
};

export const MultiSelection = () => {
  const model = useListModel({
    initialSelectedIds: ['first', 'second'],
  });
  return (
    <>
      <ListBox model={model}>
        <Item>First</Item>
        <Item>Second</Item>
        <Item>Third</Item>
      </ListBox>

      <p>Cursor ID: {model.state.cursorId}</p>
      <p>
        Selected IDs: {(model.state.selectedIds !== 'all' ? model.state.selectedIds : []).join(',')}
      </p>
    </>
  );
};
