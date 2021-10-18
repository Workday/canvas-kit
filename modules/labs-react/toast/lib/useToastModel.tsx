import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {useState} from 'react';

type ToastState = {
  closeButtonExist?: boolean;
  actionButtonExist?: boolean;
};

export enum ToastButtonType {
  Close = 'Close',
  Action = 'Action',
}

export type ToastEvents = {
  updateButtonExist(data: {buttonType: ToastButtonType; status: boolean}): void;
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
    updateButtonExist({buttonType, status}) {
      if (buttonType === ToastButtonType.Close) {
        setCloseButtonExist(status);
      } else if (buttonType === ToastButtonType.Action) {
        setActionButtonExist(status);
      }
    },
  });

  return {
    state,
    events,
  };
};
