/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {IconButton} from '../../index';
import {Container, IconButtonGrid, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Icon Button',
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
            columnProps={stateTableColumnProps}
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

export const IconButtonCircleToggleableGrid = () => (
  <IconButtonGrid initialToggled={true} variant={IconButton.Variant.Circle} />
);

export const IconButtonInverseToggleableGrid = () => (
  <IconButtonGrid initialToggled={true} variant={IconButton.Variant.Inverse} />
);

export const IconButtonThemedStates = () => <IconButtonStates />;
IconButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
