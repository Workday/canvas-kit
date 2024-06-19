import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {trashIcon} from '@workday/canvas-system-icons-web';

const files = ['Cover Letter.docx', 'Resume.docx', 'Portfolio.pptx', 'Portrait.png'];

export const DescribeType = () => {
  return (
    <>
      <Heading size="medium">Uploaded Files:</Heading>
      <Tooltip type="describe" title="The service will restart after this action">
        <DeleteButton icon={trashIcon}>Delete</DeleteButton>
      </Tooltip>
    </>
  );
};
