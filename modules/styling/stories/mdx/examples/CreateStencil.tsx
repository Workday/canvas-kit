import React from 'react';

import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {BodyText, LabelText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

const buttonStencil = createStencil({
  vars: {
    labelColor: 'red',
  },
  base: ({labelColor}) => ({
    padding: 10,
    color: labelColor,
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
  },
});

const labelStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    color: system.color.text.default,
    fontWeight: system.fontWeight.medium,
  },
});

export const CreateStencil = () => {
  const [value, setValue] = React.useState('ff0000');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const [size, setSize] = React.useState<string | number>('');

  return (
    <>
      <FormField>
        <FormField.Label>Set Button Label Color</FormField.Label>
        <FormField.Input as={ColorInput} value={value} onChange={onChange} />
      </FormField>
      <div>
        <div {...labelStencil()}>Choose Button Size</div>
        <SegmentedControl onSelect={data => setSize(data.id)}>
          <SegmentedControl.List aria-label="Set Size">
            <SegmentedControl.Item data-id="small" value="small">
              Small
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="large" value="large">
              Large
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </div>
      <button
        {...buttonStencil({
          size,
          labelColor: `#${value}`,
        })}
      >
        Button
      </button>
    </>
  );
};
