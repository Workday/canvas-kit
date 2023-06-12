import React from 'react';

import {Themeable, createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioInput} from './RadioInput';
import {RadioText} from './RadioText';

interface RadioLabelContextInterface {
  disabled?: boolean | undefined;
  variant?: 'inverse' | undefined;
  checked?: boolean;
  value?: string | number;
}
export interface RadioLabelProps
  extends Themeable,
    ExtractProps<typeof Flex, never>,
    RadioLabelContextInterface {
  /**
   * The Radio input and label children of RadioButton
   */
  children?: React.ReactNode;
}

export const RadioLabelContext = React.createContext({} as RadioLabelContextInterface);
export const RadioLabel = createSubcomponent('label')({
  displayName: 'Radio.Label',
  modelHook: useRadioModel,
  subComponents: {
    Input: RadioInput,
    Text: RadioText,
  },
})<RadioLabelProps>(({children, checked, variant, disabled, ...elemProps}, Element, model) => {
  return (
    <RadioLabelContext.Provider value={{variant, disabled, checked}}>
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
