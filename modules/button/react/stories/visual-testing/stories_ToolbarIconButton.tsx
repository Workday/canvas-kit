/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Toolbar Icon Button',
  component: ToolbarIconButton,
});

export const ToolbarIconButtonStates = () => (
  <StaticStates>
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
