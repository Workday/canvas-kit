/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {HighlightButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Highlight Button',
  component: HighlightButton,
});

export const HighlightButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: HighlightButton.Size.Small, label: 'Small'},
          {value: HighlightButton.Size.Medium, label: 'Medium'},
          {value: HighlightButton.Size.Large, label: 'Large'},
        ],
        icon: [
          {value: undefined, label: ''},
          {value: playCircleIcon, label: 'w/ Icon'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <HighlightButton {...props}>Test</HighlightButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const HighlightButtonThemedStates = () => <HighlightButtonStates />;
HighlightButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
