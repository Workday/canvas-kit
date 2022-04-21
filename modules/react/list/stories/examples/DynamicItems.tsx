import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/list';

interface Item {
  id: string;
  text: string;
}

const items: Item[] = Array(1000)
  .fill(true)
  .map((_, index) => ({id: String(index + 1), text: `Item - ${index + 1}`}));

export const DynamicItems = () => {
  return (
    <ListBox items={items} maxHeight={300}>
      {(item: Item) => <ListBox.Item data-id={item.id}>{item.text}</ListBox.Item>}
    </ListBox>
  );
};
