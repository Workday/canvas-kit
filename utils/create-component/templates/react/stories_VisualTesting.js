// React stories template

module.exports = (storyPath, pascalCaseName, rootPath, unstable) => `
/// <reference path="${rootPath}/../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps, withSnapshotsEnabled} from '../../../../${unstable ? '../' : ''}utils/storybook';
import ${pascalCaseName} from '../index';

export default withSnapshotsEnabled({
  title: '${storyPath}',
  component: ${pascalCaseName},
});

export const ${pascalCaseName}States = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          prop1: [{value: true, label: 'Prop one on'}, {value: false, label: 'Prop one off'}],
          prop2: [
            {value: undefined, label: ''},
            {value: 'alert', label: 'Alert'},
            {value: 'error', label: 'Error'},
          ],
        }
      )}
      columnProps={permutateProps(
        {
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
          ],
          disabled: [{label: '', value: false}, {label: 'Disabled', value: true}],
        },
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <${pascalCaseName} {...props} />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

`;
