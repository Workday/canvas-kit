import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const AIDisclosure = () => {
  return (
    <Tooltip type="description" title="This functionality is powered by AI.">
      <PrimaryButton>Summarize</PrimaryButton>
    </Tooltip>
  );
};
