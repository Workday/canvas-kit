import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {checkIcon} from '@workday/canvas-system-icons-web';
import * as React from 'react';

export interface SubmitButtonProps extends IconButtonProps {}

export default createComponent(IconButton)({
  displayName: 'SubmitButton',
  Component: ({...elemProps}: SubmitButtonProps) => {
    return (
      <IconButton
        className="wd-custom-color-submit-btn"
        variant={'circleFilled'}
        icon={checkIcon}
        {...elemProps}
      ></IconButton>
    );
  },
});
