import {SecondaryButton, SecondaryButtonProps} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {checkIcon} from '@workday/canvas-system-icons-web';
import * as React from 'react';

export interface SubmitButtonProps extends SecondaryButtonProps {}

export default createComponent(SecondaryButton)({
  displayName: 'SubmitButton',
  Component: ({...elemProps}: SubmitButtonProps) => {
    return <SecondaryButton icon={checkIcon} {...elemProps}></SecondaryButton>;
  },
});
