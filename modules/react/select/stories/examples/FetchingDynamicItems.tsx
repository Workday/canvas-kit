import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useMount} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  maxWidth: px2rem(300),
});

const movieListItems = [
  {
    label: 'The Lion King',
    serverId: '123',
    Year: '2019',
    Runtime: '118 min',
  },
  {
    label: 'Mowgli: Legend of the Jungle',
    serverId: '234',
    Year: '2018',
    Runtime: '104 min',
  },
  {
    label: 'Doctor Strange',
    serverId: '345',
    Year: '2016',
    Runtime: '115 min',
  },
  {
    label: 'John Wick',
    Year: '2014',
    serverId: '456',
    Runtime: '101 min',
  },
  {
    label: 'The Notebook',
    serverId: '567',
    Year: '2004',
    Runtime: '123 min',
  },
];

export const FetchingDynamicItems = () => {
  const [id, setId] = React.useState('456');
  const [moviesLists, setMoviesList] = React.useState<typeof movieListItems>([]);
  const [loadingStatus, setLoadingStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const loadingRef = React.useRef<ReturnType<typeof setTimeout>>();

  const model = useSelectModel({
    items: moviesLists,
    getTextValue: item => item.label,
    getId: item => item.serverId,
    initialSelectedIds: [id],
  });

  const stringValue = moviesLists.find(item => item.serverId === id)?.label || '';

  function loadItems() {
    setLoadingStatus('loading');
    loadingRef.current = setTimeout(() => {
      setLoadingStatus('success');
      setMoviesList(movieListItems);
    }, 1500);
  }

  useMount(() => {
    return () => {
      clearTimeout(loadingRef.current);
    };
  });

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Choose a Film</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input
              as={Select.Input}
              onChange={e => {
                setId(e.target.value);
              }}
              placeholder={loadingStatus}
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item.label}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <div data-testid="selected-id">Selected Id: {id}</div>
      <div data-testid="selected-value">Selected value: {stringValue}</div>
      <PrimaryButton
        onClick={() => {
          loadItems();
        }}
      >
        Get Items
      </PrimaryButton>
    </Flex>
  );
};
