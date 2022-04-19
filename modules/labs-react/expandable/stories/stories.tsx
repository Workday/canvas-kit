import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {
  Avatar,
  PrimaryButton,
  styled,
  SystemIcon,
  TertiaryButton,
  type,
} from '@workday/canvas-kit-react';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '../../layout/lib/Flex';

export default {
  title: 'Labs/Container/Expandable/React',
  component: Expandable,
};

export const Default = () => (
  <Expandable>
    <Expandable.Heading>
      <Expandable.Button>Additional Information</Expandable.Button>
    </Expandable.Heading>
    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

const h2 = styled('h2')({
  ...type.levels.heading.medium,
});

export const SingleLineHeader = () => (
  <Expandable>
    <Expandable.Heading as={h2}>
      <Expandable.Button as={TertiaryButton}>
        <Flex
          alignItems={'center'}
          flexDirection={'row'}
          flex={1}
          flexBasis="auto"
          padding="xs"
          marginX="xxxs"
          justifyContent="center"
          borderRadius="m"
        >
          <SystemIcon icon={chevronDownSmallIcon} />
          <Avatar as={'div'} />
          <span>Additional Information</span>
        </Flex>
      </Expandable.Button>
    </Expandable.Heading>
    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

export const MultiLineHeader = () => (
  <Expandable>
    <Expandable.Heading as={'h2'}>
      <Expandable.Button>Additional Information</Expandable.Button>
    </Expandable.Heading>
    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
