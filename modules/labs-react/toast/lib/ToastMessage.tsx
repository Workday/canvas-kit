import React from 'react';

import {createSubcomponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {useToastModel} from './hooks/useToastModel';

export interface ToastMessageProps extends FlexProps {}

const StyledMessage = styled(Flex)<StyledType>({
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
});

export const ToastMessage = createSubcomponent('div')({
  modelHook: useToastModel,
})<ToastMessageProps>(({children, ...elemProps}, Element, model) => {
  return (
    <StyledMessage flexDirection="column" id={model.state.id} as={Element} {...elemProps}>
      {children}
    </StyledMessage>
  );
});
