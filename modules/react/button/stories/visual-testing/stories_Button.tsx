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
import {Button} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Button',
  component: Button,
});

export const ButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: 'primary', label: 'Primary'},
          {value: 'secondary', label: 'Secondary'},
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
        <Container>
          <Button {...props}>Test</Button>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const ButtonThemedStates = () => <ButtonStates theme={{canvas: customColorTheme}} />;
