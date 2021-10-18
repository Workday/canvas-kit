/** @jsx jsx */
import {jsx} from '@emotion/core';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';

export interface ToastCloseProps {
  onClose: () => void;
}

export const ToastClose = createComponent('div')({
  displayName: 'Toast.Close',
  Component: ({onClose}: ToastCloseProps, ref, Element) => {
    return <Popup.CloseIcon aria-label="Close" onClick={onClose} size="small" />;
  },
});
