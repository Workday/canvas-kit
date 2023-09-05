import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

const options = [
  {id: 'E-mail', data: {textValue: 'foo'}},
  {id: 'Phone'},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail'},
  {id: 'Mobile Phone'},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    disabled: false,
  },
];
const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const RefForwarding = () => {
  const [value, setValue] = React.useState('medium');
  const ref = React.useRef(null);

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
      <Select items={options} nonInteractiveIds={disabledItems}>
        <FormField label="Contact" inputId="refforwarding-select">
          <Select.Input ref={ref} onChange={e => handleChange(e)} id="refforwarding-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return (
                    <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                      {item.id}
                    </Select.Item>
                  );
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <PrimaryButton onClick={handleClick}>Focus Select</PrimaryButton>
    </>
  );
};
