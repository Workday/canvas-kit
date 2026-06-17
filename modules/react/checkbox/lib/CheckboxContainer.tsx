import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Subtext} from '@workday/canvas-kit-react/text';
import {CSProps, calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

interface CheckboxContainerProps extends CSProps {
  children: React.ReactNode;
  disabled?: boolean;
  id: string;
  label: string;
  variant?: 'inverse';
}

const checkboxContainerStencil = createStencil({
  parts: {
    label: 'checkbox-container-label',
  },
  base: ({labelPart}) => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: system.legacy.size.xxxs,
    position: 'relative',
    /**
     * Using a wrapper prevents the browser default behavior of trigging
     * :hover on the checkbox when you hover on it's corresponding label.
     * This stops the ripple from showing when you hover on the label.
     */
    '&>div': {
      display: 'flex',
      height: system.legacy.size.xxxs,
      minWidth: system.legacy.size.xxxs,
      alignSelf: 'flex-start',
      position: 'relative',
    },
    [labelPart]: {
      paddingInlineStart: system.legacy.padding.xs,
      cursor: 'pointer',
      marginBlockStart: calc.negate(px2rem(2)),
    },
  }),
  modifiers: {
    disabled: {
      true: {
        opacity: system.opacity.disabled,
        cursor: 'default',
      },
    },
  },
});

export const CheckboxContainer = createComponent('div')({
  displayName: 'CheckboxContainer',
  Component: ({children, disabled, id, label, variant}: CheckboxContainerProps) => {
    return (
      <div {...checkboxContainerStencil({disabled})}>
        <div>{children}</div>
        {label && (
          <Subtext
            size="large"
            as="label"
            htmlFor={id}
            variant={variant}
            {...checkboxContainerStencil.parts.label}
          >
            {label}
          </Subtext>
        )}
      </div>
    );
  },
});
