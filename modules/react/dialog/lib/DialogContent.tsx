import React from 'react';
import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {DialogModel} from './useDialogModel';
import {DialogModelContext} from './Dialog';
import {DialogBody} from './DialogBody';

export interface DialogContentProps {
  children: React.ReactNode;
  model?: DialogModel;
}

export const DialogContent = createComponent(DialogBody)({
  displayName: 'Dialog.Content',
  Component: ({children, model, ...elemProps}: DialogContentProps, ref, Element) => {
    const {state} = useModelContext(DialogModelContext, model);

    return state.visible ? <Element ref={ref}>{children}</Element> : null;
  },
});
