import React from 'react';

import {
  useListRegisterItem,
  useListRovingFocus,
  useListRenderItems,
  ListModel,
  useListSelectItem,
  useListModel,
  multiSelectionManager,
  ListProps,
  ListItemProps,
} from '@workday/canvas-kit-react/list';
import {composeHooks} from '@workday/canvas-kit-react/common';

const ListModelContext = React.createContext<ListModel>({} as any);

const List = (props: ListProps) => {
  const model = useListModel({
    selection: multiSelectionManager,
  });

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useListRenderItems(model, props.children)}</ul>
      <p>Cursor ID: {model.state.cursorId}</p>
      <p>
        Selected ID: {(model.state.selectedIds !== 'all' ? model.state.selectedIds : []).join(',')}
      </p>
    </ListModelContext.Provider>
  );
};

const useItem = composeHooks(useListSelectItem, useListRovingFocus, useListRegisterItem);

const Item = (elemProps: ListItemProps) => {
  const model = React.useContext(ListModelContext);

  const props = useItem(model, elemProps);

  return (
    <button
      role="listitem"
      {...props}
      style={{background: model.state.selectedIds.includes(props.name) ? 'gray' : 'white'}}
    >
      {props.children} - {props['data-id']}
    </button>
  );
};

export const MultiSelection = () => {
  return (
    <List>
      <Item>First</Item>
      <Item>Second</Item>
      <Item>Third</Item>
    </List>
  );
};
