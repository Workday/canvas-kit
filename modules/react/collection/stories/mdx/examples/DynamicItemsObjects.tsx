import {ListBox} from '@workday/canvas-kit-react/collection';

const items = [
  {id: 'Atlanta (United States)'},
  {id: 'Amsterdam (Europe)'},
  {id: 'Austin (United States)'},
  {id: 'Beaverton (United States)', disabled: true},
  {id: 'Belfast (Europe)'},
  {id: 'Berlin (Europe)'},
  {id: 'Boston (United States)'},
  {id: 'Boulder (United States)'},
  {id: 'Chicago (United States)'},
];

export const DynamicItemsObjects = () => (
  <ListBox items={items}>
    {item => <ListBox.Item aria-disabled={item.disabled}>{item.id}</ListBox.Item>}
  </ListBox>
);
