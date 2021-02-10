// React stories template

module.exports = (modulePath, storyPath, pascalCaseName, rootPath) => `import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, withSnapshotsEnabled} from '../${rootPath}/utils/storybook';

import {${pascalCaseName}, use${pascalCaseName}Model} from '${modulePath}';

export default withSnapshotsEnabled({
  title: '${storyPath}',
  component: ${pascalCaseName},
});

export const ${pascalCaseName}States = () => {
  const model = use${pascalCaseName}Model();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
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
        {props => {
          const state = {open: props.open};

          return (
            <${pascalCaseName} model={{...model, state}}>
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
