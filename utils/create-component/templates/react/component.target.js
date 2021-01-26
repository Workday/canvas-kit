module.exports = (camelCaseName, pascalCaseName) => `import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react-common';

import {${pascalCaseName}ModelContext} from './${pascalCaseName}';
import { ${pascalCaseName}Model } from './use${pascalCaseName}Model';

export interface ${pascalCaseName}TargetProps {
  model?: ${pascalCaseName}Model;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: ${pascalCaseName}Model,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  return {
    onClick(event: React.MouseEvent<HTMLElement>) {
      elemProps.onClick?.(event);

      if (state.open) {
        events.close({});
      } else {
        events.open({});
      }
    },
  };
};

export const ${pascalCaseName}Target = createComponent('button')({
  displayName: '${pascalCaseName}.Target',
  Component: ({children, model, ...elemProps}: ${pascalCaseName}TargetProps, ref, Element) => {
    const ${camelCaseName}Model = useModelContext(${pascalCaseName}ModelContext, model);

    const target = useDiscloseTarget(${camelCaseName}Model, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
`;
