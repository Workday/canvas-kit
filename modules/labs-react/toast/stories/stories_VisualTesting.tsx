import React from 'react';

import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/common';
import {Toast} from '@workday/canvas-kit-labs-react/toast';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Toast',
  component: Toast,
});

export const ToastStates = withSnapshotsEnabled(() => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Default',
            props: {
              mode: 'polite',
            },
          },
          {
            label: 'With Icon',
            props: {
              mode: 'polite',
              icon: checkIcon,
              iconColor: colors.greenApple400,
            },
          },
          {
            label: 'On Close',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
            },
          },
          {
            label: 'With Action',
            props: {
              mode: 'interactive',
              hasAction: true,
            },
          },
          {
            label: 'With small padding',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              padding: 's',
            },
          },
          {
            label: 'With no depth',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 'none',
            },
          },
          {
            label: 'With depth value set to 1',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 1,
            },
          },
          {
            label: 'With depth value set to 2',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 2,
            },
          },
          {
            label: 'With depth value set to 3',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 3,
            },
          },
          {
            label: 'With depth value set to 4',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 4,
            },
          },
          {
            label: 'With depth value set to 5',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 5,
            },
          },
          {
            label: 'With depth value set to 6',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 6,
            },
          },
          {
            label: 'With custom width',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              width: 300,
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {({mode, hasCloseIcon, hasAction, icon, iconColor, ...props}) => (
          <Toast mode={hasAction ? 'dialog' : mode} {...props}>
            <Toast.Body>
              {icon ? <Toast.Icon icon={icon} color={iconColor} /> : null}
              <Toast.Message>Your workbook was successfully processed.</Toast.Message>
              {hasAction ? <Toast.Link href="#href">Custom Link</Toast.Link> : null}
            </Toast.Body>
            {hasCloseIcon ? <Toast.CloseIcon aria-label="Close" /> : null}
          </Toast>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
});
