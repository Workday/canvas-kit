---
source_file: labs-react/search-form/stories/SearchForm.mdx
live_url: https://workday.github.io/canvas-kit/labs-react/search-form/stories/SearchForm
---

<Meta of={SearchFormStories} />

# Canvas Kit Search Form <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `SearchForm` in Labs has been deprecated and will be removed in a future major version. Please
    use `Combobox` in Main instead.
  </InformationHighlight.Body>
  <InformationHighlight.Link href="https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs#usage">
    View Autocomplete Example
  </InformationHighlight.Link>
</InformationHighlight>

`SearchForm` is a search form that contains a `Combobox` for rendering search results. It's
primarily intended to be used within a `Header`.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

### Basic Example

You will most likely use `SearchForm` within the context of a `Header` component, but it's helpful
to see its functionality as a standalone component. Below is a basic example that filters results
based on search input.

```tsx
import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';

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
        autocompleteItems={menuItems}
        onInputChange={filterMenuItems}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};

```

### Grow

If you'd like `SearchForm` to grow to the width of its container, set the `grow` prop to `true`.

```tsx
import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const Grow = () => {
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
        autocompleteItems={menuItems}
        grow
        onInputChange={filterMenuItems}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};

```

### Theming

`SearchForm` can be themed to use one of the preset `SearchThemes`: `Light`, `Dark`, or
`Transparent`. Below is an example of `SearchForm` using the `Dark` theme.

```tsx
import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm, SearchTheme} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const Theming = () => {
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
    <Flex minHeight={200} alignItems="flex-start">
      <Flex padding="xs" backgroundColor="blueberry500" flex={1} flexBasis="auto">
        <SearchForm
          searchTheme={SearchTheme.Dark}
          autocompleteItems={menuItems}
          onInputChange={filterMenuItems}
          onSubmit={handleSubmit}
        />
      </Flex>
    </Flex>
  );
};

```

You can also provide more specific theming values by providing specific `SearchThemeAttributes`.

```tsx
import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm, SearchThemeAttributes} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const CustomTheme = () => {
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

  const customTheme = {
    background: '#a31b12',
    backgroundFocus: '#fff',
    placeholderColor: '#fff',
    placeholderColorFocus: '#333333',
  } as SearchThemeAttributes;

  return (
    <Flex minHeight={200} alignItems="flex-start">
      <Flex padding="xs" backgroundColor="cinnamon500" flex={1} flexBasis="auto">
        <SearchForm
          searchTheme={customTheme}
          autocompleteItems={menuItems}
          onInputChange={filterMenuItems}
          onSubmit={handleSubmit}
        />
      </Flex>
    </Flex>
  );
};

```

Below is a table of attributes that can be supplied to `SearchForm`:

<!-- API Reference for SearchThemeAttributes not found -->

### RTL (Right-To-Left)

`SearchForm` provides bidirectional support out of the box. You shouldn't need to provide any
additional configuration.

```tsx
import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

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

export const RTL = () => {
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
    <CanvasProvider dir="rtl">
      <Flex minHeight={200} alignItems="flex-start" padding="xs">
        <SearchForm
          autocompleteItems={menuItems}
          onInputChange={filterMenuItems}
          onSubmit={handleSubmit}
        />
      </Flex>
    </CanvasProvider>
  );
};

```

### Collapsed

```tsx
import * as React from 'react';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const Collapsed = () => {
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
        autocompleteItems={menuItems}
        onInputChange={filterMenuItems}
        onSubmit={handleSubmit}
        isCollapsed
      />
    </Flex>
  );
};

```

### Custom Styles

You can apply custom styles to the component via the `cs` prop. The example below uses CSS Variables
and
[createStencil](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs#stencils)
to create a custom style for the `SearchForm` component.

```tsx
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

```

Learn more in our
[Styling](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs)
docs.

## Component API

### SearchForm

<!-- API Reference for SearchForm not found -->
