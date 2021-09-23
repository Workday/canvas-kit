import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {useToastModel, ToastModel, ToastModelConfig} from './useToastModel';
import {ToastContent} from './ToastContent';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastAction} from './ToastAction';

export const ToastModelContext = React.createContext<ToastModel>({} as any);

export interface ToastProps extends ToastModelConfig {
  model?: ToastModel;
  children: React.ReactNode;
}

export const Toast = createComponent()({
  displayName: 'Toast',
  Component: ({children, model, ...config}: ToastProps, ref, Element) => {
    const value = useDefaultModel(model, config, useToastModel);

    return <ToastModelContext.Provider value={value}>{children}</ToastModelContext.Provider>;
  },
  subComponents: {
    Content: ToastContent,
    Icon: ToastIcon,
    Message: ToastMessage,
    Action: ToastAction,
  },
});
