import {createComponent} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {textStencil} from './Text';

/**
 * @deprecated ⚠️ `TypeLabelProps` has been deprecated and will be removed in a future major version.
 */
export interface TypeLabelProps extends BoxProps {
  typeLevel?: `${keyof typeof system.type}.${'large' | 'medium' | 'small'}`;
  /**
   * Disabled state as a boolean
   *
   * ```tsx
   * <LabelText disabled={true}>Error text</LabelText>
   * ```
   */
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
  extends: textStencil,
  base: {
    ...system.type.subtext.large,
    color: system.color.text.default,
  },
  modifiers: {
    disabled: {
      true: {
        cursor: 'default',
        color: system.color.text.disabled,
      },
    },
    variant: {
      inverse: {color: system.color.text.inverse},
      error: {color: system.color.text.critical.default},
      hint: {color: system.color.text.hint},
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {
        opacity: system.opacity.disabled,
        color: system.color.text.inverse,
      },
    },
  ],
});

/**
 * This component is intended to be used for labeling input fields.
 * By default, it renders a semantic `label` element.
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
 *
 * @deprecated ⚠️ `LabelText` has been deprecated and will be removed in a future major version. Please use [FormField.Label](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-form-field--docs) from Main instead.
 */
export const LabelText = createComponent('label')({
  displayName: 'Label',
  Component: ({disabled, typeLevel, variant, ...elemProps}: TypeLabelProps, ref, Element) => {
    return (
      <Element
        ref={ref}
        {...mergeStyles(elemProps, labelTextStencil({variant, disabled, typeLevel}))}
      />
    );
  },
});
