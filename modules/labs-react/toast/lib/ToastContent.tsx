/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {Popup, type} from '@workday/canvas-kit-react';

export interface ToastContentProps {
  children: React.ReactNode;
}

const ToastContentContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  ...type.levels.subtext.large,
});

export const ToastContent = createComponent('div')({
  displayName: 'Toast.Content',
  Component: ({children}: ToastContentProps, ref, Element) => {
    return (
      <Popup.Body>
        <ToastContentContainer>{children}</ToastContentContainer>
      </Popup.Body>
    );
  },
});
