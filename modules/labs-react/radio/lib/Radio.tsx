import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioGroup} from './RadioGroup';
import {RadioLabelProps} from './RadioLabel';

export const Radio = createSubcomponent()({
  displayName: 'Radio',
  modelHook: useRadioModel,
})<RadioLabelProps>(({children, ...elemProps}) => {
  return (
    <RadioGroup.Label {...elemProps}>
      <RadioGroup.Label.Input {...elemProps} />
      <RadioGroup.Label.Text>{children}</RadioGroup.Label.Text>
    </RadioGroup.Label>
  );
});
