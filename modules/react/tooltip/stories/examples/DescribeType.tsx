import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const DescribeType = () => {
  return (
    <Tooltip type="describe" title="The service will restart after this action">
      <DeleteButton>Delete</DeleteButton>
    </Tooltip>
  );
};
