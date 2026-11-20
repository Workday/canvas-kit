import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stackStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: system.gap.lg,
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const RefForwarding = () => {
  // @ts-ignore
  const [value, setValue] = React.useState('medium');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (ref && ref.current) {
      console.log(ref);
      ref.current.focus();
    }
  };

  return (
    <div className={stackStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} ref={ref} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Select</PrimaryButton>
    </div>
  );
};
