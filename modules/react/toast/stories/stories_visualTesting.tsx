import React from 'react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {StaticStates} from '@workday/canvas-kit-preview-react/tokens';
import {action} from '@storybook/addon-actions';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {Toast} from '@workday/canvas-kit-react/toast';

import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/React/Popups/Toast',
  component: Toast,
});

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
        {
          label: 'With Action Link and Multiple Lines',
          props: {
            children: 'Your workbook was successfully processed. Congratulation!',
            onActionClick: action('action button clicked'),
            actionText: 'View More Details',
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {({children, ...props}) => (
        <Toast style={{animation: 'none'}} aria-label="Play" {...props}>
          {children || 'Successfully processed.'}
        </Toast>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
