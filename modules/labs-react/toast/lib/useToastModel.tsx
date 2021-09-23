import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcons} from '@workday/canvas-system-icons-web';
import {CanvasColor} from '@workday/canvas-kit-react';

type ToastState = {
  icon?: CanvasSystemIcons;
  iconColor?: CanvasColor | string; // TODO: Fix
  actionText?: string;
};

type ToastEvents = {
  close?: any;
};

export type ToastModel = Model<ToastState, ToastEvents>;

const toastEventMap = createEventMap<ToastEvents>()({
  guards: {},
  callbacks: {},
});

type BaseToastModelConfig = {
  onClose?: () => void;
};

export type ToastModelConfig = BaseToastModelConfig &
  Partial<ToModelConfig<ToastState, ToastEvents, typeof toastEventMap>>;

export const useToastModel = (config: ToastModelConfig = {}): ToastModel => {
  const state = {};

  let evt = {};
  if (config?.onClose) {
    evt = {
      close: config.onClose,
    };
  }

  const events = useEventMap(toastEventMap, state, config, evt);

  return {
    state,
    events,
  };
};
