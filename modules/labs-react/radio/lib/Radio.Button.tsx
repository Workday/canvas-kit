import React from 'react';

import {spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {styled, Themeable, createSubcomponent} from '@workday/canvas-kit-react/common';

import {useRadioModel} from './useRadioModel';

export interface RadioButtonProps extends Themeable {
  children?: React.ReactNode;
  // model?: RadioModel;
  /**
   * If true, set the Radio button to the checked state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Radio button to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying radio input element. This is required if `label` is defined as a non-empty string.
   * @default A uniquely generated id
   */
  id?: string;
  /**
   * The text of the Radio button label.
   * @default ''
   */
  label?: string;
  /**
   * The name of the Radio button.
   */
  name?: string;
  /**
   * The function called when the Radio button state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value of the Radio button.
   */
  value?: string;
}

const radioTapArea = spaceNumbers.m;
const radioContainerHeight = radioTapArea;

const RadioContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  minHeight: radioContainerHeight,
  position: 'relative',
});

// const useRadioGroupButton = createElemPropsHook(useRadioModel)((model, ref, elemProps) => {
//   const checked = false;
//   const disabled = false;
//   return {
//     checked,
//     disabled,
//     // onChange: event => {
//     //   model.events.onChange(elemProps.value, index);
//     // },
//   };
// });
export const RadioButton = createSubcomponent('div')({
  displayName: 'Radio.Button',
  modelHook: useRadioModel,
})<RadioButtonProps>(({children, ...elemP}, Element, model) => {
  return <RadioContainer {...elemP}>{children}</RadioContainer>;
});
