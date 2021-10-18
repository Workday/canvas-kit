/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {createComponent, styled, useModelContext} from '@workday/canvas-kit-react/common';
import {Popup, space, type} from '@workday/canvas-kit-react';
import {ToastModel} from './useToastModel';
import {ToastModelContext} from './Toast';

export interface ToastContentProps {
  model?: ToastModel;
  children: React.ReactNode;
}

const ToastContentContainer = styled('div')<{closeButtonExist: any}>(
  {
    display: 'flex',
    alignItems: 'center',
    ...type.levels.subtext.large,
  },
  ({closeButtonExist}) => ({
    marginRight: closeButtonExist ? space.m : undefined,
  })
);

export const ToastContent = createComponent('div')({
  displayName: 'Toast.Content',
  Component: ({children, model}: ToastContentProps, ref, Element) => {
    const {state} = useModelContext(ToastModelContext, model);
    return (
      <Popup.Body>
        <ToastContentContainer closeButtonExist={state.closeButtonExist}>
          {children}
        </ToastContentContainer>
      </Popup.Body>
    );
  },
});
