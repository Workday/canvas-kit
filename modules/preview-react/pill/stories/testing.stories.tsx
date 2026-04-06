import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {stateTableColumnProps} from '@workday/canvas-kit-react/button/stories/visual-testing/utils';
// @ts-ignore: Cannot find module error
import testAvatar from './examples/test-avatar.png';

export default {
  title: 'Testing/Preview/Pill',
  component: Pill,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const ReadOnlyPillStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Default read only',
            props: {},
          },
          {
            label: 'With max width',
            props: {maxWidth: 200},
          },
        ]}
      >
        {({maxWidth}) => {
          return (
            <Pill variant="readOnly" maxWidth={maxWidth}>
              {maxWidth ? 'This is a super long te that should overflow' : 'PillLabel'}
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const PillStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Icon',
            props: {},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {props => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              <Pill.Icon aria-label="add" />
              <Pill.Label>Regina Skeltor</Pill.Label>
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const PillStatesAvatar = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Avatar',
            props: {},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {props => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              <Pill.Avatar name="Avatar" url={testAvatar} />
              <Pill.Label>Regina Skeltor</Pill.Label>
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const PillStatesCount = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Count',
            props: {count: true},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {props => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              <Pill.Label>Shoes</Pill.Label>
              <Pill.Count>30</Pill.Count>
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const RemovablePillStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Removable',
            props: {},
          },
          {
            label: 'With Avatar',
            props: {avatar: true},
          },
          {
            label: 'With Max Width',
            props: {maxWidth: 250},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({avatar, maxWidth, ...props}) => {
          return (
            <Pill variant="removable" {...props}>
              {avatar && <Pill.Avatar name="Avatar" url={testAvatar} />}
              {maxWidth ? (
                <Pill.Label>This is a super long text that should overflow</Pill.Label>
              ) : (
                <Pill.Label>PillLabel</Pill.Label>
              )}
              <Pill.IconButton aria-label="Remove" {...props} />
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
