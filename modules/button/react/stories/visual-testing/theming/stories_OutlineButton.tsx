/// <reference path="../../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {CanvasProvider} from '@workday/canvas-kit-react-common';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  customColorTheme,
  withSnapshotsEnabled,
} from '../../../../../../utils/storybook';
import {stateTableColumnProps} from '../utils';
import {OutlineButton} from '../../../';
import {OutlineButtonStates} from '../stories_OutlineButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Outline Button',
  component: OutlineButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const OutlineButtonThemedStates = OutlineButtonStates;

// TODO: Remove this support after AB test is complete
export const ABTestOutlineButton = () => (
  <CanvasProvider
    theme={{
      canvas: customColorTheme,
      ABTest: {
        secondaryOutlineButton: {
          main: 'orange', //colors.licorice300,
          dark: 'blue', //colors.licorice500,
          darkest: 'red', //colors.licorice600,
        },
      },
    }}
  >
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          size: [
            {value: OutlineButton.Size.Small, label: 'Small'},
            {value: OutlineButton.Size.Medium, label: 'Medium'},
            {value: OutlineButton.Size.Large, label: 'Large'},
          ],
        })}
        columnProps={stateTableColumnProps}
      >
        {props => (
          <OutlineButton variant={OutlineButton.Variant.Secondary} {...props}>
            Test
          </OutlineButton>
        )}
      </ComponentStatesTable>
    </StaticStates>
  </CanvasProvider>
);
