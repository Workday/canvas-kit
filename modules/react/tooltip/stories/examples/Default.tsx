import {xIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const Default = () => {
  return (
    <Tooltip title="Close">
      <TertiaryButton icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};
