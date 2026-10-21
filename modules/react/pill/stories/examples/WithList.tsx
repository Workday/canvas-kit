import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
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

const listStyles = createStyles({
  display: 'flex',
  flexWrap: 'wrap',
  gap: system.gap.sm,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const WithList = () => {
  const [items, setItems] = React.useState(data);

  return (
    <ul className={listStyles}>
      {items.map(cat => {
        return (
          <li key={cat}>
            <Pill variant="removable">
              <Pill.Label>{cat}</Pill.Label>
              <Pill.IconButton
                aria-label="Remove"
                onClick={() => setItems(items.filter(i => i !== cat))}
              />
            </Pill>
          </li>
        );
      })}
    </ul>
  );
};
