import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  backgroundColor: system.color.surface.contrast.default,
  display: 'flex',
  gap: system.gap.md,
  padding: system.padding.md,
});

export const DeleteInverse = () => (
  <div className={parentContainerStyles}>
    <DeleteButton variant="inverse">Delete</DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="start" variant="inverse">
      Delete
    </DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="end" variant="inverse">
      Delete
    </DeleteButton>
    <Tooltip title="Delete">
      <DeleteButton icon={trashIcon} variant="inverse" />
    </Tooltip>
  </div>
);
