import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const useFormFieldModel = createModelHook({
  defaultConfig: {
    /**
     * Optional flag to denote if this field has an error or warning to display.
     * If value is `error`: `aria-invalid` is added to the `FormField.Input` and the red error ring is added.
     * If value is `cautiion`: A visual orange warning ring is added to the `FormField.Input`.
     */
    error: undefined as undefined | 'error' | 'caution',
    /**
     * Optional `id` provided to `FormField`'s subcomponents as HTML attributes:
     * - `FormField.Input` will set `aria-describedby` to `hint-${id}`
     * - `FormField.Input` will set `id` to `input-${id}`
     * - `FormField.Label` will set `htmlFor` to `input-${id}`
     * - `FormField.Hint` will set `id` to `hint-${id}`
     *
     * If a value is not provided, a unique id will be automatically created by `useUniqueId()`.
     * @default {useUniqueId}
     */
    id: '',
    /**
     * Optional flag to denote if this field is required. When true the `FormField.Input` will have
     * `required` set to true, and an asterisk will be appended to the `FormField.Label`.
     */
    isRequired: false,

    orientation: 'vertical' as 'vertical' | 'horizontalEnd' | 'horizontalStart',
  },
})(config => {
  const id = useUniqueId(config.id);

  const state = {
    ...config,
    id,
  };

  return {
    state,
    events: {},
  };
});
