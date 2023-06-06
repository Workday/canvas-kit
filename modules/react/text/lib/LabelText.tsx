import * as React from 'react';
import {Property} from 'csstype';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from './Text';
import {inputColors} from '@workday/canvas-kit-react/tokens';

export interface TypeLabelProps extends TextProps {
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
    return (
      <Text
        ref={ref}
        as={Element}
        typeLevel="subtext.large"
        color={disabled && variant !== 'inverse' ? inputColors.disabled.text : undefined}
        cursor={cursor && !disabled ? cursor : 'default'}
        opacity={disabled && variant === 'inverse' ? '.4' : '1'}
        variant={variant}
        {...elemProps}
      />
    );
  },
});
