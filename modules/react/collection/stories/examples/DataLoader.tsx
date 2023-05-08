import React from 'react';

import {
  ListBox,
  useListLoader,
  useListModel,
  LoadReturn,
} from '@workday/canvas-kit-react/collection';
import {Box} from '@workday/canvas-kit-react/layout';
import {composeHooks} from '@workday/canvas-kit-react/common';
import {useListItemSelect} from '../../lib/useListItemSelect';
import {useListItemRovingFocus} from '../../lib/useListItemRovingFocus';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const useListItem = composeHooks(useListItemSelect, useListItemRovingFocus);

const colors = ['Blue', 'Red', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return `${pickRandom(colors)} ${pickRandom(fruits)} ${index + 1}`;
  });

export const DataLoader = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  const {model, loader} = useListLoader(
    {
      getId: (item: string) => item,
      getTextValue: (item: string) => item,
      shouldVirtualize: true,
      total: 1000,
      pageSize: 20,
      async load({pageNumber, pageSize}) {
        setMessages(messages => messages.concat(`Page ${pageNumber} loading`));

        // Return a promise, but use setTimeout to mock a delayed server response
        return new Promise<LoadReturn<string>>(resolve => {
          setTimeout(() => {
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;

            const total = options.length;
            const items = options.slice(start, end);

            setMessages(messages => messages.concat(`Page ${pageNumber} loaded`));

            resolve({
              items,
              total,
            });
          }, 500);
        });
      },
    },
    useListModel
  );

  return (
    <>
      <ListBox model={model} maxHeight={400}>
        {item => (
          <ListBox.Item
            as="button"
            role="listitem"
            elemPropsHook={useListItem}
            height={20}
            background="transparent"
            border="none"
          >
            {item}
          </ListBox.Item>
        )}
      </ListBox>
      <Box as="ul" maxHeight={400} overflowY="auto">
        {messages.map(message => (
          <li key={message}>{message}</li>
        ))}
      </Box>
    </>
  );
};
