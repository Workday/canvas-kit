import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';

import {AIAssistantIngressButton} from '@workday/canvas-kit-labs-react/ai-assistant-ingress-button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Labs/AI Assistant Ingress Button',
  component: AIAssistantIngressButton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const darkBackground = createStyles({
  background: system.color.bg.contrast.strong,
  padding: system.space.x8,
});

export const AiAssistantIngressButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: undefined, label: 'Default'},
          {value: 'inverse', label: 'Inverse'},
        ],
      })}
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
          disabled: [
            {label: '', value: false},
            {label: 'Disabled', value: true},
          ],
        },
        props => !props.disabled || !props.className || props.className === 'hover'
      )}
    >
      {props => (
        <div className={props.variant === 'inverse' ? darkBackground : ''}>
          <AIAssistantIngressButton {...props} />
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const AiAssistantIngressButtonStatesToggledInverse = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        toggled: [{value: true, label: 'Toggled'}],
      })}
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
          disabled: [
            {label: '', value: false},
            {label: 'Disabled', value: true},
          ],
        },
        props => !props.disabled || !props.className || props.className === 'hover'
      )}
    >
      {props => (
        <div className={darkBackground}>
          <AIAssistantIngressButton variant="inverse" {...props} />
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const AiAssistantIngressButtonStatesToggledDefault = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        toggled: [{value: true, label: 'Toggled'}],
      })}
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
          disabled: [
            {label: '', value: false},
            {label: 'Disabled', value: true},
          ],
        },
        props => !props.disabled || !props.className || props.className === 'hover'
      )}
    >
      {props => <AIAssistantIngressButton {...props} />}
    </ComponentStatesTable>
  </StaticStates>
);
