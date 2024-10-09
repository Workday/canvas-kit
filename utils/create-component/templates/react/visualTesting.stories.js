module.exports = (modulePath, storyPath, pascalCaseName, rootPath) => `
import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';

import {${pascalCaseName}} from '${modulePath}';

export default {
  title: 'Testing/${storyPath}',
  component: ${pascalCaseName},
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const ${pascalCaseName}States = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {({open, ...props}) => {
          return (
            <${pascalCaseName}  initialOpen={open} {...props}>
              <${pascalCaseName}.Target>Toggle</${pascalCaseName}.Target>
              <${pascalCaseName}.Content>Content</${pascalCaseName}.Content>
            </${pascalCaseName}>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
`;
