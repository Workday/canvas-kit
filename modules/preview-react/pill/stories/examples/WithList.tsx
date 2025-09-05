import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

const flexWrapStyles = createStyles({
  display: 'flex',
  flexWrap: 'wrap',
  gap: system.space.x2,
});

export const WithList = () => {
  const [items, setItems] = React.useState(data);

  return (
    <div className={flexWrapStyles}>
      {items.map((cat, index) => {
        return (
          <Pill key={index} variant="removable">
            <Pill.Label>{cat}</Pill.Label>
            <Pill.IconButton
              aria-label="Remove"
              onClick={() => setItems(items.filter(i => i !== cat))}
            />
          </Pill>
        );
      })}
    </div>
  );
};
