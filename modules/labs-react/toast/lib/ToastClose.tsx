/** @jsx jsx */
import {jsx} from '@emotion/core';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {IconButtonProps, Popup} from '@workday/canvas-kit-react';
import {ToastButtonType, ToastModel} from './useToastModel';
import {ToastModelContext} from './Toast';

export interface ToastCloseProps extends Partial<IconButtonProps> {
  model?: ToastModel;
  onClose: () => void;
}

export const ToastClose = createComponent('div')({
  displayName: 'Toast.Close',
  Component: ({onClose, model, ...elemProps}: ToastCloseProps, ref, Element) => {
    const {
      events: {updateButtonExistState},
    } = useModelContext(ToastModelContext, model);
    updateButtonExistState({buttonType: ToastButtonType.Close, status: true});
    return <Popup.CloseIcon aria-label="Close" onClick={onClose} size="small" {...elemProps} />;
  },
});
