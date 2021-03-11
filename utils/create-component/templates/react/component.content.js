module.exports = pascalCaseName => `import React from 'react';

import {colors, spacing} from '@workday/canvas-kit-react/core';
import {createComponent, styled, StyledType, useModelContext} from '@workday/canvas-kit-react/common';

import {${pascalCaseName}ModelContext} from './${pascalCaseName}';
import { ${pascalCaseName}Model } from './use${pascalCaseName}Model';

export interface ${pascalCaseName}ContentProps {
  model?: ${pascalCaseName}Model;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: spacing.s,
  border: \`1px solid \${colors.licorice600}\`,
});

export const ${pascalCaseName}Content = createComponent('div')({
  displayName: '${pascalCaseName}.Content',
  Component: ({children, model, ...elemProps}: ${pascalCaseName}ContentProps, ref, Element) => {
    const {state} = useModelContext(${pascalCaseName}ModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});
`;
