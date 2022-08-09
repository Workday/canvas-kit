module.exports = pascalCaseName => `
import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';

import { use${pascalCaseName}Model, use${pascalCaseName}Content } from './hooks';

const StyledContainer = styled('div')<StyledType>({
  ...type.levels.subtext.medium
  background: colors.frenchVanilla600,
  padding: space.s,
  border: \`1px solid \${colors.licorice600}\`,
});

export const ${pascalCaseName}Content = createSubcomponent('p')({
  displayName: '${pascalCaseName}.Content',
  modelHook: use${pascalCaseName}Model,
  elemPropsHook: use${pascalCaseName}Content,
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
`;
