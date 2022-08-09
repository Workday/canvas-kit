module.exports = (modulePath, storyPath, pascalCaseName, rootPath) => `import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common;
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../${rootPath}/utils/storybook';

import {${pascalCaseName}} from '${modulePath}';

export default withSnapshotsEnabled({
  title: '${storyPath}',
  component: ${pascalCaseName},
});

export const ${pascalCaseName}States = () => {

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
            <${pascalCaseName} {...state}>
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
