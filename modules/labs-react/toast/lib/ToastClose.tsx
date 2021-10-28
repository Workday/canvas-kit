/** @jsx jsx */
import {jsx} from '@emotion/core';

import {createComponent, ExtractProps, StyledType} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';
import styled from '@emotion/styled';

export interface ToastCloseProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

const PopupCloseIcon = styled(Popup.CloseIcon)<StyledType & ToastCloseProps>({
  position: 'relative',
});

export const ToastClose = createComponent('button')({
  displayName: 'Toast.Close',
  Component: ({...elemProps}: ToastCloseProps, ref, Element) => {
    return <PopupCloseIcon as={Element} ref={ref} size="small" {...elemProps} />;
  },
});
