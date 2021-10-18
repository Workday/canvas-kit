/** @jsx jsx */
import {jsx} from '@emotion/core';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';
import {ToastButtonType, ToastModel} from './useToastModel';
import {ToastModelContext} from './Toast';

export interface ToastCloseProps {
  model?: ToastModel;
  onClose: () => void;
}

export const ToastClose = createComponent('div')({
  displayName: 'Toast.Close',
  Component: ({onClose, model}: ToastCloseProps, ref, Element) => {
    const {events} = useModelContext(ToastModelContext, model);
    events.updateButtonExist({buttonType: ToastButtonType.Close, status: true});
    return <Popup.CloseIcon aria-label="Close" onClick={onClose} size="small" />;
  },
});
