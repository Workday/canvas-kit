import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const Primary = props => (
  <>
    <HStack spacing="s" padding="s">
      <PrimaryButton {...props}>Primary</PrimaryButton>
      <p>{JSON.stringify(props.theme)}</p>
      <PrimaryButton icon={plusIcon} iconPosition="start" {...props}>
        Primary
      </PrimaryButton>
      <PrimaryButton icon={plusIcon} {...props}></PrimaryButton>
    </HStack>
  </>
);
