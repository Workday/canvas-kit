import React from 'react';

import {Themeable, createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioInput} from './RadioInput';
import {RadioText} from './RadioText';

interface RadioLabelContextInterface {
  disabled?: boolean | undefined;
  variant?: 'inverse' | undefined;
  value?: string | number;
}
export interface RadioLabelProps
  extends Themeable,
    ExtractProps<typeof Flex, never>,
    RadioLabelContextInterface {
  /**
   * The Radio input and label children of RadioLabel
   */
  children?: React.ReactNode;
}

export const RadioLabelContext = React.createContext({} as RadioLabelContextInterface);

export const RadioLabel = createSubcomponent('label')({
  displayName: 'Radio.Label',
  modelHook: useRadioModel,
  subComponents: {
    /**
     * Use `RadioGroup.Label.Input` within a `RadioGroup.Label` to render the input portion of a radio button.
     *
     * ```tsx
     * <RadioGroup name"pizza-crust" value="deep-dish">
     *   <RadioGroup.Label>
     *     <RadioGroup.Label.Input value="deep-dish" />
     *     <RadioGroup.Label.Text>Deep dish</RadioGroup.Label.Text>
     *   </RadioGroup.Label>
     * </RadioGroup>
     * ```
     */
    Input: RadioInput,
    /**
     * Use `RadioGroup.Label.Text` within a `RadioGroup.Label` to render the label text portion of a radio button.
     *
     * ```tsx
     * <RadioGroup name"pizza-crust" value="deep-dish">
     *   <RadioGroup.Label>
     *     <RadioGroup.Label.Input value="deep-dish" />
     *     <RadioGroup.Label.Text>Deep dish</RadioGroup.Label.Text>
     *   </RadioGroup.Label>
     * </RadioGroup>
     * ```
     */
    Text: RadioText,
  },
})<RadioLabelProps>(({children, variant, disabled, value, ...elemProps}, Element, model) => {
  return (
    <RadioLabelContext.Provider value={{variant, disabled}}>
      <Flex
        as={Element}
        alignItems="flex-start"
        minHeight="m"
        position="relative"
        gap="xs"
        {...elemProps}
      >
        {children}
      </Flex>
    </RadioLabelContext.Provider>
  );
});
