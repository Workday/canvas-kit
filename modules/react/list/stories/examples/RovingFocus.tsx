import React from 'react';

import {
  useListRegisterItem,
  useRovingFocus,
  useRenderItems,
  useCursorModel,
  ListModel,
} from '@workday/canvas-kit-react/list';
import {composeHooks} from '@workday/canvas-kit-react/common';

const ListModelContext = React.createContext<ListModel>({} as any);

const List = (props: {children: React.ReactNode}) => {
  const model = useCursorModel();

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useRenderItems(model, props.children)}</ul>
      <p>Cursor ID: {model.state.cursorId}</p>
    </ListModelContext.Provider>
  );
};

const useItem = composeHooks(useRovingFocus, useListRegisterItem);

const Item = (elemProps: {children: React.ReactNode}) => {
  const model = React.useContext(ListModelContext);

  const props = useItem(model, elemProps);

  return (
    <li {...props}>
      {props.children} - {props['data-name']}
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
