import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const Muted = () => {
  return (
    <Tooltip title="Visual-only Tooltip" type="muted">
      <span>Some text. The contents of the tooltip are invisible to screen reader users.</span>
    </Tooltip>
  );
};
