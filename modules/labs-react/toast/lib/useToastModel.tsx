import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {useState} from 'react';

type ToastState = {
  closeButtonExist?: boolean;
  actionButtonExist?: boolean;
};

export type ToastEvents = {
  updateButtonExist(data: {button: string; status: boolean}): void;
};

export const popupEventMap = createEventMap<ToastEvents>()({
  guards: {
    shouldUpdateExist: 'updateButtonExist',
  },
  callbacks: {
    onUpdateExist: 'updateButtonExist',
  },
});

export type ToastModel = Model<ToastState, ToastEvents>;

const toastEventMap = createEventMap<ToastEvents>()({
  guards: {},
  callbacks: {},
});

export type ToastModelConfig = Partial<
  ToModelConfig<ToastState, ToastEvents, typeof toastEventMap>
>;

export const useToastModel = (config: ToastModelConfig = {}): ToastModel => {
  const [closeButtonExist, setCloseButtonExist] = useState(false);
  const [actionButtonExist, setActionButtonExist] = useState(false);

  const state = {
    closeButtonExist,
    actionButtonExist,
  };

  const events = useEventMap(popupEventMap, state, config, {
    updateButtonExist({button, status}) {
      if (button === 'close') {
        setCloseButtonExist(status);
      } else if (button === 'action') {
        setActionButtonExist(status);
      }
    },
  });

  return {
    state,
    events,
  };
};
