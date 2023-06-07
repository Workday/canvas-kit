import React from 'react';
import {spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {styled, Themeable, createSubcomponent, useUniqueId} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';

interface RadioLabelContextInterface {
  /**
   * If true, set the Radio button to the disabled state.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * The HTML `id` of the underlying radio input element. This is required if `label` is defined as a non-empty string.
   * @default A uniquely generated id
   */
  id?: string;
  variant?: 'inverse' | undefined;
}
export interface RadioLabelProps extends RadioLabelContextInterface, Themeable {
  /**
   * The Radio input and label children of RadioButton
   */
  children?: React.ReactNode;
  /**
   * If true, set the Radio button to the checked state.
   * @default false
   */
  checked?: boolean;

  /**
   * The name of the Radio button.
   */
  name?: string;
  /**
   * The value of the Radio button.
   */
  value?: string | number;
}

const radioTapArea = spaceNumbers.m;
const radioContainerHeight = radioTapArea;

const RadioContainer = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  minHeight: radioContainerHeight,
  position: 'relative',
});

export const RadioLabelContext = React.createContext({} as RadioLabelContextInterface);
export const RadioButton = createSubcomponent('div')({
  displayName: 'Radio.Button',
  modelHook: useRadioModel,
})<RadioLabelProps>(({children, ...elemProps}) => {
  const inputId = useUniqueId(elemProps.id);
  return (
    <RadioLabelContext.Provider
      value={{disabled: elemProps.disabled, variant: elemProps.variant, id: inputId}}
    >
      <RadioContainer>{children}</RadioContainer>
    </RadioLabelContext.Provider>
  );
});
