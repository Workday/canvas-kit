import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {LabelText} from '@workday/canvas-kit-react/text';

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
    minHeight: system.space.x6,
    position: 'relative',
    /**
     * Using a wrapper prevents the browser default behavior of trigging
     * :hover on the checkbox when you hover on it's corresponding label.
     * This stops the ripple from showing when you hover on the label.
     */
    '&>div': {
      display: 'flex',
      height: calc.add(system.space.x4, px2rem(2)),
      minWidth: calc.add(system.space.x4, px2rem(2)),
      marginTop: px2rem(3),
      alignSelf: 'flex-start',
    },
    '& > label': {
      paddingInlineStart: system.space.x3,
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
