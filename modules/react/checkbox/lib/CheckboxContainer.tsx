import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, calc, createStyles, cssVar, px2rem, createVars} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {LabelText} from '@workday/canvas-kit-react/text';

interface CheckboxContainerProps extends CSProps {
  children: React.ReactNode;
  label: string;
  inputId: string;
  disabled?: boolean;
  variant?: 'inverse';
}

export const inputVars = createVars('errorInner', 'errorOuter', 'alertInner', 'alertOuter');

const checkboxContainerStyles = createStyles({
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
    marginTop: '3px',
    alignSelf: 'flex-start',
  },
});

export const CheckboxContainer = createComponent('div')({
  displayName: 'CheckboxRipple',
  Component: ({children, label, inputId, disabled, variant}: CheckboxContainerProps) => {
    return (
      <div className={checkboxContainerStyles}>
        <div>{children}</div>
        {label && (
          <LabelText
            htmlFor={inputId}
            disabled={disabled}
            variant={variant}
            cs={{paddingInlineStart: cssVar(system.space.x3), cursor: 'pointer'}}
          >
            {label}
          </LabelText>
        )}
      </div>
    );
  },
});
