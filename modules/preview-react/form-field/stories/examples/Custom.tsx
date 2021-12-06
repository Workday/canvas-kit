import React from 'react';
import {
  useFormFieldHint,
  useFormFieldInput,
  useFormFieldLabel,
  useFormFieldModel,
  useFormFieldOrientation,
  FormFieldModelContext,
} from '@workday/canvas-kit-preview-react/form-field';
import {useModelContext} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-labs-react/layout';

const Label = ({model, children}) => {
  const localModel = useModelContext(FormFieldModelContext, model);
  const props = useFormFieldLabel(localModel);

  return (
    <label {...props}>
      {children}
      {model.state.isRequired ? '*' : ''}
    </label>
  );
};

const Hint = ({model, children}) => {
  const localModel = useModelContext(FormFieldModelContext, model);
  const props = useFormFieldHint(localModel);

  return <span {...props}>{children}</span>;
};

const Input = ({model, ...elementProps}) => {
  const localModel = useModelContext(FormFieldModelContext, model);
  const props = useFormFieldInput(localModel, elementProps);

  return <input type="text" required={model.state.isRequired ? true : false} {...props} />;
};

export const Custom = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useFormFieldModel({isRequired: true});

  const layoutProps = useFormFieldOrientation('vertical')

  return (
    <Stack {...layoutProps}>
      <Label model={model}>My Custom Field</Label>
      <Input model={model} value={value} onChange={handleChange} />
      <Hint model={model}>You can be anything</Hint>
    </Stack>
  );
};
