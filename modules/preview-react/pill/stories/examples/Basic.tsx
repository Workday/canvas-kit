import * as React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {HStack} from '@workday/canvas-kit-react';

export const Basic = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill>Read-only</Pill>
    <Pill maxWidth={250}>
      Read-only but with super long text in case you want to read a paragraph in a Pill which we
      don't recommend
    </Pill>
    <Pill onDelete={() => console.warn('on delete')} onClick={() => console.warn('on clcik')}>
      <Pill.Label>Test</Pill.Label>
    </Pill>
  </HStack>
);
