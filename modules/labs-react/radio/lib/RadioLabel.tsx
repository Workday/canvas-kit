import React from 'react';

import {Themeable, createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioInput} from './RadioInput';
import {RadioText} from './RadioText';

interface RadioLabelContextInterface {
  /**
   * If true, set the Radio button to the disabled state.
   * @default false
   */
  disabled?: boolean | undefined;
  variant?: 'inverse' | undefined;
  checked?: boolean;
}
export interface RadioLabelProps
  extends Themeable,
    ExtractProps<typeof Flex, never>,
    RadioLabelContextInterface {
  /**
   * The Radio input and label children of RadioButton
   */
  children?: React.ReactNode;
  disabled?: boolean;
  /**
   * If true, set the Radio button to the checked state.
   * @default false
   */
  checked?: boolean;

  /**
   * The value of the Radio button.
   */
  value?: string | number;
}

export const RadioLabelContext = React.createContext({} as RadioLabelContextInterface);
export const RadioLabel = createSubcomponent('label')({
  displayName: 'Radio.Label',
  modelHook: useRadioModel,
  subComponents: {
    Input: RadioInput,
    Text: RadioText,
  },
})<RadioLabelProps>(({children, checked, ...elemProps}, Element, model) => {
  return (
    <RadioLabelContext.Provider
      value={{variant: elemProps.variant, disabled: elemProps.disabled, checked}}
    >
      <Flex
        as={Element}
        alignItems="flex-start"
        minHeight="m"
        position="relative"
        gap="xxs"
        {...elemProps}
      >
        {children}
      </Flex>
    </RadioLabelContext.Provider>
  );
});
