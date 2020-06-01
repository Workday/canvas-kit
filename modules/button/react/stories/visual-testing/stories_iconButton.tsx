/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {IconButton} from '../../index';
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Icon Button',
  component: IconButton,
});

export const IconButtonStates = () => (
  <React.Fragment>
    {[false, true].map(toggled => (
      <div>
        <h3>Toggled {toggled ? 'On' : 'Off'}</h3>
        <StaticStates>
          <ComponentStatesTable
            rowProps={permutateProps({
              variant: [
                {value: IconButton.Variant.Inverse, label: 'Inverse'},
                {value: IconButton.Variant.InverseFilled, label: 'Inverse Filled'},
                {value: IconButton.Variant.Plain, label: 'Plain'},
                {value: IconButton.Variant.Circle, label: 'Circle'},
                {value: IconButton.Variant.CircleFilled, label: 'Circle Filled'},
                {value: IconButton.Variant.Square, label: 'Square'},
                {value: IconButton.Variant.SquareFilled, label: 'Square Filled'},
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
              <Container
                blue={[IconButton.Variant.Inverse, IconButton.Variant.InverseFilled].includes(
                  props.variant
                )}
              >
                <IconButton
                  toggled={toggled}
                  icon={playCircleIcon}
                  aria-label="Play"
                  {...props}
                  onChange={() => {}} // eslint-disable-line no-empty-function
                />
              </Container>
            )}
          </ComponentStatesTable>
        </StaticStates>
      </div>
    ))}
  </React.Fragment>
);
