import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {LabelText} from '@workday/canvas-kit-react/text';
import {CSProps, createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

interface CheckboxContainerProps extends CSProps {
  children: React.ReactNode;
  disabled?: boolean;
  id: string;
  label: string;
  variant?: 'inverse';
}

const checkboxContainerStencil = createStencil({
  base: {
    display: 'flex',
    alignItems: 'center',
    minHeight: base.legacy.size225,
    position: 'relative',
    /**
     * Using a wrapper prevents the browser default behavior of trigging
     * :hover on the checkbox when you hover on it's corresponding label.
     * This stops the ripple from showing when you hover on the label.
     */
    '&>div': {
      display: 'flex',
      height: base.legacy.size225,
      minWidth: base.legacy.size225,
      alignSelf: 'flex-start',
      position: 'relative',
    },
    '& > label': {
      paddingInlineStart: system.legacy.padding.sm,
    },
  },
});

export const CheckboxContainer = createComponent('div')({
  displayName: 'CheckboxContainer',
  Component: ({children, disabled, id, label, variant}: CheckboxContainerProps) => {
    return (
      <div {...checkboxContainerStencil()}>
        <div>{children}</div>
        {label && (
          <LabelText
            htmlFor={id}
            disabled={disabled}
            variant={variant}
            style={{cursor: disabled ? 'default' : 'pointer'}}
          >
            {label}
          </LabelText>
        )}
      </div>
    );
  },
});
