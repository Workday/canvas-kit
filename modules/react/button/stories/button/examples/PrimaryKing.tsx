import React from 'react';

import {PrimaryButtonKing} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const PrimaryKing = props => (
  <>
    <h1>Default</h1>
    <HStack spacing="s" padding="s">
      {/* <PrimaryButtonKing {...props}>Primary</PrimaryButtonKing>
      <p>{JSON.stringify(props.theme)}</p> */}
      <PrimaryButtonKing size="medium" icon={plusIcon} iconPosition="start" {...props}>
        Primary
      </PrimaryButtonKing>
      <PrimaryButtonKing icon={plusIcon} {...props}></PrimaryButtonKing>
    </HStack>
  </>
);
