/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Primary Button',
  component: PrimaryButton,
});

export const PrimaryButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
        icon: [
          {value: undefined, label: ''},
          {value: playCircleIcon, label: 'w/ Icon'},
        ],
        iconPosition: [
          {value: 'left', label: 'Left Icon'},
          {value: 'right', label: 'right Icon'},
        ],
        dataLabel: [
          {value: undefined, label: ''},
          {value: '1:23', label: 'w/ Data Label'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <PrimaryButton {...props}>Test</PrimaryButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const PrimaryButtonThemedStates = () => (
  <PrimaryButtonStates theme={{canvas: customColorTheme}} />
);
