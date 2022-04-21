import React from 'react';

import {
  useListItemRegister,
  useListRovingFocus,
  useListRenderItems,
  useListModel,
  ListModel,
  ListProps,
  ListItemProps,
} from '@workday/canvas-kit-react/list';
import {composeHooks} from '@workday/canvas-kit-react/common';

const ListModelContext = React.createContext<ListModel>({} as any);

const List = (props: ListProps) => {
  const model = useListModel();

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useListRenderItems(model, props.children)}</ul>
      <p>Cursor ID: {model.state.cursorId}</p>
    </ListModelContext.Provider>
  );
};

const useItem = composeHooks(useListRovingFocus, useListItemRegister);

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
