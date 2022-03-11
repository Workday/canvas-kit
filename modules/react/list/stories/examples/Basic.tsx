import React from 'react';

import {
  useListModel,
  useListRegisterItem,
  useListRenderItems,
  ListModel,
  ListItemProps,
  ListProps,
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
      {useListRenderItems(model, props.children)} - {props['data-id']}
    </li>
  );
};

export const Basic = () => {
  return (
    <List>
      <Item>First</Item>
      <Item>Second</Item>
    </List>
  );
};
