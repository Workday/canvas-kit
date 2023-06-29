import React from 'react';

import {checkIcon, exclamationCircleIcon} from '@workday/canvas-system-icons-web';

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
              iconColor: 'greenApple400',
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With Icon',
            props: {
              mode: 'polite',
              icon: checkIcon,
              iconColor: 'greenApple400',
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'On Close',
            props: {
              mode: 'alert',
              hasCloseIcon: true,
              icon: exclamationCircleIcon,
              iconColor: 'cinnamon500',
              message: 'Your workbook has an error.',
            },
          },
          {
            label: 'With Action',
            props: {
              mode: 'dialog',
              hasAction: true,
              icon: checkIcon,
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
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
              iconColor: 'greenApple400',
              message: 'Your workbook was successfully processed.',
            },
          },
          {
            label: 'With short mesage',
            props: {
              mode: 'alert',
              hasCloseIcon: true,
              width: 300,
              icon: exclamationCircleIcon,
              iconColor: 'cinnamon500',
              message: 'There was an error',
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {({mode, hasCloseIcon, hasAction, icon, iconColor, ...props}) => (
          <Toast mode={mode} {...props}>
            <Toast.Icon icon={icon} color={iconColor} />
            <Toast.Body>
              <Toast.Message>{props.message}</Toast.Message>
              {hasAction && <Toast.Link href="#href">Custom Link</Toast.Link>}
            </Toast.Body>
            {hasCloseIcon && <Toast.CloseIcon aria-label="Close" />}
          </Toast>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
});
