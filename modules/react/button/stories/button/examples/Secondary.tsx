import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const Secondary = props => (
  <>
    <h1>Default</h1>
    <HStack spacing="s" padding="s">
      <SecondaryButton {...props}>Primary</SecondaryButton>
      <p>{JSON.stringify(props.theme)}</p>
      <SecondaryButton icon={plusIcon} iconPosition="start" {...props}>
        Primary
      </SecondaryButton>
      <SecondaryButton icon={plusIcon} {...props}></SecondaryButton>
    </HStack>
  </>
);
