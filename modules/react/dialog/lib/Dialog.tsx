import React from 'react';
import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {DialogModel, DialogModelConfig, useDialogModel} from './useDialogModel';
import {ActionButton} from './ActionButton';
import {DialogContent} from './DialogContent';
import {DialogHeading} from './DialogHeading';

export const DialogModelContext = React.createContext<DialogModel>({} as any);

export interface DialogProps extends DialogModelConfig {
  children: React.ReactNode;
  model?: DialogModel;
}

export const Dialog = createComponent()({
  displayName: 'Dialog',
  Component: ({children, model, ...config}: DialogProps) => {
    const value = useDefaultModel(model, config, useDialogModel);

    return <DialogModelContext.Provider value={value}>{children}</DialogModelContext.Provider>;
  },
  subComponents: {
    ActionButton,
    Content: DialogContent,
    Heading: DialogHeading,
  },
});
