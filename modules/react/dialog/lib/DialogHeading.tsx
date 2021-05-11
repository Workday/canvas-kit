import React from 'react';
import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {DialogModel} from './useDialogModel';
import {DialogModelContext} from './Dialog';

export interface DialogHeadingProps {
  children: React.ReactNode;
  model?: DialogModel;
}

export const DialogHeading = createComponent('h1')({
  displayName: 'Dialog.Heading',
  Component: ({children, model, ...elemProps}: DialogHeadingProps, ref, Element) => {
    const {state} = useModelContext(DialogModelContext, model);

    return state.visible ? (
      <Element ref={ref} id={state.id} {...elemProps}>
        {children}
      </Element>
    ) : null;
  },
});
