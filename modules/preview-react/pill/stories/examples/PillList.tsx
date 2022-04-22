import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {HStack} from '@workday/canvas-kit-react';

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

export const ListOfPills = () => (
  <HStack shouldWrapChildren spacing="zero" flexWrap="wrap">
    {data.map(cat => {
      return (
        <Pill
          marginBottom="xxs"
          onDelete={() => console.log(`delete ${cat}`)}
          marginInlineEnd="xxs"
        >
          <Pill.Label>{cat}</Pill.Label>
          <Pill.IconButton />
        </Pill>
      );
    })}
  </HStack>
);
