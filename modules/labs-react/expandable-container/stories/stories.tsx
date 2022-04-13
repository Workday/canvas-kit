import React from 'react';

import {ExpandableContainer} from '@workday/canvas-kit-labs-react/expandable-container';
import {Avatar, PrimaryButton, SystemIcon, TertiaryButton} from '@workday/canvas-kit-react';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '../../layout/lib/Flex';

export default {
  title: 'Labs/Expandable Container/React',
  component: ExpandableContainer,
};

export const Default = () => (
  <ExpandableContainer>
    <ExpandableContainer.Header as={'h2'}>
      <ExpandableContainer.Button as={PrimaryButton}>
        Additional Information
      </ExpandableContainer.Button>
    </ExpandableContainer.Header>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);

export const SingleLineHeader = () => (
  <ExpandableContainer>
    <ExpandableContainer.Header as={'h2'}>
      <ExpandableContainer.Button as={TertiaryButton}>
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
      </ExpandableContainer.Button>
    </ExpandableContainer.Header>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);

export const MultiLineHeader = () => (
  <ExpandableContainer>
    <ExpandableContainer.Header as={'h2'}>
      <ExpandableContainer.Button>Additional Information</ExpandableContainer.Button>
    </ExpandableContainer.Header>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);
