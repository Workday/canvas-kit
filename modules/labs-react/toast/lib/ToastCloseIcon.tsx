import React from 'react';

import {createComponent, ExtractProps, StyledType} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';
import styled from '@emotion/styled';

export interface ToastCloseIconProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

const PopupCloseIcon = styled(Popup.CloseIcon)<StyledType & ToastCloseIconProps>({
  position: 'relative',
});

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.Close',
  Component: ({...elemProps}: ToastCloseIconProps, ref, Element) => {
    return <PopupCloseIcon as={Element} ref={ref} size="small" {...elemProps} />;
  },
});
