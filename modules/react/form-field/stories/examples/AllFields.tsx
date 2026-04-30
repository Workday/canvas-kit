import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  gap: calc.subtract(system.gap.lg, system.gap.xs),
  padding: calc.subtract(base.size500, system.padding.xxs),
  borderRadius: system.shape.sm,
});

export const AllFields = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <FormField grow>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>

      <FormField isRequired={true} error="caution" grow>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} />
          <FormField.Hint>Hint text for your input</FormField.Hint>
        </FormField.Field>
      </FormField>
      <FormField grow>
        <FormField.Label>Text Area Label</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextArea} />
        </FormField.Field>
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
      <FormField as="fieldset" isRequired={true} error={'error'} orientation="horizontalStart" grow>
        <FormField.Label as="legend">Radio Group Legend</FormField.Label>
        <FormField.Field>
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
        </FormField.Field>
      </FormField>
      <FormField as="fieldset" grow>
        <FormField.Label as="legend">Checkbox Legend</FormField.Label>
        <FormField.Input checked={true} as={Checkbox} label="Checkbox Label" />
        <FormField.Input checked={false} as={Checkbox} label="Thin Crust" />
        <FormField.Input checked={false} as={Checkbox} label="Extra Cheese" />
      </FormField>
      <FormFieldGroup error="error" orientation="horizontalStart" grow>
        <FormFieldGroup.Label>Choose Your Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
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
        </FormFieldGroup.Field>
      </FormFieldGroup>
      <FormFieldGroup grow>
        <FormFieldGroup.Label>Checkbox Legend</FormFieldGroup.Label>
        <FormField.Field>
          <FormFieldGroup.List>
            <FormFieldGroup.Input checked={true} as={Checkbox} label="Checkbox Label" />
            <FormFieldGroup.Input checked={false} as={Checkbox} label="Thin Crust" />
            <FormFieldGroup.Input checked={false} as={Checkbox} label="Extra Cheese" />
          </FormFieldGroup.List>
        </FormField.Field>
      </FormFieldGroup>

      <FormField orientation="horizontalStart" grow>
        <FormField.Label>Switch Label</FormField.Label>
        <FormField.Field>
          <FormField.Input as={Switch} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
