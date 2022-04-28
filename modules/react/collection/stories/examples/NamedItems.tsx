import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/collection';

export const NamedItems = () => {
  return (
    <ListBox>
      <ListBox.Item data-id="first">First</ListBox.Item>
      <ListBox.Item data-id="second">Second</ListBox.Item>
    </ListBox>
  );
};
