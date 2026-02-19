import React from 'react';

import {useModelContext} from '@workday/canvas-kit-react/common';
import {
  formFieldStencil,
  useFormFieldHint,
  useFormFieldInput,
  useFormFieldLabel,
  useFormFieldModel,
} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const Custom = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useFormFieldModel({isRequired: true});

  return (
    <Flex cs={formFieldStencil({orientation: 'horizontalStart'})}>
      <Label model={model}>My Custom Field</Label>
      <Input model={model} value={value} onChange={handleChange} />
      <Hint model={model}>You can be anything</Hint>
    </Flex>
  );
};
