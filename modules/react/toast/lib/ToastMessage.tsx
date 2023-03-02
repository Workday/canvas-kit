import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useToastModel} from './hooks/useToastModel';
import {Subtext} from '@workday/canvas-kit-react/text';

export interface ToastMessageProps extends FlexProps {}

export const ToastMessage = createSubcomponent('p')({
  modelHook: useToastModel,
})<ToastMessageProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Subtext
      size="large"
      wordBreak="break-word"
      marginY="zero"
      id={model.state.id}
      as={Element}
      {...elemProps}
    >
      {children}
    </Subtext>
  );
});
