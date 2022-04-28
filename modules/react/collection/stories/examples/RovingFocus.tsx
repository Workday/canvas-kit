import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListRenderItems,
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
    </ListModelContext.Provider>
  );
};

const useItem = composeHooks(useListItemRovingFocus, useListItemRegister);

const Item = (elemProps: ListItemProps) => {
  const model = React.useContext(ListModelContext);

  const props = useItem(model, elemProps);

  return (
    <li {...props}>
      {props.children} - {props['data-id']}
    </li>
  );
};

export const RovingFocus = () => {
  return (
    <List>
      <Item>First</Item>
      <Item>Second</Item>
      <Item>Third</Item>
    </List>
  );
};
