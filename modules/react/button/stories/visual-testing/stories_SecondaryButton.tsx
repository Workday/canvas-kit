import React from 'react';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon, relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme, StaticStates} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Secondary Button',
  component: SecondaryButton,
});

export const SecondaryButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: undefined, label: ''},
            {value: 'inverse', label: 'Inverse'},
          ],
          size: [
            {value: 'extraSmall', label: 'Extra Small'},
            {value: 'small', label: 'Small'},
            {value: 'medium', label: 'Medium'},
            {value: 'large', label: 'Large'},
          ],
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
        },
        // Filter out permutations where `iconPosition` is provided and not `icon`, and vice versa
        props => {
          if ((props.iconPosition && !props.icon) || (props.icon && !props.iconPosition)) {
            return false;
          }
          return true;
        }
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <SecondaryButton {...props}>Test</SecondaryButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SecondaryIconButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: undefined, label: ''},
            {value: 'inverse', label: 'Inverse'},
          ],
          size: [
            {value: 'extraSmall', label: 'Extra Small'},
            {value: 'small', label: 'Small'},
            {value: 'medium', label: 'Medium'},
            {value: 'large', label: 'Large'},
          ],
          icon: [
            // We don't need a label here, because `iconPosition` provides it
            {value: relatedActionsVerticalIcon, label: ''},
          ],
        },
        // Filter out permutations where `iconPosition` is provided and not `icon`, and vice versa
        props => {
          return true;
        }
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <SecondaryButton {...props}></SecondaryButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SecondaryButtonThemedStates = () => (
  <SecondaryButtonStates theme={{canvas: customColorTheme}} />
);

export const SecondaryIconButtonThemedStates = () => (
  <SecondaryIconButtonStates theme={{canvas: customColorTheme}} />
);
