import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {Title} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {calc, createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {RadioGroup} from '../../../radio';

const formStyles = createStyles({
  marginBlockStart: system.space.x3,
  marginBlockEnd: system.space.x3,
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
    label: 'Mushrooms',
    checked: false,
  },
];

export const FormFieldGroupExample = () => {
  const [toppingsState, setToppingsState] = React.useState(toppings);
  const [error, setError] = React.useState(undefined);
  const [formData, setFormData] = React.useState({
    toppings: [],
    crust: '',
  });
  const handleCheckboxCheck = id => {
    setToppingsState(
      toppingsState.map(item => (item.id === id ? {...item, checked: !item.checked} : item))
    );
  };

  const [value, setValue] = React.useState<string>('');

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
        <FormFieldGroup error={'error'} id="foo123" orientation="horizontal">
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
                  label={item.label}
                />
              );
            })}
          </FormFieldGroup.List>
          <FormFieldGroup.Hint>
            {error === 'error' && 'You must choose one topping'}
          </FormFieldGroup.Hint>
        </FormFieldGroup>
        <FormFieldGroup error={'alert'} orientation="horizontal">
          <FormFieldGroup.Legend>Choose Your Crust</FormFieldGroup.Legend>
          <FormFieldGroup.List as={RadioGroup} onChange={handleRadioChange} value={value}>
            <RadioGroup.RadioButton value="thin-crust">Thin Crust</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="hand-tossed">Hand Tossed</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="deep-dish">Deep Dish</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
          </FormFieldGroup.List>
          <FormFieldGroup.Hint>
            {error === 'error' && 'You must choose a crust'}
          </FormFieldGroup.Hint>
        </FormFieldGroup>
        <button type="submit">Submit Your Choices</button>
      </form>
    </div>
  );
};
