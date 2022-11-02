import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const useBannerModel = createModelHook({
  defaultConfig: {
    /**
     * Optional flag to denote the banner has an error to display. When true the default `Banner.Icon`
     * will be `exclamationCircleIcon`, and a themed error color will be applied.
     * @default false
     */
    hasError: false,
    /**
     * Optional flag to denote the banner is stuck to the side of the screen. When true the default `Banner.ActionText`
     * will be hidden, and some basic styles will be applied.
     * You will still need to manually set the css `position` value.
     * @default false
     */
    isSticky: false,
    /**
     * Optional `id` provided to `Banner`'s subcomponents as HTML attributes:
     * - `Banner` will set `aria-describedby` to `label-${id}`
     * - `Banner` will set `aria-label` to `action-${id}`
     * - `Banner.Label` will set `id` to `label-${id}`
     * - `Banner.ActionText` will set `id` to `action-${id}`
     *
     * If a value is not provided, a unique id will be automatically created by `useUniqueId()`.
     * @default `useUniqueId()`
     */
    id: '',
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
