import React from 'react';

import {createSubcomponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {useToastModel} from './hooks/useToastModel';

export interface ToastMessageProps extends BoxProps {}

const StyledMessage = styled(Box)<StyledType>({
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
  display: 'flex',
  flexDirection: 'column',
});

export const ToastMessage = createSubcomponent('div')({
  modelHook: useToastModel,
})<ToastMessageProps>(({children, ...elemProps}, Element, model) => {
  return (
    <StyledMessage id={model.state.id} as={Element} {...elemProps}>
      {children}
    </StyledMessage>
  );
});
