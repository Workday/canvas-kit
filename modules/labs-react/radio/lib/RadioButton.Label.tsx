import React from 'react';
import {styled, createSubcomponent} from '@workday/canvas-kit-react/common';
import {canvas, inputColors, spaceNumbers, colors} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioButtonContext} from './Radio.Button';

const radioLabelDistance = spaceNumbers.xs;

const StyledLabel = styled('label')<{disabled?: boolean; variant?: 'inverse' | undefined}>(
  {
    ...canvas.type.levels.subtext.large,
    paddingLeft: radioLabelDistance,
  },
  ({variant}) => (variant === 'inverse' ? {color: colors.frenchVanilla100} : undefined),
  ({disabled, variant}) =>
    disabled
      ? {
          color: variant === 'inverse' ? colors.frenchVanilla100 : inputColors.disabled.text,
          opacity: variant === 'inverse' ? '.4' : '1',
        }
      : {cursor: 'pointer'}
);

export const RadioLabel = createSubcomponent('label')({
  displayName: 'RadioButton.Label',
  modelHook: useRadioModel,
})(({children}) => {
  const radioContext = React.useContext(RadioButtonContext);
  return (
    <StyledLabel
      htmlFor={radioContext.id}
      disabled={radioContext.disabled}
      variant={radioContext.variant}
    >
      {children}
    </StyledLabel>
  );
});

export default RadioLabel;
