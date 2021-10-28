/** @jsx jsx */
import {jsx} from '@emotion/core';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';
import styled from '@emotion/styled';

export interface ToastCloseProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

const PopupCloseIcon = styled(Popup.CloseIcon)({
  position: 'relative',
});

export const ToastClose = createComponent('button')({
  displayName: 'Toast.Close',
  Component: ({...elemProps}: ToastCloseProps, ref, Element) => {
    return <PopupCloseIcon size="small" {...elemProps} />;
  },
});
