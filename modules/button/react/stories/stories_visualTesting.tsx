/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';
import {
  Button,
  DropdownButton,
  TextButton,
  DeleteButton,
  HighlightButton,
  IconButton,
  deprecated_Button as DeprecatedButton,
} from '../index';

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

const getButtonStates = (rowProps: any, renderFn: (props: any) => React.ReactNode) => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(rowProps)}
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
        (props: any) => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {renderFn}
    </ComponentStatesTable>
  </StaticStates>
);

storiesOf('Components|Buttons/Button/React/Visual Testing/Button', module)
  .addParameters({
    component: Button,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () =>
    getButtonStates(
      {
        variant: [
          {value: Button.Variant.Primary, label: 'Primary'},
          {value: Button.Variant.Secondary, label: 'Secondary'},
          {value: Button.Variant.OutlinePrimary, label: 'Outline Primary'},
          {value: Button.Variant.OutlineSecondary, label: 'Outline Secondary'},
          {value: Button.Variant.OutlineInverse, label: 'Outline Inverse'},
        ],
        size: [
          {value: Button.Size.Small, label: 'Small'},
          {value: Button.Size.Medium, label: 'Medium'},
          {value: Button.Size.Large, label: 'Large'},
        ],
        icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
        dataLabel: [{value: undefined, label: ''}, {value: '1:23', label: 'w/ Data Label'}],
      },
      (props: any) => (
        <Container blue={props.variant === Button.Variant.OutlineInverse}>
          <Button {...props}>Test</Button>
        </Container>
      )
    )
  );

storiesOf('Components|Buttons/Button/React/Visual Testing/Delete Button', module)
  .addParameters({
    component: DeleteButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () =>
    getButtonStates(
      {
        size: [
          {value: DeleteButton.Size.Small, label: 'Small'},
          {value: DeleteButton.Size.Medium, label: 'Medium'},
          {value: DeleteButton.Size.Large, label: 'Large'},
        ],
      },
      (props: any) => (
        <Container>
          <DeleteButton {...props}>Test</DeleteButton>
        </Container>
      )
    )
  );

storiesOf('Components|Buttons/Button/React/Visual Testing/Deprecated Button', module)
  .addParameters({
    component: DeprecatedButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () =>
    getButtonStates(
      {
        variant: [
          {value: DeprecatedButton.Variant.Primary, label: 'Primary'},
          {value: DeprecatedButton.Variant.Secondary, label: 'Secondary'},
          {value: DeprecatedButton.Variant.Delete, label: 'Delete'},
        ],
        size: [
          {value: Button.Size.Small, label: 'Small'},
          {value: Button.Size.Medium, label: 'Medium'},
          {value: Button.Size.Large, label: 'Large'},
        ],
      },
      (props: any) => (
        <Container>
          <DeprecatedButton {...props}>Test</DeprecatedButton>
        </Container>
      )
    )
  );

storiesOf('Components|Buttons/Button/React/Visual Testing/Dropdown Button', module)
  .addParameters({
    component: DropdownButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () =>
    getButtonStates(
      {
        variant: [
          {value: DropdownButton.Variant.Primary, label: 'Primary'},
          {value: DropdownButton.Variant.Secondary, label: 'Secondary'},
        ],
        size: [
          {value: DropdownButton.Size.Medium, label: 'Medium'},
          {value: DropdownButton.Size.Large, label: 'Large'},
        ],
        icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
        dataLabel: [{value: undefined, label: ''}, {value: '1:23', label: 'w/ Data Label'}],
      },
      (props: any) => (
        <Container>
          <DropdownButton {...props}>Test</DropdownButton>
        </Container>
      )
    )
  );

storiesOf('Components|Buttons/Button/React/Visual Testing/Highlight Button', module)
  .addParameters({
    component: HighlightButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () =>
    getButtonStates(
      {
        size: [
          {value: Button.Size.Small, label: 'Small'},
          {value: Button.Size.Medium, label: 'Medium'},
          {value: Button.Size.Large, label: 'Large'},
        ],
        icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
      },
      (props: any) => (
        <Container>
          <HighlightButton {...props}>Test</HighlightButton>
        </Container>
      )
    )
  );

storiesOf('Components|Buttons/Button/React/Visual Testing/Text Button', module)
  .addParameters({
    component: TextButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () =>
    getButtonStates(
      {
        variant: [
          {value: TextButton.Variant.Default, label: 'Default'},
          {value: TextButton.Variant.Inverse, label: 'Inverse'},
        ],
        size: [
          {value: TextButton.Size.Small, label: 'Small'},
          {value: TextButton.Size.Medium, label: 'Medium'},
        ],
        icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
        allCaps: [{value: undefined, label: ''}, {value: true, label: 'All Caps'}],
      },
      (props: any) => (
        <Container blue={props.variant === TextButton.Variant.Inverse}>
          <TextButton {...props}>Test</TextButton>
        </Container>
      )
    )
  );

storiesOf('Components|Buttons/Button/React/Visual Testing/Icon Button', module)
  .addParameters({
    component: IconButton,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => (
    <React.Fragment>
      {[false, true].map(toggled => (
        <div key={`toggled-${toggled}`}>
          <h3>Toggled {toggled ? 'On' : 'Off'}</h3>
          {getButtonStates(
            {
              variant: [
                {value: IconButton.Variant.Inverse, label: 'Inverse'},
                {value: IconButton.Variant.InverseFilled, label: 'Inverse Filled'},
                {value: IconButton.Variant.Plain, label: 'Plain'},
                {value: IconButton.Variant.Circle, label: 'Circle'},
                {value: IconButton.Variant.CircleFilled, label: 'Circle Filled'},
                {value: IconButton.Variant.Square, label: 'Square'},
                {value: IconButton.Variant.SquareFilled, label: 'Square Filled'},
              ],
              size: [
                {value: IconButton.Size.Small, label: 'Small'},
                {value: IconButton.Size.Medium, label: 'Medium'},
              ],
            },
            (props: any) => (
              <Container
                blue={[IconButton.Variant.Inverse, IconButton.Variant.InverseFilled].includes(
                  props.variant
                )}
              >
                <IconButton
                  toggled={toggled}
                  icon={activityStreamIcon}
                  aria-label="Play"
                  {...props}
                  onChange={() => {}} // eslint-disable-line no-empty-function
                />
              </Container>
            )
          )}
        </div>
      ))}
    </React.Fragment>
  ));
