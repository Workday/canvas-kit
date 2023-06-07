import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup, RadioGroup2} from '@workday/canvas-kit-labs-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('thin');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  console.warn(value);

  return (
    <Flex flexDirection="column">
      {/* <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup name="pizza-crust" onChange={handleChange} initialValue={value}>
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
            <RadioGroup.Label>Gluten Free</RadioGroup.Label>
          </RadioGroup.Button>

          <RadioGroup.Button>
            <RadioGroup.Input value="cauliflower" />
            <RadioGroup.Label>Cauliflower</RadioGroup.Label>
          </RadioGroup.Button>

          <RadioGroup.Button>
            <RadioGroup.Input value="custom" />
            <RadioGroup.Label>
              My favorite pizza crust flavor is butter because it's the best thing to put on bread
            </RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      </FormField> */}
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup2 name="pizza-crust" onChange={handleChange} initialValue={value} value={value}>
          <RadioGroup2.RadioLabel>
            <RadioGroup2.RadioLabel.Input value="deep-dish" />
            <RadioGroup2.RadioLabel.Text>Deep Dish Poop</RadioGroup2.RadioLabel.Text>
          </RadioGroup2.RadioLabel>
          <RadioGroup2.RadioLabel>
            <RadioGroup2.RadioLabel.Input value="thin" />
            <RadioGroup2.RadioLabel.Text>Thin</RadioGroup2.RadioLabel.Text>
          </RadioGroup2.RadioLabel>
          <RadioGroup2.RadioLabel>
            <RadioGroup2.RadioLabel.Input value="gluten-free" />
            <RadioGroup2.RadioLabel.Text>Gluten Free</RadioGroup2.RadioLabel.Text>
          </RadioGroup2.RadioLabel>
          <RadioGroup2.RadioLabel>
            <RadioGroup2.RadioLabel.Input value="custom" />
            <RadioGroup2.RadioLabel.Text>
              My favorite pizza crust flavor is butter because it's the best thing to put on bread
            </RadioGroup2.RadioLabel.Text>
          </RadioGroup2.RadioLabel>

          {/* <RadioGroup2.RadioBaseButton>
            <RadioGroup2.RadioBaseButton.Input value="thin" />
            <RadioGroup2.RadioBaseButton.Label>Thin</RadioGroup2.RadioBaseButton.Label>
          </RadioGroup2.RadioBaseButton>

          <RadioGroup2.RadioBaseButton>
            <RadioGroup2.RadioBaseButton.Input value="gluten-free" />
            <RadioGroup2.RadioBaseButton.Label>Gluten Free</RadioGroup2.RadioBaseButton.Label>
          </RadioGroup2.RadioBaseButton> */}
        </RadioGroup2>
      </FormField>
    </Flex>
  );
};
