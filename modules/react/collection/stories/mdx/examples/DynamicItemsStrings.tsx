import {ListBox} from '@workday/canvas-kit-react/collection';

const items = ['Pizza', 'Chocolate', 'Cheeseburgers'];

export const DynamicItemsStrings = () => (
  <ListBox items={items}>{item => <ListBox.Item>{item}</ListBox.Item>}</ListBox>
);
