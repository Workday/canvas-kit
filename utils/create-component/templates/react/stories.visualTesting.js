module.exports = (modulePath, storyPath, pascalCaseName, rootPath) => `
import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../${rootPath}/utils/storybook';

import {${pascalCaseName}} from '${modulePath}';

export default withSnapshotsEnabled({
  title: '${storyPath}',
  component: ${pascalCaseName},
});

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
