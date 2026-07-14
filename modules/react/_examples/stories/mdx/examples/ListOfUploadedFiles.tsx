import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const files = ['Cover Letter.docx', 'Resume.docx', 'Portfolio.pptx', 'Portrait.png'];

const listStyles = createStyles({
  alignItems: 'center',
  width: '35rem',
});

const deleteBtnStyle = createStyles({
  marginInlineStart: 'auto',
});

export const ListOfUploadedFiles = () => {
  return (
    <>
      <Heading size="medium">Uploaded Files:</Heading>
      <Flex as="ul" cs={{gap: system.gap.md, flexDirection: 'column'}}>
        {files.map(i => (
          <Flex as="li" cs={listStyles}>
            <Text>{i}</Text>
            <Tooltip type="description" title={i}>
              <DeleteButton icon={trashIcon} cs={deleteBtnStyle}>
                Delete
              </DeleteButton>
            </Tooltip>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
