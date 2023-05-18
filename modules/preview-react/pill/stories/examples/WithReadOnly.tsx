import * as React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {Flex} from '@workday/canvas-kit-react/layout';

export const WithReadOnly = () => (
  <Flex gap="xxs">
    <Pill variant="readOnly">Read-only</Pill>
    <Pill variant="readOnly" maxWidth={250}>
      Read-only but with super long text in case you want to read a paragraph in a Pill which we
      don't recommend
    </Pill>
  </Flex>
);
