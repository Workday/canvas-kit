import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const useFormFieldModel = createModelHook({
  defaultConfig: {
    /**
     * Optional flag to denote if this field has an error to display. When true the `FormField.Input` will have
     * `required` set to true, and usually some subcomponents will have a error color applied.
     * @default false
     */
    hasError: false,
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
