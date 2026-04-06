import React from 'react';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon, relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {createStyles} from '@workday/canvas-kit-styling';
import {brand} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Buttons/Button/Primary Button',
  component: PrimaryButton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const customActionTheme = createStyles({
  [brand.action.base]: 'teal',
  [brand.action.accent]: 'white',
  [brand.action.dark]: 'hsla(180, 100%, 20%)',
  [brand.action.darkest]: 'hsla(180, 100%, 16%)',
});

const PrimaryButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (
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
  render: () => {
    return <PrimaryButtonTest theme={{canvas: customColorTheme}} />;
  },
};

export const PrimaryButtonThemedActionStates = {
  render: () => (
    <div className={customActionTheme}>
      <PrimaryButtonTest theme={{canvas: customColorTheme}} />
    </div>
  ),
};

export const PrimaryIconButtonThemedStates = {
  render: () => <PrimaryIconButtonTest theme={{canvas: customColorTheme}} />,
};
