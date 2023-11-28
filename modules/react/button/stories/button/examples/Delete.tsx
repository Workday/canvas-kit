import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {trashIcon} from '@workday/canvas-system-icons-web';

export const Delete = () => (
  <Flex gap="s" padding="s">
    <DeleteButton>Delete</DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="start">
      Delete
    </DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="end">
      Delete
    </DeleteButton>
    <DeleteButton icon={trashIcon} />
  </Flex>
);
