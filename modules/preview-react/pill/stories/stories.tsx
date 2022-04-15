import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {plusIcon, xIcon, trashIcon} from '@workday/canvas-system-icons-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {HStack} from '@workday/canvas-kit-react';

export default {
  title: 'Preview/Pill/React',
  component: Pill,
};

const data = [
  'Shoes',
  'Pants',
  'Dress Shoes',
  'Color',
  'Accessories',
  'Luxury',
  'Casual',
  'Hats',
  'Beanies',
  'Glasses',
  'Jewelry',
];

export const Default = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill>Ready Only</Pill>
  </HStack>
);

export const ClickablePillWithAvatar = () => (
  <Pill onClick={() => console.warn('clicked')}>
    <Pill.Avatar url={testAvatar} />
    <Pill.Label>Regina Skeltor</Pill.Label>
  </Pill>
);

export const ClickablePillWithIcon = () => (
  <Pill onClick={() => console.warn('clicked')}>
    <Pill.Icon />
    <Pill.Label>Regina Skeltor</Pill.Label>
  </Pill>
);

export const ClickablePillWithCount = () => (
  <Pill onClick={() => console.warn('clicked')}>
    <Pill.Label>Category</Pill.Label>
    <Pill.Count>30</Pill.Count>
  </Pill>
);

export const WithOverflow = () => (
  <Pill onClick={() => console.warn('clicked')} maxWidth={200}>
    <Pill.Label>Category of foods that is too long to contain the awesomeness</Pill.Label>
    <Pill.Count>10</Pill.Count>
  </Pill>
);

export const RemovablePill = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill onDelete={() => console.warn('clicked')}>
      <Pill.Label>Pink Shirts</Pill.Label>
      <Pill.IconButton />
    </Pill>
    <Pill onDelete={() => console.warn('clicked')}>
      <Pill.Avatar url={testAvatar}></Pill.Avatar>
      <Pill.Label>Carolyn Grimaldi</Pill.Label>
      <Pill.IconButton onClick={() => console.warn('click event on icon button')} />
    </Pill>
  </HStack>
);

export const ListOfPills = () => (
  <HStack shouldWrapChildren spacing="xxs" flexWrap="wrap">
    {data.map(cat => {
      return (
        <Pill marginBottom="xxs" onDelete={() => console.log(`delete ${cat}`)}>
          <Pill.Label>{cat}</Pill.Label>
          <Pill.IconButton />
        </Pill>
      );
    })}
  </HStack>
);
