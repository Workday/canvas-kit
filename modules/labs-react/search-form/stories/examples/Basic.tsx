import * as React from 'react';
import {MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-labs-react/layout';

const initialWineList = [
  'Beaujolais',
  'Bordeaux',
  'Cabernet Sauvignon',
  'Champagne',
  'Chardonnay',
  'Chianti',
  'Malbec',
  'Merlot',
  'Pinot Grigio',
  'Pinot Gris',
  'Pinot Noir',
  'Primitivo',
  'Prosecco',
  'Riesling',
  'Rioja',
  'Rosé',
  'Sauvignon Blanc',
  'Syrah',
  'Zinfandel',
];

export const Basic = () => {
  const [wineList, setWineList] = React.useState(initialWineList);
  // Tracking the input value for onSubmit
  const [searchInput, setSearchInput] = React.useState('');
  const menuItems = wineList.map(wine => <MenuItem key={wine}>{wine}</MenuItem>);

  const filterMenuItems = e => {
    setSearchInput(e.target.value);
    const formattedValue = e.target.value.toLowerCase();

    // Reset the list if the input is cleared
    if (!formattedValue.length) {
      setWineList(initialWineList);
    } else {
      const filteredItems = wineList.filter(wine => wine.toLowerCase().startsWith(formattedValue));
      setWineList(filteredItems);
    }
  };

  const handleSubmit = () => {
    // We don't need to prevent the default event because SearchForm handles that internally
    console.log(`Searching for: ${searchInput}`);
  };

  return (
    <Flex minHeight={200} alignItems="flex-start" padding="xs">
      <SearchForm
        autocompleteItems={menuItems}
        onInputChange={filterMenuItems}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};
