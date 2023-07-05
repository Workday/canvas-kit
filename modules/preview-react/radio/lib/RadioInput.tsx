import React from 'react';
import {
  styled,
  StyledType,
  focusRing,
  mouseFocusBehavior,
  createSubcomponent,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {colors, inputColors, spaceNumbers, borderRadius} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelProps, RadioLabelContext} from './RadioLabel';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {RadioInputWrapper, StyledRadioInput} from './StyledRadioButton';

const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;
const radioHeight = 18;

const useRadioInput = createElemPropsHook(useRadioModel)(
  (model, ref, elemProps: {value?: string; checked?: boolean} = {}) => {
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
})<RadioLabelProps>(
  (
    {
      children,
      disabled,
      checked,
      value,
      name,
      variant,
      'aria-checked': ariaChecked,
      'aria-describedby': ariaDescribedby,
      ...elemProps
    },
    Element,
    model
  ) => {
    return (
      <RadioInputWrapper
        height="18px"
        width="18px"
        flex="0 0 auto"
        disabled={disabled}
        variant={variant}
        {...elemProps} // This ensures our visual testing stories work properly
      >
        <StyledRadioInput
          borderRadius="circle"
          position="absolute"
          margin="zero"
          as={Element}
          value={value}
          name={name}
          type="radio"
          checked={checked}
          aria-checked={ariaChecked}
          variant={variant}
          aria-describedby={ariaDescribedby}
          disabled={disabled}
          {...elemProps}
        />
      </RadioInputWrapper>
    );
  }
);
