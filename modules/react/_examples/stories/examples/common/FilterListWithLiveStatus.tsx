import React, {useState} from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';

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

const liveRegionStyle = {
  border: `1px solid ${colors.cantaloupe400}`,
  backgroundColor: colors.cantaloupe100,
  padding: '0.5rem',
};

let filteredFruits = fruits;

export default function FilterListWithLiveStatus() {
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
          <BodyText size="small" style={liveRegionStyle}>
            {`Showing ${filteredFruits.length} of ${fruits.length}`}
          </BodyText>
        </AriaLiveRegion>
      </Flex>
      <TextInput orientation="vertical">
        <TextInput.Label>Filter Items:</TextInput.Label>
        <TextInput.Field value={filter} onChange={handleFilter} />
      </TextInput>
      <ul>
        {filteredFruits.map(i => (
          <BodyText as="li" size="small" key={i}>
            {i}
          </BodyText>
        ))}
      </ul>
    </>
  );
}
