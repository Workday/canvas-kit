/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {Button, DropdownButton, TextButton, IconButton} from '../index';

const buttonLayout: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const blueBackground: CSSObject = {
  ...buttonLayout,
  backgroundColor: '#0875e1',
  padding: '12px',
  borderRadius: '4px',
};

const Container = (props: any) => (
  <div css={props.blue ? blueBackground : buttonLayout}>{props.children}</div>
);

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
          if (props.size === Button.Size.Small && (props.icon || props.dataLabel)) {
            return false;
          }
          if (props.variant === Button.Variant.Highlight && !props.icon) {
            return false;
          }
          if (props.variant === Button.Variant.Delete && (props.icon || props.dataLabel)) {
            return false;
          }
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
      {props => (
        <Container blue={props.variant === Button.Variant.OutlineInverse}>
          <Button {...props}>Test</Button>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

const DropdownButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: DropdownButton.Variant.Primary, label: 'Primary'},
          {value: DropdownButton.Variant.Secondary, label: 'Secondary'},
        ],
        size: [
          {value: DropdownButton.Size.Medium, label: 'Medium'},
          {value: DropdownButton.Size.Large, label: 'Large'},
        ],
      })}
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
      {props => (
        <Container>
          <DropdownButton {...props}>Test</DropdownButton>
        </Container>
      )}
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
            {value: TextButton.Size.Large, label: 'Large'},
          ],
          icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
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
      {props => (
        <Container
          blue={[TextButton.Variant.Inverse, TextButton.Variant.InverseAllCaps].includes(
            props.variant
          )}
        >
          <TextButton {...props}>Test</TextButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

const IconButtonStates = () => (
  <React.Fragment>
    {[false, true].map(toggled => (
      <div>
        <h3>Toggled {toggled ? 'On' : 'Off'}</h3>
        <StaticStates>
          <ComponentStatesTable
            rowProps={permutateProps({
              variant: [
                {value: IconButton.Variant.Inverse, label: 'Inverse'},
                {value: IconButton.Variant.InverseFilled, label: 'Inverse Filled'},
                {value: IconButton.Variant.Plain, label: 'Plain'},
                {value: IconButton.Variant.Circle, label: 'Circle'},
                {value: IconButton.Variant.CircleFilled, label: 'Circle Filled'},
                {value: IconButton.Variant.Square, label: 'Square'},
                {value: IconButton.Variant.SquareFilled, label: 'Square Filled'},
              ],
            })}
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
            {props => (
              <Container
                blue={[IconButton.Variant.Inverse, IconButton.Variant.InverseFilled].includes(
                  props.variant
                )}
              >
                <IconButton
                  toggled={toggled}
                  icon={playCircleIcon}
                  aria-label="Play"
                  {...props}
                  onChange={() => {}} // eslint-disable-line no-empty-function
                />
              </Container>
            )}
          </ComponentStatesTable>
        </StaticStates>
      </div>
    ))}
  </React.Fragment>
);

storiesOf('Components|Buttons/Button/React/Visual Testing/Button', module)
  .addParameters({
    component: Button,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => <ButtonStates />);

storiesOf('Components|Buttons/Button/React/Visual Testing/Dropdown', module)
  .addParameters({
    component: DropdownButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => <DropdownButtonStates />);

storiesOf('Components|Buttons/Button/React/Visual Testing/Text', module)
  .addParameters({
    component: TextButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => <TextButtonStates />);

storiesOf('Components|Buttons/Button/React/Visual Testing/Icon Button', module)
  .addParameters({
    component: IconButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => <IconButtonStates />);
