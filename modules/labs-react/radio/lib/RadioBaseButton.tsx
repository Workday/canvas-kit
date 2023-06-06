import React from 'react';
import {spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  Themeable,
  createSubcomponent,
  useUniqueId,
  createContainer,
  createModelHook,
} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import RadioButtonInput from './RadioInput';
import RadioLabel from './RadioLabel';

interface RadioButtonContextInterface {
  // /**
  //  * If true, set the Radio button to the disabled state.
  //  * @default false
  //  */
  // disabled?: boolean | undefined;
  // /**
  //  * The HTML `id` of the underlying radio input element. This is required if `label` is defined as a non-empty string.
  //  * @default A uniquely generated id
  //  */
  // id?: string;
  // variant?: 'inverse' | undefined;
}
export interface RadioButtonProps extends Themeable {
  /**
   * The Radio input and label children of RadioButton
   */
  children?: React.ReactNode;
}

export const useRadioButtonModel = createModelHook({
  defaultConfig: {
    ...useRadioModel.defaultConfig,
    checked: false as boolean | undefined,
    disabled: false as boolean | undefined,
    id: '' as string,
  },
})(config => {
  const radioGroupModel = useRadioModel();
  const state = {
    // ...radioGroupModel.state,
    checked: config.checked,
    disabled: config.disabled,
    id: config.id,
  };
  const events = {
    ...radioGroupModel.onChange,
  };

  return {
    state,
    events,
    radioGroupModel,
  };
});

// export const RadioButtonContext = React.createContext({} as RadioButtonContextInterface);
export const RadioBaseButton = createSubcomponent('div')({
  displayName: 'Radio.Button',
  modelHook: useRadioButtonModel,
  // elemPropsHook: useRadioButtonModel,
  subComponents: {
    Input: RadioButtonInput,
    Label: RadioLabel,
  },
})<RadioButtonProps>(({children, ...elemProps}, Element, model) => {
  // const inputId = useUniqueId(elemProps.id);
  return (
    <Flex alignItems="flex-start" minHeight="m" position="relative" gap="xxs">
      {children}
    </Flex>
  );
});
