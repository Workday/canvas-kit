import React from 'react';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Delete Button',
  component: DeleteButton,
});

export const DeleteButtonStates = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <DeleteButton {...props}>Test</DeleteButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const DeleteButtonThemedStates = () => (
  <DeleteButtonStates theme={{canvas: customColorTheme}} />
);
