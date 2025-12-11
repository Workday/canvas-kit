---
source_file: react/table/stories/Table.mdx
live_url: https://workday.github.io/canvas-kit/react/table/stories/Table
---

<Meta of={TableStories} />

# Canvas Kit Table

`Table` is a simple styled compound component that renders a
[table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element. It is used to
present information in a two-dimensional table comprised of rows and columns of cells containing
data. `Table` is built off of `BaseTable` and is using
[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) features.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Users may not want to use a `caption` so they can import
[Heading](https://workday.github.io/canvas-kit/?path=/docs/components-text-heading--docs) or
[Text](https://workday.github.io/canvas-kit/?path=/docs/components-text-text--docs) instead. This
will give the user more flexibility around the customization of the title/heading of their table.

```tsx
import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBottom: system.space.x4,
  }),
  tableHeaderStyles: createStyles({
    backgroundColor: system.color.bg.alt.softer,
  }),
};

export const BasicWithHeading = () => {
  const headingID = useUniqueId();

  return (
    <>
      <Heading as="h3" id={headingID} size="small" cs={styleOverrides.parentContainerStyles}>
        Pizza Toppings
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Toppings
            </Table.Header>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Amount
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pepperoni</Table.Cell>
            <Table.Cell>2.5 oz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mozzarella</Table.Cell>
            <Table.Cell>5 oz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>10 Leaves</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

```

### Right to Left

Table supports right-to-left languages when specified in the CanvasProvider theme.

```tsx
import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.bg.alt.softer,
});

export const RightToLeft = () => {
  return (
    <CanvasProvider dir="rtl">
      <Table>
        <Table.Caption>משקאות קפה וגדלים</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={tableHeaderStyles}>
              מַשׁקֶה
            </Table.Header>
            <Table.Header scope="col" cs={tableHeaderStyles}>
              גודל
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>אספרסו</Table.Cell>
            <Table.Cell>1 גר</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>מקיאטו</Table.Cell>
            <Table.Cell>2 גרם אספרסו</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>גזירה</Table.Cell>
            <Table.Cell>2 גרם אספרסו, 1 גרם חלב מוקצף</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </CanvasProvider>
  );
};

```

### Example with Caption

Users are free to use a `caption` instead of a heading. A `caption` is not required but it is good
for
[accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#accessibility_concerns)
purposes.

```tsx
import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.bg.alt.softer,
});

export const Basic = () => {
  return (
    <Table>
      <Table.Caption>Coffee Drinks and Sizes</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </Table.Header>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Size
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Espresso</Table.Cell>
          <Table.Cell>1 oz</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Macchiato</Table.Cell>
          <Table.Cell>2 oz Espresso</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cortado</Table.Cell>
          <Table.Cell>2 oz Espresso, 1 oz Foamed Milk</Table.Cell>
        </Table.Row>
        <Table.Row></Table.Row>
        <Table.Row>
          <Table.Cell>Cappuccino</Table.Cell>
          <Table.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

```

### Fixed Column

Users may add styles to the `Table.Header` to render a fixed column. The example below assigns a
`width` to the `Table` to guarantee the fixed column is triggered, but you are free to omit the
`width` if you would only like the fixed column to be triggered if necessary.

```tsx
import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBottom: system.space.x4,
  }),
  tableStyles: createStyles({
    width: px2rem(690),
  }),
  tableHeaderStyles: createStyles({
    position: 'sticky',
    left: system.space.zero,
    backgroundColor: system.color.bg.alt.softer,
    borderRight: `2px solid ${system.color.border.divider}`,
  }),
};

export const FixedColumn = () => {
  const headingID = useUniqueId();
  const exampleData = [
    {
      make: 'Porsche',
      model: '992 911 GT3',
      year: '2022',
      price: 'Starts at $160,000',
      engine: '4.0L Flat 6',
      transmission: 'PDK or 7-Speed Manual',
      horsepower: '502hp',
      torque: '346 lb-ft',
      curbWeight: '3,164 lbs',
    },
    {
      make: 'BMW',
      model: 'M5 Competition',
      year: '2018',
      price: 'Starts at $105,000',
      engine: 'Twin-Turbo 4.4L V8',
      transmission: 'Automatic',
      horsepower: '627hp',
      torque: '553 lb-ft',
      curbWeight: '4,345 lbs',
    },
    {
      make: 'Alfa Romeo',
      model: '1750 GTV',
      year: '1970',
      price: '$30,000 - $55,000',
      engine: '1.75L Inline 4',
      transmission: 'Manual',
      horsepower: '122hp',
      torque: '137 lb-ft',
      curbWeight: '2,140 lbs',
    },
    {
      make: 'Lotus',
      model: 'Emira',
      year: '2023',
      price: 'Starts at $78,000',
      engine: 'Supercharged 3.5L V6',
      transmission: 'Automatic or 6-Speed Manual',
      horsepower: '400hp',
      torque: '317 lb-ft',
      curbWeight: '3520 lbs',
    },
    {
      make: 'Toyota',
      model: 'Supra',
      year: '1998',
      price: '$40,000 - $80,000',
      engine: '3.0L Inline 6',
      transmission: 'Automatic or 6-Speed Manual',
      horsepower: '320hp',
      torque: '315 lb-ft',
      curbWeight: '3,599 lbs',
    },
    {
      make: 'Nissan',
      model: 'Skyline GT-R',
      year: '1994',
      price: '$45,000 - $90,000',
      engine: '2.6L Twin-Turbo Inline 6',
      transmission: '5-Speed Manual',
      horsepower: '276hp',
      torque: '260 lb-ft',
      curbWeight: '3,153 lbs',
    },
  ];
  return (
    <>
      <Heading as="h3" id={headingID} size="small" cs={styleOverrides.parentContainerStyles}>
        Performance Car Specs
      </Heading>
      <Table cs={styleOverrides.tableStyles} aria-labelledby={headingID} tabIndex={0}>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Make
            </Table.Header>
            <Table.Header scope="col">Model</Table.Header>
            <Table.Header scope="col">Year</Table.Header>
            <Table.Header scope="col">Price</Table.Header>
            <Table.Header scope="col">Engine</Table.Header>
            <Table.Header scope="col">Transmission</Table.Header>
            <Table.Header scope="col">Horsepower</Table.Header>
            <Table.Header scope="col">Torque</Table.Header>
            <Table.Header scope="col">Curb Weight</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {exampleData.map(item => (
            <>
              <Table.Row>
                <Table.Header scope="row" cs={styleOverrides.tableHeaderStyles}>
                  {item.make}
                </Table.Header>
                <Table.Cell>{item.model}</Table.Cell>
                <Table.Cell>{item.year}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.engine}</Table.Cell>
                <Table.Cell>{item.transmission}</Table.Cell>
                <Table.Cell>{item.horsepower}</Table.Cell>
                <Table.Cell>{item.torque}</Table.Cell>
                <Table.Cell>{item.curbWeight}</Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

```

### Base Html Table Example

If a user needs a standard HTML
[table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) with no
[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) features, then they can
use the `BaseTable` component.

```tsx
import React from 'react';

import {BaseTable} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.bg.alt.softer,
});

export const BaseHtmlTable = () => {
  return (
    <BaseTable>
      <BaseTable.Caption>Coffee Drinks and Sizes</BaseTable.Caption>
      <BaseTable.Head>
        <BaseTable.Row>
          <BaseTable.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </BaseTable.Header>
          <BaseTable.Header scope="col" cs={tableHeaderStyles}>
            Size
          </BaseTable.Header>
        </BaseTable.Row>
      </BaseTable.Head>
      <BaseTable.Body>
        <BaseTable.Row>
          <BaseTable.Cell>Espresso</BaseTable.Cell>
          <BaseTable.Cell>1 oz</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Macchiato</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Cortado</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso, 1 oz Foamed Milk</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row></BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Cappuccino</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</BaseTable.Cell>
        </BaseTable.Row>
      </BaseTable.Body>
    </BaseTable>
  );
};

```

### Which Component Should I Use?

> If a user wants [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
> features with their Table, then use the
> [Table](https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#basic-example)
> component.

> If a user **does not** want
> [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) features with their
> Table, then use the
> [BaseTable](https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#base-html-table-example)
> component.

### Advanced

You can also find several advanced Table examples in our Storybook Examples section.

- [Expandable Rows](https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#expandable-rows)
- [Selectable Rows ](https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#selectable-rows)
- [Filterable Column Headers](https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#filterable-column-headers)
- [Sortable Column Headers](https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#sortable-column-headers)

### Custom Styles

Table and its subcomponents support custom styling via the `cs` prop. For more information, check
our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Table not found -->
