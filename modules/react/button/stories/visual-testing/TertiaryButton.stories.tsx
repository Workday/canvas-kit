import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon, relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';

export default {
  title: 'Testing/Buttons/Button/Tertiary Button',
  component: TertiaryButton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const TertiaryButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (
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
          <TertiaryButton {...props}>Tertiary</TertiaryButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

const TertiaryIconButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (
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
          <TertiaryButton {...props} />
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TertiaryButtonStates = {
  render: () => <TertiaryButtonTest />,
};
export const TertiaryIconButtonStates = {
  render: () => <TertiaryIconButtonTest />,
};

export const TertiaryButtonThemedStates = {
  render: () => <TertiaryButtonTest theme={{canvas: customColorTheme}} />,
};

export const TertiaryIconButtonThemedStates = {
  render: () => <TertiaryIconButtonTest theme={{canvas: customColorTheme}} />,
};
