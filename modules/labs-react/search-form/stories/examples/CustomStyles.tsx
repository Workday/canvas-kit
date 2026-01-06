import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm, searchFormStencil} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

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

const customSearchFormStencil = createStencil({
  extends: searchFormStencil,
  base: ({submitSearchIconPart}) => ({
    [searchFormStencil.vars.background]: 'black',
    [searchFormStencil.vars.backgroundHover]: system.color.bg.muted.strong,
    [searchFormStencil.vars.color]: system.color.text.inverse,
    [searchFormStencil.vars.placeholderColor]: system.color.bg.alt.softer,
    [submitSearchIconPart]: {
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
    [`& [data-part="combobox-reset-button"]`]: {
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
    '&:focus-within': {
      [submitSearchIconPart]: {
        [systemIconStencil.vars.color]: system.color.fg.default,
      },
      [`& [data-part="combobox-reset-button"]`]: {
        [systemIconStencil.vars.color]: system.color.fg.default,
      },
    },
  }),
});

export const CustomStyles = () => {
  const [wineList, setWineList] = React.useState(initialWineList);
  // Tracking the input value for onSubmit
  const [searchInput, setSearchInput] = React.useState('');
  const menuItems = wineList.map(wine => <StyledMenuItem key={wine}>{wine}</StyledMenuItem>);

  const filterMenuItems = e => {
    setSearchInput(e.target.value);
    const formattedValue = e.target.value.toLowerCase();

    // Reset the list if the input is cleared
    if (!formattedValue.length) {
      setWineList(initialWineList);
    } else {
      const filteredItems = initialWineList.filter(wine =>
        wine.toLowerCase().includes(formattedValue)
      );
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
        cs={customSearchFormStencil()}
        autocompleteItems={menuItems}
        onInputChange={filterMenuItems}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};
