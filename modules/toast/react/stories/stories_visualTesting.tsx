/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {colors} from '@workday/canvas-kit-react-core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, permutateProps} from '../../../../utils/storybook';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {Toast} from '../index';

const IconButtonStates = () => (
  <React.Fragment>
    <div>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[
            {label: 'Default', props: {}},
            {label: 'Custom Icon', props: {icon: exclamationCircleIcon}},
            {
              label: 'Custom Icon Color',
              props: {icon: exclamationCircleIcon, iconColor: colors.cinnamon500},
            },
            {label: 'On Close', props: {onClose: () => console.warn('clicked')}},
            {
              label: 'With Action Link',
              props: {
                onActionClick: () => console.warn('clicked'),
                actionText: 'View More Details',
              },
            },
          ]}
          columnProps={permutateProps({
            Default: [{value: undefined, label: 'Default'}],
          })}
        >
          {props => (
            <Toast aria-label="Play" {...props}>
              Your workbook was successfully processed.
            </Toast>
          )}
        </ComponentStatesTable>
      </StaticStates>
    </div>
  </React.Fragment>
);

storiesOf('Components|Popups/Toast/React/Visual Testing | States', module)
  .addParameters({
    component: Toast,
    chromatic: {
      disable: false,
    },
  })
  .add('States', () => <IconButtonStates />);
