/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme, StaticStates} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Tertiary Button',
  component: TertiaryButton,
});

export const TertiaryButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: undefined, label: 'Default'},
            {value: 'inverse', label: 'Inverse'},
          ],
          allCaps: [
            {value: false, label: ''},
            {value: true, label: 'All Caps'},
          ],
          size: [
            {value: 'small', label: 'Small'},
            {value: 'medium', label: 'Medium'},
          ],
          icon: [
            {value: undefined, label: ''},
            {value: playCircleIcon, label: 'w/ Icon'},
          ],
          iconPosition: [
            {value: 'left', label: 'Left Icon'},
            {value: 'right', label: 'right Icon'},
          ],
        },
        props => {
          return true;
        }
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <TertiaryButton {...props}>Test</TertiaryButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TertiaryButtonThemedStates = () => (
  <TertiaryButtonStates theme={{canvas: customColorTheme}} />
);
