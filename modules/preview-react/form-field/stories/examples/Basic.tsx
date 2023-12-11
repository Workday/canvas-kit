import React from 'react';
import {
  useFormFieldHint,
  useFormFieldInput,
  useFormFieldLabel,
  useFormFieldModel,
  useFormFieldOrientation,
  FormField,
} from '@workday/canvas-kit-preview-react/form-field';
import {ErrorType, useModelContext} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Select} from '@workday/canvas-kit-react/select';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {Switch} from '@workday/canvas-kit-react/switch';

const Label = ({model, children}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldLabel(localModel);

  return (
    <label {...props}>
      {children}
      {model.state.isRequired ? '*' : ''}
    </label>
  );
};

const Hint = ({model, children}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldHint(localModel);

  return <span {...props}>{children}</span>;
};

const Input = ({model, ...elementProps}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldInput(localModel, elementProps);

  return <input type="text" required={model.state.isRequired ? true : false} {...props} />;
};

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useFormFieldModel({isRequired: true});

  const layoutProps = useFormFieldOrientation('vertical');

  return (
    <Flex {...layoutProps}>
      <FormField
        orientation="horizontal"
        isRequired={true}
        maxWidth="500px"
        error={ErrorType.Alert}
      >
        <FormField.Label>First Name </FormField.Label>
        <FormField.Container>
          <FormField.Input as={TextInput} value={value} onChange={e => console.log(e)} />
          <FormField.Hint>When in doubt, go with Butter.</FormField.Hint>
        </FormField.Container>
      </FormField>
      <FormField orientation="vertical" isRequired={true}>
        <FormField.Label>First Name</FormField.Label>
        <Flex flexDirection="column">
          <FormField.Input as={TextInput} value={value} onChange={e => console.log(e)} />
          <FormField.Hint>When in doubt, go with Butter.</FormField.Hint>
        </Flex>
      </FormField>
      <FormField as="fieldset" orientation="vertical" isRequired={true} error={'error'}>
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
      <FormField as="fieldset" orientation="vertical">
        <FormField.Label as="legend">Choose a Crust</FormField.Label>
        <FormField.Input
          as={Checkbox}
          id="foo"
          label="Checkbox Label"
          onChange={handleChange}
          value={value}
        />
      </FormField>
      <FormField orientation="vertical" error="error">
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
      <FormField orientation="vertical">
        <FormField.Label>Choose a Crust</FormField.Label>
        <FormField.Input as={TextArea} />
      </FormField>
      <FormField orientation="horizontal">
        <FormField.Label>Choose a Crust</FormField.Label>
        <FormField.Input as={Switch} />
      </FormField>
    </Flex>
  );
};
