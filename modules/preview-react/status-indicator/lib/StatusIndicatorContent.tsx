import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';

import {useStatusIndicatorModel, useStatusIndicatorContent} from './hooks';

const StyledContainer = styled(Box)<StyledType>({
  ...type.levels.subtext.medium,
  background: colors.frenchVanilla300,
  padding: space.s,
  border: `1px solid ${colors.licorice600}`,
});

export const StatusIndicatorContent = createSubcomponent('p')({
  displayName: 'StatusIndicator.Content',
  modelHook: useStatusIndicatorModel,
  elemPropsHook: useStatusIndicatorContent,
})<ExtractProps<typeof Box, never>>(({children, ...elemProps}, Element, model) => {
  if (!model.state.open) {
    // If it is not open just skip rendering
    return null;
  }

  return (
    <StyledContainer as={Element} {...elemProps}>
      {children}
    </StyledContainer>
  );
});
