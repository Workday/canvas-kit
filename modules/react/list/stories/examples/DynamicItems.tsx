import React from 'react';

import {
  useListModel,
  useListRegisterItem,
  useListRenderItems,
  ListModel,
  ListProps,
  ListItemProps,
} from '@workday/canvas-kit-react/list';

interface Item {
  id: string;
  text: string;
}

const ListModelContext = React.createContext<ListModel<Item>>({} as any);

const items = [
  {id: 'first', text: 'First'},
  {id: 'second', text: 'Second'},
];

const List = (props: ListProps) => {
  const model = useListModel<Item>({
    items,
  });

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

export const DynamicItems = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <List>{(item: Item) => <Item name={item.id}>{item.id}</Item>}</List>
    </>
  );
};
