import React from 'react';

import {DeleteButton, SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Flex} from '@workday/canvas-kit-react/layout';
import {chartConfigIcon} from '@workday/canvas-system-icons-web';

export const DescribeType = () => {
  return (
    <Flex gap="s">
      <Tooltip type="describe" title="Search using additional criteria">
        <TertiaryButton icon={chartConfigIcon}>Advanced Search</TertiaryButton>
      </Tooltip>
      <Tooltip type="describe" title="Create saved search">
        <SecondaryButton>Save</SecondaryButton>
      </Tooltip>
      <Tooltip type="describe" title="The service will restart after this action">
        <DeleteButton>Delete</DeleteButton>
      </Tooltip>
    </Flex>
  );
};
