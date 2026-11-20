import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stackStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: system.gap.lg,
});

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <div className={stackStyles}>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
          <Radio label="Deep dish" />
          <Radio label="Thin" />
          <Radio label="Gluten free" />
          <Radio label="Cauliflower" />
        </FormField.Input>
      </FormField>
      <Subtext size="large">Value: {value}</Subtext>
    </div>
  );
};
