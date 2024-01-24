import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

export const FetchingDynamicItems = () => {
  const [value, setValue] = React.useState('John Wick');
  const [moviesLists, setMoviesList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
        .then(response => response.json())
        .then(data => {
          setMoviesList(data);
        });
    }, 2000);
    setIsLoading(false);
  }, []);

  const model = useSelectModel({
    items: moviesLists,
    getTextValue: item => item.Title,
    getId: item => item.Title,
    initialSelectedIds: [value],
  });

  return (
    <Flex flexDirection="column">
      <Select model={model}>
        <FormField label="Choose a Film">
          <Select.Input
            placeholder={!isLoading ? 'Loading Items...' : 'Choose an Option'}
            onChange={e => setValue(e.target.value)}
          />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => {
                  return <Select.Item data-id={item.Title}>{item.Title}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      Selected Value: {value}
    </Flex>
  );
};
