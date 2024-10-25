import React from 'react';
import {PartialEmotionCanvasTheme, useCanvasProvider} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon, relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';

export default {
  title: 'Testing/Buttons/Button/Primary Button',
  component: PrimaryButton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const PrimaryButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => {
  return (
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
    </StaticStates>
  );
};

const PrimaryIconButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
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
        icon: [{value: relatedActionsVerticalIcon, label: ''}],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container blue={props.variant === 'inverse'}>
          <PrimaryButton {...props} />
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const PrimaryButtonStates = {
  render: () => <PrimaryButtonTest />,
};

export const PrimaryIconButtonStates = {
  render: () => <PrimaryIconButtonTest />,
};

export const PrimaryButtonThemedStates = {
  render: () => <PrimaryButtonTest theme={{canvas: customColorTheme}} />,
};

export const PrimaryIconButtonThemedStates = {
  render: () => <PrimaryIconButtonTest theme={{canvas: customColorTheme}} />,
};
