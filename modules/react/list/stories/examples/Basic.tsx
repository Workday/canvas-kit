import React, {ReactFragment} from 'react';

import {
  useListModel,
  useListRegisterItem,
  useRenderItems,
  ListModel,
} from '@workday/canvas-kit-react/list';

const ListModelContext = React.createContext<ListModel>({} as any);

const List = (props: {children: React.ReactNode}) => {
  const model = useListModel();

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useRenderItems(model, props.children)}</ul>
    </ListModelContext.Provider>
  );
};

const Item = (elemProps: {children: React.ReactNode}) => {
  const model = React.useContext(ListModelContext);

  const props = useListRegisterItem(model, elemProps);

  return (
    <li {...props}>
      {props.children} - {props['data-name']}
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
