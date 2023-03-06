import React from 'react';

import {checkIcon, exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {Toast} from '@workday/canvas-kit-react/toast';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/Popups/Toast',
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
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With Icon',
            props: {
              mode: 'polite',
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'On Close',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              icon: exclamationCircleIcon,
              iconColor: colors.cinnamon500,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With Action',
            props: {
              mode: 'interactive',
              hasAction: true,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With small padding',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              padding: 's',
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With no depth',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 'none',
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With depth value set to 1',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 1,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With depth value set to 2',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 2,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With depth value set to 3',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 3,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With depth value set to 4',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 4,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With depth value set to 5',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 5,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With depth value set to 6',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              depth: 6,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With custom width',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              width: 300,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With short mesage',
            props: {
              mode: 'polite',
              hasCloseIcon: true,
              width: 300,
              icon: checkIcon,
              iconColor: colors.greenApple400,
              message: 'There was an error',
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {({mode, hasCloseIcon, hasAction, icon, iconColor, ...props}) => (
          <Toast mode={hasAction ? 'dialog' : mode} {...props}>
            <Toast.Icon icon={icon} color={iconColor} />
            <Toast.Body>
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
