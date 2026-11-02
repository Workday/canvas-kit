import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  display: 'flex',
  gap: system.gap.md,
  padding: system.padding.md,
});

export const DeleteOutline = () => (
  <div className={parentContainerStyles}>
    <DeleteButton variant="outline">Delete</DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="start" variant="outline">
      Delete
    </DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="end" variant="outline">
      Delete
    </DeleteButton>
    <Tooltip title="Delete">
      <DeleteButton icon={trashIcon} variant="outline" />
    </Tooltip>
  </div>
);
