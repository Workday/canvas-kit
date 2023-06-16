import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';

export const useRadioModel = createModelHook({
  defaultConfig: {
    /**
     * Use this attribute when you have a `FormField` that is in an `Alert` | `Error` or `Required` state. This will add attach an `aria-describedby` to each radio input so that screen readers can read out the message attached to the form field.
     * The value of this attribute needs to match the value passed to `hintId` on the `FormField`.
     *
     * ```tsx
     * <FormField
     *    error={FormField.ErrorType.Alert}
     *    hintId="hint-alert"
     *    hintText="Deep dish is an extra $2.99"
     *    label="Choose Your Pizza Crust"
     *    useFieldset={true}
     *  >
     *    <RadioGroup
     *      name="crust"
     *      onChange={handleChange}
     *      initialValue={value}
     *      aria-describedby="hint-alert"
     *    >
     *      <RadioGroup.Radio value="deep-dish">Deep dish</RadioGroup.Radio>
     *      <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
     *      <RadioGroup.Radio value="gluten-free">Gluten Free</RadioGroup.Radio>
     *      <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
     *    </RadioGroup>
     * </FormField>
     * ```
     */
    'aria-describedby': undefined as string | undefined,
    /**
     * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
     */
    name: '',
    /**
     * The initial selected value of the RadioGroup. If a string is provided, the Radio button with the corresponding value will be selected.
     */
    initialValue: undefined as string | undefined | number,
    /**
     * The selected value of the RadioGroup. Providing this prop will cause the model be in a controlled state
     */
    value: undefined as string | number | undefined,
    /**
     * `onChange` handler. Any `onChange` passed to children will be overwritten by this event so that there is only one per group.
     */
    onChange(event: React.ChangeEvent<HTMLInputElement>) {
      return;
    },
  },
})(config => {
  const inputRef = React.useRef<HTMLInputElement>();
  const state = {
    value: config.value,
    name: config.name,
    initialValue: config.initialValue,
    'aria-describedby': config['aria-describedby'],
    inputRef,
  };
  const events = {};

  return {
    onChange: config.onChange,
    state,
    events,
  };
});
