import React from 'react';
import {styled, createSubcomponent} from '@workday/canvas-kit-react/common';
import canvas, {inputColors, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './useRadioModel';

const radioLabelDistance = spaceNumbers.m;

const StyledLabel = styled('label')<{disabled?: boolean}>(
  {
    ...canvas.type.levels.subtext.large,
    paddingLeft: radioLabelDistance,
  },
  ({disabled}) => (disabled ? {color: inputColors.disabled.text} : {cursor: 'pointer'})
);

export const RadioLabel = createSubcomponent('label')({
  displayName: 'RadioButton.Label',
  modelHook: useRadioModel,
})(({children, ...elemProps}, Element, model) => {
  return <StyledLabel disabled={model.state.disabled}>{children}</StyledLabel>;
});

// const RadioLabel = styled('label')<{disabled?: boolean}>(
//   {
//     ...canvas.type.levels.subtext.large,
//     paddingLeft: radioLabelDistance,
//   },
//   ({disabled}) => (disabled ? {color: inputColors.disabled.text} : {cursor: 'pointer'})
// );

export default RadioLabel;
