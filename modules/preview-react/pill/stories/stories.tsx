import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {plusIcon, xIcon, trashIcon} from '@workday/canvas-system-icons-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {Box, HStack} from '@workday/canvas-kit-react';

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
    <Pill maxWidth={250}>
      Ready Only but with a super long text in case you want to read a paragraph in a pill which we
      don't recommend
    </Pill>
  </HStack>
);

export const ClickablePillWithAvatar = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill onClick={() => console.warn('clicked')}>
      <Pill.Avatar url={testAvatar} />
      Regina Skeltor
    </Pill>
    <Pill onClick={() => console.warn('clicked')} disabled>
      <Pill.Avatar url={testAvatar} />
      Regina Skeltor
    </Pill>
  </HStack>
);

export const ClickablePillWithIcon = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill onClick={() => console.warn('clicked')}>
      <Pill.Icon />
      <Pill.Label>Regina Skeltor</Pill.Label>
    </Pill>
    <Pill onClick={() => console.warn('clicked')} disabled>
      <Pill.Icon />
      <Pill.Label>Regina Skeltor</Pill.Label>
    </Pill>
  </HStack>
);

export const ClickablePillWithCount = () => (
  <Pill onClick={() => console.warn('clicked')}>
    Category
    <Pill.Count>30</Pill.Count>
  </Pill>
);

export const RemovablePill = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill onDelete={() => console.warn('clicked')}>
      Pink Shirts
      <Pill.IconButton />
    </Pill>
    <Pill onDelete={() => console.warn('clicked')}>
      <Pill.Avatar url={testAvatar}></Pill.Avatar>
      Carolyn Grimaldi
      <Pill.IconButton />
    </Pill>

    <Pill onDelete={() => console.warn('clicked')} disabled>
      This is a category that should not exist because it is too long
      <Pill.IconButton onClick={() => console.warn('click event on icon button')} />
    </Pill>
  </HStack>
);

export const ListOfPills = () => (
  <HStack shouldWrapChildren spacing="zero" flexWrap="wrap">
    {data.map(cat => {
      return (
        <Pill
          marginBottom="xxs"
          onDelete={() => console.log(`delete ${cat}`)}
          marginInlineEnd="xxs"
        >
          <Pill.Label>{cat}</Pill.Label>
          <Pill.IconButton />
        </Pill>
      );
    })}
  </HStack>
);
