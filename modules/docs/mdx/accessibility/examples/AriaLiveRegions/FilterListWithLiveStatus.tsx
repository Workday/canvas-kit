import React from 'react';

import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {Flex} from '@workday/canvas-kit-react/layout';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const fruits = [
  'Apples',
  'Oranges',
  'Bananas',
  'Lemons',
  'Limes',
  'Strawberries',
  'Raspberries',
  'Blackberries',
];

const liveRegionStyle = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.caution.strong}`,
  backgroundColor: system.color.bg.caution.softer,
  padding: system.space.x2,
});

const listStyles = createStyles({
  paddingLeft: system.space.zero,
});

const listItemStyles = createStyles({
  listStyle: 'none',
  paddingLeft: system.space.zero,
});

const flexStyles = createStyles({
  gap: system.space.x4,
});

let filteredFruits = fruits;

export const FilterListWithLiveStatus = () => {
  const [filter, setFilter] = React.useState('');
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    filteredFruits = fruits.filter(i => i.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0);
    setFilter(e.target.value);
  }

  return (
    <>
      <Flex cs={flexStyles}>
        <Heading size="small">Fruits</Heading>
        <AriaLiveRegion>
          <BodyText size="small" cs={liveRegionStyle}>
            {`Showing ${filteredFruits.length} of ${fruits.length}`}
          </BodyText>
        </AriaLiveRegion>
      </Flex>
      <FormField>
        <FormField.Label>Filter Items:</FormField.Label>
        <FormField.Input as={TextInput} value={filter} onChange={handleFilter} />
      </FormField>
      <ul className={listStyles}>
        {filteredFruits.map(i => (
          <BodyText size="small" as="li" cs={listItemStyles} key={i}>
            {i}
          </BodyText>
        ))}
      </ul>
    </>
  );
};
