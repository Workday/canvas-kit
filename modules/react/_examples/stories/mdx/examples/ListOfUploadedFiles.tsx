import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const files = ['Cover Letter.docx', 'Resume.docx', 'Portfolio.pptx', 'Portrait.png'];

const listStyles = createStyles({
  alignItems: 'center',
  width: px2rem(35),
});

const deleteBtnStyle = createStyles({
  marginLeft: 'auto',
});

const flexStyles = createStyles({
  gap: system.space.x4,
  flexDirection: 'column',
});

export const ListOfUploadedFiles = () => {
  return (
    <>
      <Heading size="medium">Uploaded Files:</Heading>
      <Flex as="ul" cs={flexStyles}>
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
