import React from 'react';
import {createSubcomponent, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelProps, RadioLabelContext} from './RadioLabel';
import {StyledRadioButton} from './StyledRadioButton';

const useRadioInput = createElemPropsHook(useRadioModel)(
  (model, _ref, elemProps: {value?: string; checked?: boolean} = {}) => {
    const {disabled, variant} = React.useContext(RadioLabelContext);
    return {
      'aria-describedby': model.state['aria-describedby'],
      disabled: disabled,
      variant: variant,
      checked: elemProps.value === model.state.value,
      'aria-checked': elemProps.value === model.state.value,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        model.onChange(event);
      },
      name: model.state.name,
    };
  }
);
export const RadioInput = createSubcomponent('input')({
  modelHook: useRadioModel,
  elemPropsHook: useRadioInput,
})<RadioLabelProps>(({...elemProps}, _Element, _model) => {
  return <StyledRadioButton {...elemProps} />;
});
