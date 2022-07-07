import React from 'react';

import {ListBox, useListItemRovingFocus} from '@workday/canvas-kit-react/collection';

interface Item {
  id: string;
  text: string;
}

const items: Item[] = Array(1000)
  .fill(true)
  .map((_, index) => ({id: String(index + 1), text: `Item - ${index + 1}`}));

export const BasicVirtual = () => {
  return (
    <ListBox items={items} maxHeight={300}>
      {(item: Item) => (
        <ListBox.Item data-id={item.id} elemPropsHook={useListItemRovingFocus}>
          {item.text}
        </ListBox.Item>
      )}
    </ListBox>
  );
};
