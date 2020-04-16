/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {Toast} from '../index';

const IconButtonStates = () => (
  <React.Fragment>
    <div>
      <StaticStates>
        <ComponentStatesTable
          rowProps={permutateProps({
            onClose: [{value: null, label: 'On Close'}],
          })}
          columnProps={permutateProps({
            Default: [{label: 'Default', value: ''}],
          })}
        >
          {props => (
            <Toast icon={exclamationCircleIcon} aria-label="Play" {...props}>
              The workbook
            </Toast>
          )}
        </ComponentStatesTable>
      </StaticStates>
    </div>
  </React.Fragment>
);

storiesOf('Components|Popups/Toast/React/Visual Testing/Toast', module)
  .addParameters({
    component: Toast,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => <IconButtonStates />);
