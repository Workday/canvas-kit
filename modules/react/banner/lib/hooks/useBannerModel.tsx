import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

type BannerState = {
  /**
   * Optional flag to denote the banner has an error to display. When true the default `Banner.Icon`
   * will be `exclamationCircleIcon`, and a themed error color will be applied.
   * @default false
   */
  hasError?: boolean;
  /**
   * Optional flag to denote the banner is stuck to the side of the screen. When true the default `Banner.ActionText`
   * will be hidden, and some basic styles will be applied.
   * You will still need to manually set the css `position` value.
   * @default false
   */
  isSticky?: boolean;
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
  id?: string;
};

type BannerEvents = {};

export type BannerModel = Model<BannerState, BannerEvents>;

const BannerEventMap = createEventMap<BannerEvents>()({
  guards: {},
  callbacks: {},
});

export type BannerModelConfig = BannerState &
  Partial<ToModelConfig<BannerState, BannerEvents, typeof BannerEventMap>>;

export const useBannerModel = (config: BannerModelConfig = {}): BannerModel => {
  const id = useUniqueId(config.id);

  const state = {
    hasError: config.hasError ?? false,
    isSticky: config.isSticky ?? false,
    id,
  };

  const events = useEventMap(BannerEventMap, state, config, {});

  return {
    state,
    events,
  };
};
