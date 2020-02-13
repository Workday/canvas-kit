/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {Button, DropdownButton, TextButton} from '../index';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '12px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '12px',
  },
};

const ButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: Button.Variant.Primary, label: 'Primary'},
            {value: Button.Variant.Secondary, label: 'Secondary'},
            {value: Button.Variant.Highlight, label: 'Highlight'},
            {value: Button.Variant.OutlinePrimary, label: 'Outline Primary'},
            {value: Button.Variant.OutlineSecondary, label: 'Outline Secondary'},
            {value: Button.Variant.OutlineInverse, label: 'Outline Inverse'},
            {value: Button.Variant.Delete, label: 'Delete'},
          ],
          size: [
            {value: Button.Size.Small, label: 'Small'},
            {value: Button.Size.Medium, label: 'Medium'},
            {value: Button.Size.Large, label: 'Large'},
          ],
          icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
          dataLabel: [{value: undefined, label: ''}, {value: '1:23', label: 'w/ Data Label'}],
        },
        props => {
          return true;
        }
      )}
      columnProps={permutateProps(
        {
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
          ],
          disabled: [{label: '', value: false}, {label: 'Disabled', value: true}],
        },
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => {
        const button = <Button {...props}>Test</Button>;
        if (props.variant === Button.Variant.OutlineInverse) {
          return <div css={blueBackground}>{button}</div>;
        }
        return button;
      }}
    </ComponentStatesTable>
  </StaticStates>
);

const DropdownButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: DropdownButton.Variant.Primary, label: 'Primary'},
            {value: DropdownButton.Variant.Secondary, label: 'Secondary'},
            {value: DropdownButton.Variant.Highlight, label: 'Highlight'},
            {value: DropdownButton.Variant.OutlinePrimary, label: 'Outline Primary'},
            {value: DropdownButton.Variant.OutlineSecondary, label: 'Outline Secondary'},
            {value: DropdownButton.Variant.OutlineInverse, label: 'Outline Inverse'},
            {value: DropdownButton.Variant.Delete, label: 'Delete'},
          ],
          size: [
            {value: DropdownButton.Size.Small, label: 'Small'},
            {value: DropdownButton.Size.Medium, label: 'Medium'},
            {value: DropdownButton.Size.Large, label: 'Large'},
          ],
          icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
          dataLabel: [{value: undefined, label: ''}, {value: '1:23', label: 'w/ Data Label'}],
        },
        props => {
          return true;
        }
      )}
      columnProps={permutateProps(
        {
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
          ],
          disabled: [{label: '', value: false}, {label: 'Disabled', value: true}],
        },
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => <DropdownButton {...props}>Test</DropdownButton>}
    </ComponentStatesTable>
  </StaticStates>
);

const TextButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: TextButton.Variant.Default, label: 'Default'},
            {value: TextButton.Variant.AllCaps, label: 'All Caps'},
            {value: TextButton.Variant.Inverse, label: 'Inverse'},
            {value: TextButton.Variant.InverseAllCaps, label: 'Inverse All Caps'},
          ],
          size: [
            {value: TextButton.Size.Small, label: 'Small'},
            {value: TextButton.Size.Medium, label: 'Medium'},
            {value: TextButton.Size.Large, label: 'Large'},
          ],
          icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
          dataLabel: [{value: undefined, label: ''}, {value: '1:23', label: 'w/ Data Label'}],
        },
        props => {
          return true;
        }
      )}
      columnProps={permutateProps(
        {
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
          ],
          disabled: [{label: '', value: false}, {label: 'Disabled', value: true}],
        },
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => {
        const button = <TextButton {...props}>Test</TextButton>;
        if (
          [TextButton.Variant.Inverse, TextButton.Variant.InverseAllCaps].includes(props.variant)
        ) {
          return <div css={blueBackground}>{button}</div>;
        }
        return button;
      }}
    </ComponentStatesTable>
  </StaticStates>
);

storiesOf('Components|Buttons/Button/React/Visual Testing/Button', module)
  .addParameters({component: Button})
  .add('States', () => <ButtonStates />);

storiesOf('Components|Buttons/Button/React/Visual Testing/Dropdown', module)
  .addParameters({component: DropdownButton})
  .add('States', () => <DropdownButtonStates />);

storiesOf('Components|Buttons/Button/React/Visual Testing/Text', module)
  .addParameters({component: TextButton})
  .add('States', () => <TextButtonStates />);
