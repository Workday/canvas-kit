import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Select} from '@workday/canvas-kit-react/select';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {Switch} from '@workday/canvas-kit-react/switch';

export const AllFields = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex
      cs={{
        flexDirection: 'column',
        gap: '20px',
        padding: '24px',
        borderRadius: '4px',
        border: '1px solid gray',
      }}
    >
      <FormField>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Input width="100%" as={TextInput} value={value} onChange={handleChange} />
      </FormField>

      <FormField isRequired={true}>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Container cs={{width: '100%'}}>
          <FormField.Input
            width="100%"
            as={TextInput}
            value={value}
            onChange={e => console.log(e)}
          />
          <FormField.Hint>When in doubt, go with Butter.</FormField.Hint>
        </FormField.Container>
      </FormField>
      <FormField>
        <FormField.Label>Choose a Crust</FormField.Label>
        <FormField.Input as={TextArea} />
      </FormField>
      <FormField error="error" width="100%">
        <FormField.Label>Choose a Crust</FormField.Label>
        <Select items={['Pizza', 'Cheeseburger', 'Fries']}>
          <FormField.Input width="100%" as={Select.Input} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
      <FormField as="fieldset" isRequired={true} error={'error'}>
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
      </FormField>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose a Crust</FormField.Label>
        <FormField.Input
          as={Checkbox}
          id="foo"
          label="Checkbox Label"
          onChange={handleChange}
          value={value}
        />
      </FormField>

      <FormField orientation="horizontal">
        <FormField.Label>Choose a Crust</FormField.Label>
        <FormField.Input as={Switch} />
      </FormField>
    </Flex>
  );
};
