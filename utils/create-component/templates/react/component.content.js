const componentContent = pascalCaseName => `
import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Box} from '@workday/canvas-kit-react/layout';

import { use${pascalCaseName}Model, use${pascalCaseName}Content } from './hooks';

const stencil = createStencil({
  base: {
    ...system.type.subtext.medium,
    background: system.color.surface.default,
    padding: system.padding.sm
  }
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
    <Box as={Element} {...handleCsProp(elemProps, stencil())}>
      {children}
    </Box>
  );
});
`;

export default componentContent;
