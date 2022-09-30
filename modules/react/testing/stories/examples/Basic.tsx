import React from 'react';

import {Testing} from '@workday/canvas-kit-react/testing';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => {
  return (
    <Testing>
      <Testing.Target as={SecondaryButton}>Toggle</Testing.Target>
      <Testing.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Testing.Content>
    </Testing>
  );
};
