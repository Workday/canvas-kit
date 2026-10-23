import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';

export const useRadioModel = createModelHook({
  defaultConfig: {
    /**
     * The id of hint or error text associated with each radio.
     *
     * Do not set this when radios are wrapped in `FormFieldGroup.Input`. `FormFieldGroup.Input`
     * writes `aria-describedby="hint-{id}"` on each radio, and that value overrides
     * `aria-describedby` set on `RadioGroup`. Put the message in `FormFieldGroup.Hint`.
     *
     * ```tsx
     * <FormFieldGroup error="caution">
     *   <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
     *   <FormFieldGroup.Field>
     *     <FormFieldGroup.List as={RadioGroup} name="crust" value={value} onChange={handleChange}>
     *       <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
     *         Deep dish
     *       </FormFieldGroup.Input>
     *       <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
     *         Thin
     *       </FormFieldGroup.Input>
     *     </FormFieldGroup.List>
     *     <FormFieldGroup.Hint>Deep dish is an extra $2.99.</FormFieldGroup.Hint>
     *   </FormFieldGroup.Field>
     * </FormFieldGroup>
     * ```
     */
    'aria-describedby': undefined as string | undefined,
    /**
     * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
     */
    name: '',
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
