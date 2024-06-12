import React from 'react';

import {createDefaultedVars, createStencil} from '@workday/canvas-kit-styling';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

const buttonStencil = createStencil({
  vars: {
    color: 'red',
  },
  base: ({color}) => ({
    padding: 10,
    color: color,
  }),
  modifiers: {
    size: {
      large: {
        padding: 30,
      },
      small: {
        padding: 5,
      },
    },
    position: {
      start: {
        paddingInlineStart: 5,
      },
      end: {
        paddingInlineEnd: 5,
      },
    },
  },
  compound: [
    {
      modifiers: {size: 'large', position: 'start'},
      styles: {
        paddingInlineStart: 15,
      },
    },
    {
      modifiers: {size: 'small', position: 'end'},
      styles: {
        paddingInlineEnd: 0,
      },
    },
  ],
});

export const CreateStencil = () => {
  const [value, setValue] = React.useState('ff0000');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <>
      <FormField orientation="horizontal">
        <FormField.Label>Color</FormField.Label>
        <FormField.Input as={ColorInput} value={value} onChange={onChange} />
      </FormField>
      <button {...buttonStencil({size: 'large', position: 'start', color: `#${value}`})}>
        Button
      </button>
    </>
  );
};
