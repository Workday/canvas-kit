import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {trashIcon} from '@workday/canvas-system-icons-web';

const files = ['Cover Letter.docx', 'Resume.docx', 'Portfolio.pptx', 'Portrait.png'];

const listStyles = {
  alignItems: 'center',
  width: '35rem',
};

const deleteBtnStyle = {
  marginLeft: 'auto',
};

export const ListOfUploadedFiles = () => {
  return (
    <>
      <Heading size="medium">Uploaded Files:</Heading>
      <Flex as="ul" gap="1rem" flexDirection="column">
        {files.map(i => (
          <Flex as="li" style={listStyles}>
            <Text>{i}</Text>
            <Tooltip type="description" title={i}>
              <DeleteButton icon={trashIcon} style={deleteBtnStyle}>
                Delete
              </DeleteButton>
            </Tooltip>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
