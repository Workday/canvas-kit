import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {createStyles} from '@workday/canvas-kit-styling';
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

const darkBackground = createStyles({
  background: system.color.surface.alt.default,
  padding: system.padding.xxl,
});

export const KBDStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: undefined, label: 'Default'},
          {value: 'ghost', label: 'Ghost'},
        ],
      })}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <div className={props.variant === 'ghost' ? darkBackground : ''}>
          <KBD {...props}>
            <KBD.Item>⌘</KBD.Item>
            <KBD.Item>C</KBD.Item>
          </KBD>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
