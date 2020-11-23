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
import {TextButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Text Button',
  component: TextButton,
});

export const TextButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: TextButton.Variant.Default, label: 'Default'},
            {value: TextButton.Variant.Inverse, label: 'Inverse'},
          ],
          allCaps: [
            {value: false, label: ''},
            {value: true, label: 'All Caps'},
          ],
          size: [
            {value: TextButton.Size.Small, label: 'Small'},
            {value: TextButton.Size.Large, label: 'Large'},
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
        <Container blue={props.variant === TextButton.Variant.Inverse}>
          <TextButton {...props}>Test</TextButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TextButtonThemedStates = () => <TextButtonStates />;
TextButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
