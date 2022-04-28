import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListRenderItems,
  useListItemSelect,
  useListModel,
  ListProps,
  ListItemProps,
} from '@workday/canvas-kit-react/collection';
import {composeHooks} from '@workday/canvas-kit-react/common';

const ListModelContext = useListModel.Context;

const List = (props: ListProps) => {
  const model = useListModel();

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useListRenderItems(model, props.children)}</ul>
      <p>Cursor ID: {model.state.cursorId}</p>
      <p>Selected ID: {model.state.selectedIds[0]}</p>
    </ListModelContext.Provider>
  );
};

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

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

export const Selection = () => {
  return (
    <List>
      <Item>First</Item>
      <Item>Second</Item>
      <Item>Third</Item>
    </List>
  );
};
