import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stackStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: system.gap.lg,
});

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
    <div className={stackStyles}>
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
      <Subtext size="large">Last valid color: {validColor}</Subtext>
    </div>
  );
};
