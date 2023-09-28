import React from 'react';

import {ListBox, useListModel, useListItemRegister} from '@workday/canvas-kit-react/collection';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';

const simpleItems = ['Pizza', 'Chocolate', 'Cheeseburgers'];

const items = [
  {id: 'Atlanta (United States)', disabled: false},
  {id: 'Amsterdam (Europe)', disabled: false},
  {id: 'Austin (United States)', disabled: false},
  {id: 'Beaverton (United States)', disabled: false},
  {id: 'Belfast (Europe)', disabled: false},
  {id: 'Berlin (Europe)', disabled: false},
  {id: 'Boston (United States)', disabled: false},
  {id: 'Boulder (United States)', disabled: false},
  {id: 'Chicago (United States)', disabled: false},
];

export const RegisteringItems = () => {
  return (
    <Flex gap="m" display="inline-flex">
      <Flex flexDirection="column">
        <Text marginBottom="m" fontWeight="bold">
          An Array of Objects
        </Text>
        <ListBox items={items} width="200px">
          {item => (
            <ListBox.Item paddingBottom="s" data-id={item.id}>
              {item.id}
            </ListBox.Item>
          )}
        </ListBox>
      </Flex>
      <Flex flexDirection="column">
        <Text marginBottom="m" fontWeight="bold">
          An Array of Strings
        </Text>
        <ListBox items={simpleItems} width="200px" maxHeight={200}>
          {item => <ListBox.Item paddingBottom="s">{item}</ListBox.Item>}
        </ListBox>
      </Flex>
    </Flex>
  );
};
