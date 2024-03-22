import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {base, system} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';

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
  base: {
    ...system.type.subtext.large,
    color: system.color.text.default,
  },
  modifiers: {
    typeLevel: {
      // Title level styles
      'title.large': {
        ...system.type.title.large,
        color: system.color.text.strong,
      },
      'title.medium': {
        ...system.type.title.medium,
        color: system.color.text.strong,
      },
      'title.small': {
        ...system.type.title.small,
        color: system.color.text.strong,
      },
      // Heading level styles
      'heading.large': {
        ...system.type.heading.large,
        color: system.color.text.strong,
      },
      'heading.medium': {
        ...system.type.heading.medium,
        color: system.color.text.strong,
      },
      'heading.small': {
        ...system.type.heading.small,
        color: system.color.text.strong,
      },
      // Body level styles
      'body.large': {
        ...system.type.body.large,
        color: system.color.text.default,
      },
      'body.medium': {
        ...system.type.body.medium,
        color: system.color.text.default,
      },
      'body.small': {
        ...system.type.body.small,
        color: system.color.text.default,
      },
      // Subtext level styles
      'subtext.large': {
        ...system.type.subtext.large,
        color: system.color.text.default,
      },
      'subtext.medium': {
        ...system.type.subtext.medium,
        color: system.color.text.default,
      },
      'subtext.small': {
        ...system.type.subtext.small,
        color: system.color.text.default,
      },
    },
    variant: {
      error: {color: system.color.text.critical.default},
      hint: {color: system.color.text.hint},
      inverse: {color: system.color.text.inverse},
    },
    disabled: {
      true: {
        cursor: 'default',
        color: system.color.text.disabled,
      },
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
 * @deprecated ⚠️ `LabelText` has been deprecated and will be removed in a future major version. Please use [FormField.Label](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-form-field--basic) from Preview instead.
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
