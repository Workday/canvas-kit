import React, {useState} from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';
import {createStyles} from '@workday/canvas-kit-styling';

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
  border: `1px solid ${colors.cantaloupe400}`,
  backgroundColor: colors.cantaloupe100,
  padding: '0.5rem',
});

const listStyles = {paddingLeft: '0px'};

const listItemStyles = createStyles({
  listStyle: 'none',
  paddingLeft: '0px',
});

let filteredFruits = fruits;

export const FilterListWithLiveStatus = () => {
  const [filter, setFilter] = useState('');
  function handleFilter(e) {
    filteredFruits = fruits.filter(i => i.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0);
    setFilter(e.target.value);
  }

  return (
    <>
      <Flex gap="1rem">
        <Heading size="small">Fruits</Heading>
        <AriaLiveRegion>
          <BodyText size="small" cs={liveRegionStyle}>
            {`Showing ${filteredFruits.length} of ${fruits.length}`}
          </BodyText>
        </AriaLiveRegion>
      </Flex>
      <TextInput orientation="vertical">
        <TextInput.Label>Filter Items:</TextInput.Label>
        <TextInput.Field value={filter} onChange={handleFilter} />
      </TextInput>
      <ul style={listStyles}>
        {filteredFruits.map(i => (
          <BodyText size="small" as="li" cs={listItemStyles} key={i}>
            {i}
          </BodyText>
        ))}
      </ul>
    </>
  );
};