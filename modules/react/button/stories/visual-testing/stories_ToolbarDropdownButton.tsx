/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {ToolbarDropdownButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme, StaticStates} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Toolbar Dropdown Button',
  component: ToolbarDropdownButton,
});

export const ToolbarDropdownButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <React.Fragment>
    <div>
      <h3>Default</h3>
      <StaticStates theme={props.theme}>
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

export const ToolbarDropdownButtonThemedStates = () => (
  <ToolbarDropdownButtonStates theme={{canvas: customColorTheme}} />
);
