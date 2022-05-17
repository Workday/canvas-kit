import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {Flex} from '@workday/canvas-kit-react';

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

export const WithList = () => (
  <Flex flexWrap="wrap">
    {data.map((cat, index) => {
      return (
        <Pill key={index} variant="removable" marginBottom="xxs" marginInlineEnd="xxs">
          <Pill.Label>{cat}</Pill.Label>
          <Pill.IconButton onClick={() => console.log(`delete ${cat}`)} />
        </Pill>
      );
    })}
  </Flex>
);
