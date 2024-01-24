import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const movieListItems = [
  {
    Title: 'The Lion King',
    id: '123',
    Year: '2019',
    Runtime: '118 min',
  },
  {
    Title: 'Mowgli: Legend of the Jungle',
    id: '234',
    Year: '2018',
    Runtime: '104 min',
  },
  {
    Title: 'Doctor Strange',
    id: '345',
    Year: '2016',
    Runtime: '115 min',
  },
  {
    Title: 'John Wick',
    Year: '2014',
    id: '456',
    Runtime: '101 min',
  },
  {
    Title: 'The Notebook',
    id: '567',
    Year: '2004',
    Runtime: '123 min',
  },
];

export const FetchingDynamicItems = () => {
  const [value, setValue] = React.useState('');
  const [moviesLists, setMoviesList] = React.useState([]);
  const [loadingStatus, setLoadingStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const [placeholder, setPlaceholder] = React.useState('Choose an Option');

  const model = useSelectModel({
    items: moviesLists,
    getTextValue: item => item.Title,
    getId: item => item.id,
    initialSelectedIds: [value],
  });

  React.useEffect(() => {
    if (loadingStatus === 'loading') {
      const mockLoading = setTimeout(() => {
        setLoadingStatus('success');
        setPlaceholder('Choose an Option');
        setMoviesList(movieListItems);
        setValue('456');
        model.events.select({id: '456'});
      }, 3000);

      return () => {
        clearTimeout(mockLoading);
      };
    }
  }, [loadingStatus, model.events]);

  return (
    <Flex flexDirection="column">
      <Select model={model}>
        <FormField label="Choose a Film">
          <Select.Input placeholder={placeholder} onChange={e => setValue(e.target.value)} />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => {
                  return (
                    <Select.Item data-id={item.id} data-text={item.Title}>
                      {item.Title}
                    </Select.Item>
                  );
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      Selected Value: {value}
      <PrimaryButton
        onClick={() => {
          setPlaceholder('Loading Items...');
          setLoadingStatus('loading');
        }}
      >
        Get Items
      </PrimaryButton>
    </Flex>
  );
};
