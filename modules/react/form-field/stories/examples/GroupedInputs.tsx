import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Banner} from '@workday/canvas-kit-react/banner';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  margin: `${system.space.zero} ${system.space.x3}`,
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

const bannerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const GroupedInputs = () => {
  const [toppingsState, setToppingsState] = React.useState(toppings);
  const [error, setError] = React.useState(undefined);
  const [radioError, setRadioError] = React.useState(undefined);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const [value, setValue] = React.useState<string>('');
  const [formData, setFormData] = React.useState({
    toppings: [],
    crust: '',
  });
  const handleCheckboxCheck = id => {
    if (error) {
      setError(undefined);
    }
    setToppingsState(
      toppingsState.map(item => (item.id === id ? {...item, checked: !item.checked} : item))
    );
  };

  const handleRadioChange = (e: React.ChangeEvent) => {
    if (radioError) {
      setRadioError(undefined);
    }
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const radioError = !value && toppingsState.some(item => !item.checked) ? 'error' : undefined;
    const error = toppingsState.every(item => !item.checked) ? 'error' : undefined;

    setRadioError(radioError);
    setError(error);
    if (!error && !radioError && toppingsState.some(item => item.checked) && value) {
      setShowSuccess(true);
    }
    setFormData({
      toppings: toppingsState,
      crust: value,
    });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (showSuccess) {
        setShowSuccess(false);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const handleReset = () => {
    setFormData({toppings: [], crust: ''});
    setError(undefined);
    setValue('');
    setRadioError('');
    setShowSuccess(false);
    setToppingsState(
      toppingsState.map(item => {
        return {...item, checked: false};
      })
    );
  };

  return (
    <div>
      <h3>Choose your pizza options</h3>
      <AriaLiveRegion role="alert">
        <div style={{display: 'flex', gap: '40px'}}>
          {error || radioError ? (
            <Banner isSticky hasError className={bannerStyles}>
              <Banner.Label>
                {error && radioError
                  ? 'At least one topping and crust selection is required'
                  : error
                    ? 'You must choose at least one topping'
                    : radioError
                      ? 'You must choose a crust'
                      : ''}
              </Banner.Label>
            </Banner>
          ) : null}
          {showSuccess && (
            <Banner isSticky className={bannerStyles}>
              <Banner.Label>You've successfully submitted your pizza options.</Banner.Label>
            </Banner>
          )}
        </div>
      </AriaLiveRegion>

      <form className={formStyles} onSubmit={handleSubmit}>
        <FormFieldGroup error={error} isRequired>
          <FormFieldGroup.Label>Choose Your Toppings</FormFieldGroup.Label>
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
        <FormFieldGroup error={radioError} isRequired>
          <FormFieldGroup.Label>Choose Your Crust</FormFieldGroup.Label>
          <FormFieldGroup.Field>
            <FormFieldGroup.List
              as={RadioGroup}
              onChange={handleRadioChange}
              value={value}
              name="crust"
            >
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
              {radioError === 'error' ? 'You must choose a crust' : null}
            </FormFieldGroup.Hint>
          </FormFieldGroup.Field>
        </FormFieldGroup>
        <div className={formButtonStyles}>
          <PrimaryButton type="submit">Submit Your Choices</PrimaryButton>
          <SecondaryButton onClick={() => handleReset()}>Reset Form</SecondaryButton>
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
