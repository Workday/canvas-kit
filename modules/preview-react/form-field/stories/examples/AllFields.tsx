import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Select} from '@workday/canvas-kit-react/select';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {Switch} from '@workday/canvas-kit-react/switch';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  gap: calc.subtract(system.space.x6, system.space.x1),
  padding: calc.subtract(system.space.x10, system.space.x1),
  borderRadius: system.space.x1,
});

export const AllFields = () => {
  return (
    <Flex cs={parentContainerStyles}>
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
      <FormFieldGroup error="error" orientation="horizontal" grow>
        <FormFieldGroup.Legend>Choose Your Crust</FormFieldGroup.Legend>
        <FormFieldGroup.Container>
          <FormFieldGroup.List as={RadioGroup}>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin-crust">
              Thin Crust
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="hand-tossed">
              Hand Tossed
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
              Deep Dish
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
              Cauliflower
            </FormFieldGroup.Input>
          </FormFieldGroup.List>
        </FormFieldGroup.Container>
      </FormFieldGroup>
      <FormFieldGroup grow>
        <FormFieldGroup.Legend>Checkbox Legend</FormFieldGroup.Legend>
        <FormFieldGroup.Input checked={true} as={Checkbox} label="Checkbox Label" />
        <FormFieldGroup.Input checked={false} as={Checkbox} label="Thin Crust" />
        <FormFieldGroup.Input checked={false} as={Checkbox} label="Extra Cheese" />
      </FormFieldGroup>

      <FormField orientation="horizontal" grow>
        <FormField.Label>Switch Label</FormField.Label>
        <FormField.Input as={Switch} />
      </FormField>
    </Flex>
  );
};
