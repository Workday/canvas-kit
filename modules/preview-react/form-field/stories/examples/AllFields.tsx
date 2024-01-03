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
  return (
    <Flex
      cs={{
        flexDirection: 'column',
        gap: '20px',
        padding: '36px',
        borderRadius: '4px',
      }}
    >
      <FormField grow>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Input as={TextInput} />
      </FormField>

      <FormField isRequired={true} error="alert" grow>
        <FormField.Label>Email</FormField.Label>
        <FormField.Container>
          <FormField.Input as={TextInput} />
          <FormField.Hint>Hint text for your input</FormField.Hint>
        </FormField.Container>
      </FormField>
      <FormField grow>
        <FormField.Label>Text Area Label</FormField.Label>
        <FormField.Input as={TextArea} />
      </FormField>
      <FormField error="error" grow>
        <FormField.Label>Choose a Crust</FormField.Label>
        <Select items={['Pizza', 'Cheeseburger', 'Fries']}>
          <FormField.Input as={Select.Input} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
      <FormField as="fieldset" isRequired={true} error={'error'} orientation="horizontal" grow>
        <FormField.Label as="legend">Radio Group Legend</FormField.Label>
        <FormField.Container>
          <FormField.Input as={RadioGroup}>
            <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="butter">
              Butter - the best thing to put on bread
            </RadioGroup.RadioButton>
          </FormField.Input>
          <FormField.Hint>Error Message</FormField.Hint>
        </FormField.Container>
      </FormField>
      <FormField grow>
        <FormField.Label>Checkbox Legend</FormField.Label>
        <FormField.Input checked={true} as={Checkbox} label="Checkbox Label" />
        <FormField.Input checked={false} as={Checkbox} label="Thin Crust" />
        <FormField.Input checked={false} as={Checkbox} label="Extra Cheese" />
      </FormField>

      <FormField orientation="horizontal" grow>
        <FormField.Label>Switch Label</FormField.Label>
        <FormField.Input as={Switch} />
      </FormField>
    </Flex>
  );
};
