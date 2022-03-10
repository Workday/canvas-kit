import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const Secondary = props => (
  <>
    <HStack spacing="s" padding="s">
      <SecondaryButton {...props}>Secondary</SecondaryButton>
      <p>{JSON.stringify(props.theme)}</p>
      <SecondaryButton icon={plusIcon} iconPosition="start" {...props}>
        Secondary
      </SecondaryButton>
      <SecondaryButton icon={plusIcon} iconPosition="end" {...props}>
        Secondary
      </SecondaryButton>
      <SecondaryButton icon={plusIcon} {...props}></SecondaryButton>
    </HStack>
  </>
);
