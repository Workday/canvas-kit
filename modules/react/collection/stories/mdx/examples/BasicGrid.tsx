import React from 'react';

import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {
  ListBox,
  useGridModel,
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

const Item = createSubcomponent('button')({
  modelHook: useGridModel,
  elemPropsHook: useItem,
})((elemProps, Element, model) => {
  return (
    <Box
      as={Element}
      {...elemProps}
      width={40}
      border="solid 1px black"
      style={{
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      }}
    />
  );
});

export const BasicGrid = () => {
  const model = useGridModel({
    columnCount: 5,
    // @ts-ignore Create an array of [{id: 1}, ...{id: n}]
    items: [...Array(25).keys()].map(i => ({id: `${i + 1}`})),
    // we don't need virtualization here
    shouldVirtualize: false,
  });

  return (
    <ListBox model={model} as={Flex} flexDirection="row" flexWrap="wrap" width={200}>
      {item => <Item>{item.id}</Item>}
    </ListBox>
  );
};
