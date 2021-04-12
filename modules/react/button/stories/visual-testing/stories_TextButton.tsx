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
import {TextButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Text Button',
  component: TextButton,
});

export const TextButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: 'text', label: 'Default'},
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
        },
        props => {
          return true;
        }
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <TextButton {...props}>Test</TextButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TextButtonThemedStates = () => <TextButtonStates theme={{canvas: customColorTheme}} />;
