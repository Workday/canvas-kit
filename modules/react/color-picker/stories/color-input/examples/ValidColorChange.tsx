import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {type} from '@workday/canvas-kit-react/tokens';

export const ValidColorChange = () => {
  const [value, setValue] = React.useState('');
  const [validColor, setValidColor] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleValidColorChange = (color: string) => {
    setValidColor(color);
  };

  return (
    <>
      <FormField>
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input
            as={ColorInput}
            onChange={handleChange}
            onValidColorChange={handleValidColorChange}
            value={value}
          />
        </FormField.Field>
      </FormField>
      <p style={type.levels.subtext.large}>Last valid color: {validColor}</p>
    </>
  );
};
