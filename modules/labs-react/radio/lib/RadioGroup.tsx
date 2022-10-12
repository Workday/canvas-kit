import React from 'react';

import {
  createComponent,
  ErrorType,
  GrowthBehavior,
  Themeable,
  createContainer,
} from '@workday/canvas-kit-react/common';

import {RadioButton, RadioButtonProps} from './Radio.Button';
import RadioButtonInput from './RadioButton.Input';
import RadioLabel from './RadioButton.Label';
import Container from './utils/RadioGroupContainer';
import {useRadioModel} from './useRadioModel';

// export interface RadioGroupProps extends Themeable, GrowthBehavior {
//   children: React.ReactElement<RadioButtonProps>[];
//   /**
//    * The function called when the RadioGroup state changes. The value passed to the callback function will be the value of the selected Radio button if it has one; otherwise, the index of the selected Radio button will be passed in.
//    */
//   onChange?: (value: string | number) => void;
//   /**
//    * The selected value of the RadioGroup. If a string is provided, the Radio button with the corresponding value will be selected. If a number is provided, the Radio button with the corresponding index will be selected.
//    * @default 0
//    */
//   value?: string | number;

//   /**
//    * The type of error associated with the RadioGroup (if applicable).
//    */
//   error?: ErrorType;
//   /**
//    * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
//    */
//   name?: string;
// }

export interface RadioGroupProps {
  children: React.ReactElement<RadioButtonProps>[];
}

export const RadioGroup = createContainer('div')({
  displayName: 'RadioGroup',
  modelHook: useRadioModel,
  subComponents: {
    Button: RadioButton,
    Input: RadioButtonInput,
    Label: RadioLabel,
  },
})<RadioGroupProps>(({children}, _, model) => {
  return <>{children}</>;
});

// export const RadioGroup = createComponent('div')({
//   displayName: 'RadioGroup',
//   Component: ({children, value, onChange, name}: RadioGroupProps, ref, Element) => {
//     const onRadioChange = (
//       existingOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
//       index: number,
//       event: React.ChangeEvent<HTMLInputElement>
//     ): void => {
//       if (existingOnChange) {
//         existingOnChange(event);
//       }

//       const target = event.currentTarget;
//       if (target && onChange) {
//         if (target.value) {
//           onChange(target.value);
//         } else {
//           onChange(index);
//         }
//       }
//     };

//     const RenderChildren = (
//       child: React.ReactElement<RadioButtonProps>,
//       index: number,
//       value: string | number | undefined
//     ): React.ReactNode => {
//       if (typeof child.type === typeof RadioButton) {
//         const childProps = child.props;
//         const checked = typeof value === 'number' ? index === value : childProps.value === value;
//         const radioButtonName = name ? name : childProps.name;

//         return React.cloneElement(child, {
//           checked,
//           name: radioButtonName,
//           onChange: onRadioChange.bind(this, childProps.onChange, index),
//         });
//       }

//       return child;
//     };

//     return (
//       // <RadioGroupContext.Provider value={{name}}>
//       <Container>
//         {React.Children.map(children, (child, index) => RenderChildren(child, index, value))}
//       </Container>
//       // </RadioGroupContext.Provider>
//     );
//   },
//   subComponents: {
//     Button: RadioButton,
//     Input: RadioButtonInput,
//     Label: RadioLabel,
//   },
// });
