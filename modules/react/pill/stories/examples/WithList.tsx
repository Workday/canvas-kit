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
  const buttonRefs = React.useRef(new Map<string, HTMLButtonElement>());
  const pendingFocus = React.useRef<string | null>(null);

  React.useLayoutEffect(() => {
    const category = pendingFocus.current;
    if (!category) {
      return;
    }
    pendingFocus.current = null;
    buttonRefs.current.get(category)?.focus();
  }, [items]);

  const removeItem = (category: string) => {
    const index = items.indexOf(category);
    const nextItems = items.filter(item => item !== category);
    pendingFocus.current = nextItems[index] ?? nextItems[index - 1] ?? null;
    setItems(nextItems);
  };

  return (
    <ul className={listStyles}>
      {items.map(cat => {
        return (
          <li key={cat}>
            <Pill variant="removable">
              <Pill.Label>{cat}</Pill.Label>
              <Pill.IconButton
                ref={element => {
                  if (element) {
                    buttonRefs.current.set(cat, element);
                  } else {
                    buttonRefs.current.delete(cat);
                  }
                }}
                aria-label="Remove"
                onClick={() => removeItem(cat)}
              />
            </Pill>
          </li>
        );
      })}
    </ul>
  );
};
