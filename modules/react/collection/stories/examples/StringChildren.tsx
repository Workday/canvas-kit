import React from 'react';

import {
  ListBox,
  useListItemRegister,
  useListItemAllowChildStrings,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useItem = composeHooks(useListItemAllowChildStrings, useListItemRegister);

const Item = createSubcomponent('div')({
  modelHook: useListModel,
  elemPropsHook: useItem,
})((elemProps, Element) => {
  return <Element {...elemProps} />;
});

export const StringChildren = () => {
  const model = useListModel();

  return (
    <>
      <ListBox model={model}>
        <Item>First</Item>
        <Item>Second</Item>
      </ListBox>
      <div id="selected">{model.state.selectedIds[0]}</div>
    </>
  );
};
