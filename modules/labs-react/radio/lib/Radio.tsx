import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioGroup} from './RadioGroup';
import {RadioLabelProps} from './RadioLabel';

export const Radio = createSubcomponent('input')({
  displayName: 'Radio',
  modelHook: useRadioModel,
})<RadioLabelProps>(({children, value, variant, ref, ...elemProps}) => {
  return (
    <RadioGroup.Label variant={variant} {...elemProps}>
      <RadioGroup.Label.Input value={value} {...elemProps} ref={ref} />
      <RadioGroup.Label.Text>{children}</RadioGroup.Label.Text>
    </RadioGroup.Label>
  );
});
