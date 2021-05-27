/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-preview-react/tokens';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {IconButton} from '@workday/canvas-kit-react/button';
import {Container, IconButtonGrid, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Icon Button',
  component: IconButton,
});

export const IconButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <React.Fragment>
    {[false, true].map(toggled => (
      <div>
        <h3>Toggled {toggled ? 'On' : 'Off'}</h3>
        <StaticStates theme={props.theme}>
          <ComponentStatesTable
            rowProps={permutateProps({
              variant: [
                {value: 'inverse', label: 'Inverse'},
                {value: 'inverseFilled', label: 'Inverse Filled'},
                {value: 'plain', label: 'Plain'},
                {value: 'circle', label: 'Circle'},
                {value: 'circleFilled', label: 'Circle Filled'},
                {value: 'square', label: 'Square'},
                {value: 'squareFilled', label: 'Square Filled'},
              ],
            })}
            columnProps={stateTableColumnProps}
          >
            {props => (
              <Container blue={['inverse', 'inverseFilled'].includes(props.variant)}>
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
  <IconButtonGrid initialToggled={true} variant={'circle'} />
);

export const IconButtonInverseToggleableGrid = () => (
  <IconButtonGrid initialToggled={true} variant={'inverse'} />
);

export const IconButtonThemedStates = () => <IconButtonStates theme={{canvas: customColorTheme}} />;
