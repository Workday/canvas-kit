import React from 'react';
import {useFormFieldOrientation, FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const layoutProps = useFormFieldOrientation('vertical');

  return (
    <Flex>
      <FormField orientation="vertical">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      {/* <FormField orientation="vertical" isRequired={true}>
        <FormField.Label>First Name</FormField.Label>
        <Flex flexDirection="column">
          <FormField.Input as={TextInput} value={value} onChange={e => console.log(e)} />
          <FormField.Hint>When in doubt, go with Butter.</FormField.Hint>
        </Flex>
      </FormField> */}
      {/* <FormField as="fieldset" orientation="vertical" isRequired={true} error={'error'}>
        <FormField.Label as="legend">Choose a Crust</FormField.Label>
        <FormField.Input as={RadioGroup} onChange={handleChange} value={value}>
          <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="butter">
            Butter - the best thing to put on bread
          </RadioGroup.RadioButton>
        </FormField.Input>
        <FormField.Hint>When in doubt, go with Butter.</FormField.Hint>
      </FormField> */}
      {/* <FormField as="fieldset" orientation="vertical">
        <FormField.Label as="legend">Choose a Crust</FormField.Label>
        <FormField.Input
          as={Checkbox}
          id="foo"
          label="Checkbox Label"
          onChange={handleChange}
          value={value}
        />
      </FormField> */}
      {/* <FormField orientation="vertical" error="error">
        <FormField.Label>Choose a Crust</FormField.Label>
        <Select items={['Pizza', 'Cheeseburger', 'Fries']}>
          <FormField.Input as={Select.Input} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField> */}
      {/* <FormField orientation="vertical">
        <FormField.Label>Choose a Crust</FormField.Label>
        <FormField.Input as={TextArea} />
      </FormField>
      <FormField orientation="horizontal">
        <FormField.Label>Choose a Crust</FormField.Label>
        <FormField.Input as={Switch} />
      </FormField> */}
    </Flex>
  );
};
