import * as React from 'react';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';

import {AiAssistantIngressButton} from '@workday/canvas-kit-labs-react/ai-assistant-ingress-button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Labs/AiAssistantIngressButton',
  component: AiAssistantIngressButton,
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
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <div className={props.variant === 'inverse' ? darkBackground : ''}>
          <AiAssistantIngressButton {...props} />
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
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <div className={darkBackground}>
          <AiAssistantIngressButton variant="inverse" {...props} />
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
        props => !disabled || ['', 'hover'].includes(props.className)
      )}
    >
      {props => (
        <div>
          <AiAssistantIngressButton {...props} />
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
