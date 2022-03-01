import React from 'react';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButtonNew} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme, StaticStates} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Tertiary Button New',
  component: TertiaryButtonNew,
});

export const TertiaryButtonNewStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
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
            {value: 'extraSmall', label: 'Extra Small'},
            {value: 'small', label: 'Small'},
            {value: 'medium', label: 'Medium'},
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
          <TertiaryButtonNew {...props}>Tertiary</TertiaryButtonNew>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TertiaryButtonIconNewStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: undefined, label: 'Default'},
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
            {value: playCircleIcon, label: ''},
          ],
        },
        // Filter out permutations where `iconPosition` is provided and not `icon`, and vice versa
        props => {
          //   if ((props.iconPosition && !props.icon) || (props.icon && !props.iconPosition)) {
          //     return false;
          //   }
          return true;
        }
      )}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <TertiaryButtonNew {...props}></TertiaryButtonNew>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TertiaryButtonNewThemedStates = () => (
  <TertiaryButtonNewStates theme={{canvas: customColorTheme}} />
);
