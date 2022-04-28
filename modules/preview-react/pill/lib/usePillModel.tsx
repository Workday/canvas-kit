import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type PillState = {
  maxWidth?: number | string;
  disabled?: boolean;
  variations?: 'read-only' | 'interactive' | 'removable';
};

type PillEvents = {
  click(event?: Event | React.SyntheticEvent): void;
  delete(event?: Event | React.SyntheticEvent): void;
};

export type PillModel = Model<PillState, PillEvents>;

const pillEventMap = createEventMap<PillEvents>()({
  guards: {},
  callbacks: {},
});

export type PillModelConfig = {
  /**
   * Use to determine if a pill is of type `button` and pass the click event to the semantic button element
   */
  onClick?: () => void | undefined;
  onDelete?: () => void | undefined;
  maxWidth?: number | string;
  disabled?: boolean;
} & Partial<ToModelConfig<PillState, PillEvents, typeof pillEventMap>>;

export const usePillModel = (config: PillModelConfig = {}): PillModel => {
  let variationType: 'read-only' | 'interactive' | 'removable';
  if (config.onClick) {
    variationType = 'interactive';
  } else if (config.onDelete) {
    variationType = 'removable';
  } else {
    variationType = 'read-only';
  }

  const state = {
    maxWidth: config.maxWidth || 200,
    disabled: config.disabled || false,
    variations: variationType,
  };

  const events = useEventMap(pillEventMap, state, config, {
    click(data) {
      config.onClick?.();
    },
    delete() {
      config.onDelete?.();
    },
  });

  return {
    state,
    events,
  };
};
