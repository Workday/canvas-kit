import * as React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {HStack} from '@workday/canvas-kit-react';

export const Basic = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill>Ready Only</Pill>
    <Pill maxWidth={250}>
      Ready Only but with a super long text in case you want to read a paragraph in a pill which we
      don't recommend
    </Pill>
  </HStack>
);
