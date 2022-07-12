import {styled} from '@workday/canvas-kit-react/common';
import canvas, {inputColors, spaceNumbers} from '@workday/canvas-kit-react/tokens';

const radioLabelDistance = spaceNumbers.m;

const RadioLabel = styled('label')<{disabled?: boolean}>(
  {
    ...canvas.type.levels.subtext.large,
    paddingLeft: radioLabelDistance,
  },
  ({disabled}) => (disabled ? {color: inputColors.disabled.text} : {cursor: 'pointer'})
);

export default RadioLabel;
