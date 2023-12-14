import * as React from 'react';
import {Property} from 'csstype';
import {createComponent} from '@workday/canvas-kit-react/common';
import {base, system} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text, TextProps} from './Text';

export interface TypeLabelProps extends Omit<TextProps, 'typeLevel'> {
  cursor?: Property.Cursor;
  disabled?: boolean;
}

/**
 * This component is intended to be used for labeling input fields. It's built on top of the
 * {@link Text} component, so it has access to all `TextProps`. By default, it renders a semantic
 * `label` element.
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
  Component: ({cursor, disabled, variant, ...elemProps}: TypeLabelProps, ref, Element) => {
    const stencil = createStencil({
      // @ts-ignore
      base: {
        ...system.type.subtext.large,
        cursor,
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

    return (
      <Element
        ref={ref}
        {...mergeStyles(elemProps, stencil({variant, state: disabled ? 'disabled' : undefined}))}
      />
    );
  },
});
