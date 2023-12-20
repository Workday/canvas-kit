import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {base, system} from '@workday/canvas-tokens-web';
import {CSProps, createStencil} from '@workday/canvas-kit-styling';
import {CommonStyleProps, mergeStyles} from '@workday/canvas-kit-react/layout';

export interface TypeLabelProps extends CSProps, CommonStyleProps {
  disabled?: boolean;
  /**
   * Type variant token names: `error`, `hint` or `inverse`.
   *
   * ```tsx
   * <LabelText variant="error">Error text</LabelText>
   * ```
   */
  variant?: 'error' | 'hint' | 'inverse';
}

const labelTextStencil = createStencil({
  // @ts-ignore
  base: {
    ...system.type.subtext.large,
    color: base.blackPepper300,
  },
  modifiers: {
    variant: {
      error: {color: base.cinnamon500},
      hint: {color: base.licorice300},
      inverse: {color: base.frenchVanilla100},
    },
    state: {
      disabled: {
        cursor: 'default',
        color: base.licorice100,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', state: 'disabled'},
      styles: {
        opacity: system.opacity.disabled,
        color: base.frenchVanilla100,
      },
    },
  ],
});

/**
 * This component is intended to be used for labeling input fields.
 *  By default, it renders a semantic `label` element.
 *
 * It also uses the `subtext.large` typeLevel by default:
 * - font-size: 14px (0.875rem)
 * - font-weight: regular (400)
 *
 * ```tsx
 * import { LabelText } from '@workday/canvas-kit-react/text';
 *
 * const CustomLabelText = () => (
 *   <LabelText>Input Label Text</LabelText>
 * );
 * ```
 */
export const LabelText = createComponent('label')({
  displayName: 'Label',
  Component: ({disabled, variant, ...elemProps}: TypeLabelProps, ref, Element) => {
    return (
      <Element
        ref={ref}
        {...mergeStyles(
          elemProps,
          labelTextStencil({variant, state: disabled ? 'disabled' : undefined})
        )}
      />
    );
  },
});
