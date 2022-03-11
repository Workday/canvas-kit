import React from 'react';

import {
  useListModel,
  useListRegisterItem,
  useListRenderItems,
  ListModel,
  ListProps,
  ListItemProps,
} from '@workday/canvas-kit-react/list';

const ListModelContext = React.createContext<ListModel>({} as any);

const List = (props: ListProps) => {
  const model = useListModel();

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useListRenderItems(model, props.children)}</ul>
    </ListModelContext.Provider>
  );
};

const Item = (elemProps: ListItemProps) => {
  const model = React.useContext(ListModelContext);

  const props = useListRegisterItem(model, elemProps);

  return (
    <li {...props}>
      {props.children} - {props['data-id']}
    </li>
  );
};

export const NamedItems = () => {
  return (
    <List>
      <Item name="first">First</Item>
      <Item name="second">Second</Item>
    </List>
  );
};
