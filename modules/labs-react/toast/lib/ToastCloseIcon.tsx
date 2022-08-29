import React from 'react';
import {createComponent, ExtractProps, StyledType} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';
import styled from '@emotion/styled';

export interface ToastCloseIconProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

// TODO Remove this once we extend style properties for buttons https://github.com/Workday/canvas-kit/issues/1746
const StyledCloseIcon = styled(Popup.CloseIcon)<StyledType & ToastCloseIconProps>({
  position: 'relative',
});

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.CloseIcon',
  Component: ({...elemProps}: ToastCloseIconProps, ref, Element) => {
    return <StyledCloseIcon as={Element} ref={ref} size="small" {...elemProps} />;
  },
});
