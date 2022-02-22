import React from 'react';

import {SecondaryButtonNew} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const SecondaryNew = props => (
  <>
    <h1>Default</h1>
    <HStack spacing="s" padding="s">
      <SecondaryButtonNew {...props}>Primary</SecondaryButtonNew>
      <p>{JSON.stringify(props.theme)}</p>
      <SecondaryButtonNew icon={plusIcon} iconPosition="start" {...props}>
        Primary
      </SecondaryButtonNew>
      <SecondaryButtonNew icon={plusIcon} {...props}></SecondaryButtonNew>
    </HStack>
  </>
);
