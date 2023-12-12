import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const RefForwarding = () => {
  const [value, setValue] = React.useState('medium');
  const ref = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <>
      <Select items={options}>
        <FormField label="Contact">
          <Select.Input ref={ref} onChange={e => handleChange(e)} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <PrimaryButton onClick={handleClick}>Focus Select</PrimaryButton>
    </>
  );
};
