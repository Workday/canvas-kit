module.exports = (pascalCaseName, titleCaseName) => `
import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

import {use${pascalCaseName}Model} from './hooks';
import {${pascalCaseName}Target} from './${pascalCaseName}Target';
import {${pascalCaseName}Content} from './${pascalCaseName}Content';

export interface ${pascalCaseName}Props extends ExtractProps<typeof Box, never> {
  /**
   * Children of the ${titleCaseName}. Should contain a \`<${pascalCaseName}.Target>\`, a \`<${pascalCaseName}.Content>\`
   */
  children: React.ReactNode;
}

export const ${pascalCaseName} = createContainer('div')({
  displayName: '${pascalCaseName}',
  modelHook: use${pascalCaseName}Model,
  subComponents: {
    Target: ${pascalCaseName}Target,
    Content: ${pascalCaseName}Content,
  },
})<${pascalCaseName}Props>(({children, ...elemProps}, Element) => {

  return (
    <Box as={Element} {...elemProps}>
      {children}
    </Box>
  );
});
`;
