import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Alert = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const model = {value, change: handleChange};

  return (
    <FormField
      error={FormField.ErrorType.Alert}
      hintId="hint-alert"
      hintText="Deep dish is an extra $2.99"
      label="Choose Your Pizza Crust"
      useFieldset={true}
    >
      {/* <RadioGroup name="crust" onChange={handleChange} value={value}> */}

      <RadioGroup name="crust" onChange={handleChange} initialValue={value}>
        <RadioGroup.Label>
          <RadioGroup.Label.Input value="deep-dish" />
          <RadioGroup.Label.Text>Deep dish</RadioGroup.Label.Text>
        </RadioGroup.Label>
        <RadioGroup.Label>
          <RadioGroup.Label.Input value="thin" />
          <RadioGroup.Label.Text>Thin</RadioGroup.Label.Text>
        </RadioGroup.Label>
        <RadioGroup.Label>
          <RadioGroup.Label.Input value="gluten-free" />
          <RadioGroup.Label.Text>Gluten Free</RadioGroup.Label.Text>
        </RadioGroup.Label>
        <RadioGroup.Label>
          <RadioGroup.Label.Input value="cauliflower" />
          <RadioGroup.Label.Text>Cauliflower</RadioGroup.Label.Text>
        </RadioGroup.Label>
      </RadioGroup>
    </FormField>
  );
};
