import {styled} from '@workday/canvas-kit-react/common';

export const ButtonLabelNew = styled('span')({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
