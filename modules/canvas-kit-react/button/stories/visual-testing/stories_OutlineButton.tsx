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
import {OutlineButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Outline Button',
  component: OutlineButton,
});

export const OutlineButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: OutlineButton.Variant.Primary, label: 'Outline Primary'},
          {value: OutlineButton.Variant.Secondary, label: 'Outline Secondary'},
          {value: OutlineButton.Variant.Inverse, label: 'Outline Inverse'},
        ],
        size: [
          {value: OutlineButton.Size.Small, label: 'Small'},
          {value: OutlineButton.Size.Medium, label: 'Medium'},
          {value: OutlineButton.Size.Large, label: 'Large'},
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
        <Container blue={props.variant === OutlineButton.Variant.Inverse}>
          <OutlineButton {...props}>Test</OutlineButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const OutlineButtonThemedStates = () => <OutlineButtonStates />;
OutlineButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
