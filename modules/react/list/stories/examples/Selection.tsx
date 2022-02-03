import React from 'react';

import {
  useListRegisterItem,
  useRovingFocus,
  useRenderItems,
  SelectionModel,
  useSelectionItem,
  useSelectionModel,
} from '@workday/canvas-kit-react/list';
import {composeHooks} from '@workday/canvas-kit-react/common';

const ListModelContext = React.createContext<SelectionModel>({} as any);

const List = (props: {children: React.ReactNode}) => {
  const model = useSelectionModel();

  return (
    <ListModelContext.Provider value={model}>
      <ul>{useRenderItems(model, props.children)}</ul>
      <p>Cursor ID: {model.state.cursorId}</p>
      <p>Selected ID: {model.state.selectedIds[0]}</p>
    </ListModelContext.Provider>
  );
};

const useItem = composeHooks(useSelectionItem, useRovingFocus, useListRegisterItem);

const Item = (elemProps: {children: React.ReactNode}) => {
  const model = React.useContext(ListModelContext);

  const props = useItem(model, elemProps);

  return (
    <button
      role="listitem"
      {...props}
      style={{background: model.state.selectedIds.includes(props.name) ? 'gray' : 'white'}}
    >
      {props.children} - {props['data-name']}
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
