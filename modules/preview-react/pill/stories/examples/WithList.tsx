import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {Flex} from '@workday/canvas-kit-react/layout';

const data = [
  'Shoes',
  'Pants',
  'Dress Shoes',
  'Color',
  'Accessories',
  'Luxury',
  'Casual',
  'Hats',
  'Beanies',
  'Glasses',
  'Jewelry',
];

export const WithList = () => {
  const [items, setItems] = React.useState(data);

  return (
    <Flex flexWrap="wrap">
      {items.map((cat, index) => {
        return (
          <Pill key={index} variant="removable" marginBottom="xxs" marginInlineEnd="xxs">
            <Pill.Label>{cat}</Pill.Label>
            <Pill.IconButton onClick={() => setItems(items.filter(i => i !== cat))} />
          </Pill>
        );
      })}
    </Flex>
  );
};
