module.exports = pascalCaseName => `
import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

import { use${pascalCaseName}Model, use${pascalCaseName}Target } from './hooks';

export const ${pascalCaseName}Target = createSubcomponent(PrimaryButton)({
  displayName: '${pascalCaseName}.Target',
  modelHook: use${pascalCaseName}Model,
  elemPropsHook: use${pascalCaseName}Target,
})<ExtractProps<typeof PrimaryButton, never>>(({children, ...elemProps}, Element) => {
  return (
    <Element {...elemProps}>
      {children}
    </Element>
  );
});
`;
