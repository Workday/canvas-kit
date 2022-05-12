import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type PillState = {
  maxWidth?: number | string;
  disabled?: boolean;
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
  /**
   * Use to determine if a pill is removable and pass the click event to the semantic icon button
   * Use this when you want to define an action the pill that might be destructive
   */
  onDelete?: () => void | undefined;
  /**
   * Determines the max width of the pill. If the pill text is longer than the max width,
   * text will be truncated and a tooltip will show the rest of the content when hovered over
   */
  maxWidth?: number | string;
  /**
   * Use to disable a pill.
   */
  disabled?: boolean;
} & Partial<ToModelConfig<PillState, PillEvents, typeof pillEventMap>>;

export const usePillModel = (config: PillModelConfig = {}): PillModel => {
  const state = {
    maxWidth: config.maxWidth || 200,
    disabled: config.disabled || false,
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
