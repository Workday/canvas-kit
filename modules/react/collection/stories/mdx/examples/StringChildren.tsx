import React from 'react';

import {
  ListBox,
  useListItemRegister,
  useListItemAllowChildStrings,
  useListItemSelect,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useItem = composeHooks(useListItemSelect, useListItemRegister, useListItemAllowChildStrings);

const Item = createSubcomponent('button')({
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
      <div>
        Selected: <span id="selected">{model.state.selectedIds[0] || 'Nothing'}</span>
      </div>
    </>
  );
};
