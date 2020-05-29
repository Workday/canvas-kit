/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {colors} from '@workday/canvas-kit-react-core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {action} from '@storybook/addon-actions';
import {ComponentStatesTable, enableSnapshots} from '../../../../utils/storybook';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {Toast} from '../index';

export default {
  title: 'Testing|React/Popups/Toast',
  parameters: {
    component: Toast,
    ...enableSnapshots(),
  },
};

export const ToastStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Custom Icon', props: {icon: exclamationCircleIcon}},
        {
          label: 'Custom Icon Color',
          props: {icon: exclamationCircleIcon, iconColor: colors.cinnamon500},
        },
        {label: 'On Close', props: {onClose: action('close button clicked')}},
        {
          label: 'With Action Link',
          props: {
            onActionClick: action('action button clicked'),
            actionText: 'View More Details',
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <Toast aria-label="Play" {...props}>
          Your workbook was successfully processed.
        </Toast>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
