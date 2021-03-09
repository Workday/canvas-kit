/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  withSnapshotsEnabled,
  permutateProps,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {ToolbarDropdownButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Toolbar Dropdown Button',
  component: ToolbarDropdownButton,
});

export const ToolbarDropdownButtonStates = () => (
  <React.Fragment>
    <div>
      <h3>Default</h3>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[{label: 'Default', props: {}}]}
          columnProps={stateTableColumnProps}
        >
          {props => (
            <Container>
              <ToolbarDropdownButton
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
  </React.Fragment>
);

export const ToolbarDropdownButtonThemedStates = () => <ToolbarDropdownButtonStates />;
ToolbarDropdownButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
