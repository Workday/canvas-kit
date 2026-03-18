import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {RadioGroup} from './RadioGroup';
import {RadioLabelProps} from './RadioLabel';
import {useRadioModel} from './hooks/useRadioModel';

export const RadioButton = createSubcomponent('input')({
  displayName: 'Radio',
  modelHook: useRadioModel,
})<RadioLabelProps>(({children, variant, ref, value, disabled, ...elemProps}) => {
  return (
    <RadioGroup.Label variant={variant} disabled={disabled}>
      <RadioGroup.Label.Input value={value} {...elemProps} ref={ref} />
      <RadioGroup.Label.Text>{children}</RadioGroup.Label.Text>
    </RadioGroup.Label>
  );
});
