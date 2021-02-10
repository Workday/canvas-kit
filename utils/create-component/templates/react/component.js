module.exports = pascalCaseName => `
import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react-common';

import {
  use${pascalCaseName}Model,
  ${pascalCaseName}Model,
  ${pascalCaseName}ModelConfig,
} from './use${pascalCaseName}Model';
import {${pascalCaseName}Target} from './${pascalCaseName}.Target';
import {${pascalCaseName}Content} from './${pascalCaseName}.Content';

export const ${pascalCaseName}ModelContext = React.createContext<${pascalCaseName}Model>({} as any);

export interface ${pascalCaseName}Props extends ${pascalCaseName}ModelConfig {
  model?: ${pascalCaseName}Model;
  children: React.ReactNode;
}

export const ${pascalCaseName} = createComponent()({
  displayName: '${pascalCaseName}',
  Component: ({children, model, ...config}: ${pascalCaseName}Props) => {
    const value = useDefaultModel(model, config, use${pascalCaseName}Model);

    return (
      <${pascalCaseName}ModelContext.Provider value={value}>
        {children}
      </${pascalCaseName}ModelContext.Provider>
    );
  },
  subComponents: {
    Target: ${pascalCaseName}Target,
    Content: ${pascalCaseName}Content,
  },
});
`;
