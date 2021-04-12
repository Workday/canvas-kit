/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {
  ComponentStatesTable,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Toolbar Icon Button',
  component: ToolbarIconButton,
});

export const ToolbarIconButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={[
        {label: 'Toggled Off', props: {toggled: false}},
        {label: 'Toggled On', props: {toggled: true}},
      ]}
      columnProps={stateTableColumnProps}
    >
      {(props: any) => (
        <Container>
          <ToolbarIconButton
            icon={playCircleIcon}
            aria-label="Play"
            {...props}
            onChange={() => {}} // eslint-disable-line no-empty-function
          />
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const ToolbarIconButtonThemedStates = () => (
  <ToolbarIconButtonStates theme={{canvas: customColorTheme}} />
);
