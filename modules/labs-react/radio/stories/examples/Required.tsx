import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Required = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (value: string | number) => {
    setValue(value);
  };
  return (
    <FormField label="Choose Your Pizza Crust" required={true} useFieldset={true}>
      <RadioGroup name="crust">
        <RadioGroup.Button>
          <RadioGroup.Input value="deep-dish" />
          <RadioGroup.Label>Deep Dish</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input value="thin" />
          <RadioGroup.Label>Thin</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input value="gluten-free" />
          <RadioGroup.Label>Gluten free</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input value="cauliflower" />
          <RadioGroup.Label>Cauliflower</RadioGroup.Label>
        </RadioGroup.Button>
      </RadioGroup>
    </FormField>
  );
};
