import React from 'react';
import {createComponent, ExtractProps, StyledType} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';
import styled from '@emotion/styled';

export interface ToastCloseProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

const StyledCloseIcon = styled(Popup.CloseIcon)<StyledType & ToastCloseProps>({
  position: 'relative',
});

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.CloseIcon',
  Component: ({...elemProps}: ToastCloseProps, ref, Element) => {
    return <StyledCloseIcon as={Element} ref={ref} size="small" {...elemProps} />;
  },
});
