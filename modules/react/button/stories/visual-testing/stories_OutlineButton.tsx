/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {OutlineButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Outline Button',
  component: OutlineButton,
});

export const OutlineButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: 'primary', label: 'Outline Primary'},
          {value: 'secondary', label: 'Outline Secondary'},
          {value: 'inverse', label: 'Outline Inverse'},
        ],
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
        icon: [
          {value: undefined, label: ''},
          {value: playCircleIcon, label: 'w/ Icon'},
        ],
        dataLabel: [
          {value: undefined, label: ''},
          {value: '1:23', label: 'w/ Data Label'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <OutlineButton {...props}>Test</OutlineButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const OutlineButtonThemedStates = () => (
  <OutlineButtonStates theme={{canvas: customColorTheme}} />
);
