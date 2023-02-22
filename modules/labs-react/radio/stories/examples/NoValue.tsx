import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      console.log(target.value);
      setValue(target.value);
    }
  };
  return (
    <FormField
      label="Choose Your Pizza Crust"
      labelPosition={FormField.LabelPosition.Left}
      useFieldset={true}
    >
      <RadioGroup name="crust" initialValue={value} onChange={handleChange}>
        <RadioGroup.Button>
          <RadioGroup.Input />
          <RadioGroup.Label>Deep Dish</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input />
          <RadioGroup.Label>Thin</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input />
          <RadioGroup.Label>Gluten free</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input />
          <RadioGroup.Label>Cauliflower</RadioGroup.Label>
        </RadioGroup.Button>
      </RadioGroup>
    </FormField>
  );
};
