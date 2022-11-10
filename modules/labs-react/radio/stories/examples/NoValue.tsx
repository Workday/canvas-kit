import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';
import {type} from '@workday/canvas-kit-react/tokens';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField
      label="Choose Your Pizza Crust"
      labelPosition={FormField.LabelPosition.Left}
      useFieldset={true}
    >
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
