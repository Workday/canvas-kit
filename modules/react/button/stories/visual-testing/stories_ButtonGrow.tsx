import React from 'react';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon, relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
} from '@workday/canvas-kit-react/button';
import {Text} from '@workday/canvas-kit-react/text';
import {Container, stateTableColumnProps} from './utils';
import {Flex} from '../../../layout';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/Button/Grow',
  // component: PrimaryButton, SecondaryButton, TertiaryButton, DeleteButton
});

export const ButtonGrow = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <Text typeLevel="heading.small">Primary Button</Text>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [{value: undefined, label: ''}],
          size: [{value: 'small', label: 'Small'}],
          icon: [
            {value: undefined, label: ''},
            // We don't need a label here, because `iconPosition` provides it
            {value: playCircleIcon, label: ''},
          ],
          iconPosition: [
            {value: undefined, label: ''},
            {value: 'start', label: '& Left Icon'},
            {value: 'end', label: '& Right Icon'},
          ],
          grow: [
            {value: false, label: 'Grow False'},
            {value: true, label: 'Grow True'},
          ],
        },
        // Filter out permutations where `iconPosition` is provided and not `icon`, and vice versa
        props => (props.iconPosition && props.icon) || (!props.icon && !props.iconPosition)
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <PrimaryButton {...props}>Test</PrimaryButton>
        </Container>
      )}
    </ComponentStatesTable>
    <Text typeLevel="heading.small">Secondary Button</Text>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [{value: undefined, label: ''}],
          size: [{value: 'small', label: 'Small'}],
          icon: [
            {value: undefined, label: ''},
            // We don't need a label here, because `iconPosition` provides it
            {value: playCircleIcon, label: ''},
          ],
          iconPosition: [
            {value: undefined, label: ''},
            {value: 'start', label: '& Left Icon'},
            {value: 'end', label: '& Right Icon'},
          ],
          grow: [
            {value: false, label: 'Grow False'},
            {value: true, label: 'Grow True'},
          ],
        },
        // Filter out permutations where `iconPosition` is provided and not `icon`, and vice versa
        props => (props.iconPosition && props.icon) || (!props.icon && !props.iconPosition)
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <SecondaryButton {...props}>Test</SecondaryButton>
        </Container>
      )}
    </ComponentStatesTable>
    <Text typeLevel="heading.small">Tertiary Button</Text>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [{value: undefined, label: ''}],
          size: [{value: 'small', label: 'Small'}],
          icon: [
            {value: undefined, label: ''},
            // We don't need a label here, because `iconPosition` provides it
            {value: playCircleIcon, label: ''},
          ],
          iconPosition: [
            {value: undefined, label: ''},
            {value: 'start', label: '& Left Icon'},
            {value: 'end', label: '& Right Icon'},
          ],
          grow: [
            {value: false, label: 'Grow False'},
            {value: true, label: 'Grow True'},
          ],
        },
        // Filter out permutations where `iconPosition` is provided and not `icon`, and vice versa
        props => (props.iconPosition && props.icon) || (!props.icon && !props.iconPosition)
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
