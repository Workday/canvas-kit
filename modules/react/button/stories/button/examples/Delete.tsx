import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const Delete = () => (
  <Flex cs={parentContainerStyles}>
    <DeleteButton>Delete</DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="start">
      Delete
    </DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="end">
      Delete
    </DeleteButton>
    <DeleteButton aria-label="trash" icon={trashIcon} />
  </Flex>
);
