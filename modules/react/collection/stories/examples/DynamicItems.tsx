import React from 'react';

import {ListBox, useListModel, useListItemRegister} from '@workday/canvas-kit-react/collection';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';

interface Item {
  id: string;
  text: string;
}

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
  {id: 'Dallas (United States)', disabled: false},
  {id: 'Denver (United States)', disabled: false},
  {id: 'Dublin (Europe)', disabled: false},
  {id: 'Irvine (United States)', disabled: false},
  {id: 'Minneapolis (United States)', disabled: false},
  {id: 'New York (United States)', disabled: false},
  {id: 'Orlando (United States)', disabled: false},
  {id: 'Palo Alto (United States)', disabled: false},
  {id: 'Philadelphia (United States)', disabled: false},
  {id: 'Pleasanton (United States)', disabled: false},
  {id: 'Raleigh (United States)', disabled: false},
  {id: 'San Francisco (United States)', disabled: false},
  {id: 'San Mateo (United States)', disabled: false},
  {id: 'Stockholm (Europe)', disabled: false},
  {id: 'Toronto (Canada)', disabled: false},
  {id: 'Victoria (Canada)', disabled: false},
  {id: 'Vienna (Europe)', disabled: false},
  {id: 'Warsaw (Europe)', disabled: false},
  {id: 'Washington, DC (United States)', disabled: false},
  {id: 'Zurich (Europe)', disabled: false},
];

export const DynamicItems = () => {
  return (
    <Flex gap="m" display="inline-flex">
      <Flex flexDirection="column">
        <Text marginBottom="m" fontWeight="bold">
          An Array of Objects
        </Text>
        <ListBox items={items} width="200px" maxHeight={200}>
          {(item: Item) => (
            <ListBox.Item paddingBottom="s" data-id={item.id}>
              {item.id}
            </ListBox.Item>
          )}
        </ListBox>
      </Flex>
    </Flex>
  );
};
