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
import {DropdownButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Dropdown Button',
  component: DropdownButton,
});

export const DropdownButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: 'primary', label: 'Primary'},
          {value: 'secondary', label: 'Secondary'},
        ],
        size: [
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <DropdownButton {...props}>Test</DropdownButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const DropdownButtonThemedStates = () => (
  <DropdownButtonStates theme={{canvas: customColorTheme}} />
);
DropdownButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
