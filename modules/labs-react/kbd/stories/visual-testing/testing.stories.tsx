import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Labs/KBD',
  component: KBD,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const KBDStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: 'default', label: 'Default'},
          {value: 'plain', label: 'Plain'},
        ],
      })}
      columnProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
      })}
    >
      {props => (
        <div>
          <KBD {...props}>
            <KBD.Item>⌘</KBD.Item>
            <KBD.Item>C</KBD.Item>
          </KBD>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
