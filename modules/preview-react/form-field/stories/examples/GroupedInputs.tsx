import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {system} from '@workday/canvas-tokens-web';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {RadioGroup} from '../../../radio';
import {createStyles} from '@workday/canvas-kit-styling';

const formStyles = createStyles({
  marginBlockStart: system.space.x3,
  marginBlockEnd: system.space.x3,
});

const formButtonStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

const toppings = [
  {
    id: 1,
    label: 'Pepperoni',
    checked: false,
  },
  {
    id: 2,
    label: 'Cheese',
    checked: false,
  },
  {
    id: 3,
    label: 'Pineapple',
    checked: false,
  },
  {
    id: 4,
    label: 'Mushrooms',
    checked: false,
  },
];

export const GroupedInputs = () => {
  const [toppingsState, setToppingsState] = React.useState(toppings);
  const [error, setError] = React.useState(undefined);
  const [value, setValue] = React.useState<string>('');
  const [formData, setFormData] = React.useState({
    toppings: [],
    crust: '',
  });
  const handleCheckboxCheck = id => {
    setToppingsState(
      toppingsState.map(item => (item.id === id ? {...item, checked: !item.checked} : item))
    );
  };

  const handleRadioChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value === '' || toppingsState.every(item => !item.checked)) {
      console.log(' in here');

      setError('error');
    } else {
      setError(undefined);
    }
    setFormData({
      toppings: toppingsState,
      crust: value,
    });
  };

  return (
    <div>
      <h3>Choose your pizza options</h3>
      <form className={formStyles} onSubmit={handleSubmit}>
        <FormFieldGroup error={error}>
          <FormFieldGroup.Legend>Choose Your Toppings</FormFieldGroup.Legend>
          <FormFieldGroup.List>
            {toppingsState.map(item => {
              return (
                <FormFieldGroup.Input
                  key={item.id}
                  onChange={() => handleCheckboxCheck(item.id)}
                  checked={item.checked}
                  value={item.label}
                  as={Checkbox}
                  disabled={item.label === 'Pineapple' ? true : undefined}
                  label={item.label}
                />
              );
            })}
          </FormFieldGroup.List>
          <FormFieldGroup.Hint>
            {error === 'error' && 'You must choose one topping'}
          </FormFieldGroup.Hint>
        </FormFieldGroup>
        <FormFieldGroup error={error}>
          <FormFieldGroup.Legend>Choose Your Crust</FormFieldGroup.Legend>
          <FormFieldGroup.Container>
            <FormFieldGroup.List as={RadioGroup} onChange={handleRadioChange} value={value}>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin-crust">
                Thin Crust
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="hand-tossed">
                Hand Tossed
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
                Deep Dish
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
                Cauliflower
              </FormFieldGroup.Input>
            </FormFieldGroup.List>
            <FormFieldGroup.Hint>
              {error === 'error' ? 'You must choose a crust' : null}
            </FormFieldGroup.Hint>
          </FormFieldGroup.Container>
        </FormFieldGroup>
        <div className={formButtonStyles}>
          <PrimaryButton type="submit">Submit Your Choices</PrimaryButton>
          <SecondaryButton
            onClick={() => {
              setFormData({toppings: [], crust: ''});
              setError(undefined);
              setValue('');
              setToppingsState(
                toppingsState.map(item => {
                  return {...item, checked: false};
                })
              );
            }}
          >
            Reset Form
          </SecondaryButton>
        </div>
      </form>
      <div>
        <div>
          Selected Toppings:{' '}
          {!error && formData.toppings.map(item => (item.checked ? `${item.label} ` : null))}
        </div>
        <div>Selected Crust: {formData.crust}</div>
      </div>
    </div>
  );
};
