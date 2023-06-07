import React from 'react';
import {spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {styled, Themeable, createSubcomponent, useUniqueId} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabel, RadioLabelProps} from './RadioLabel';
import {RadioGroup2} from './RadioGroup';

export const Radio = createSubcomponent()({
  displayName: 'Radio',
  modelHook: useRadioModel,
})<RadioLabelProps>(({children, ...elemProps}) => {
  return (
    <RadioGroup2.RadioLabel>
      <RadioGroup2.RadioLabel.Input {...elemProps} />
      <RadioGroup2.RadioLabel.Text>{children}</RadioGroup2.RadioLabel.Text>
    </RadioGroup2.RadioLabel>
  );
});
