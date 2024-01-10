import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {type, space} from '@workday/canvas-kit-react/tokens';
import {LabelText, Text} from '@workday/canvas-kit-react/text';
import {useFormFieldLabel, useFormFieldModel} from './hooks';
import {createModifiers, createStencil, createStyles, cssVar} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {base, brand, system} from '@workday/canvas-tokens-web';

export interface FormFieldLabelProps extends ExtractProps<typeof LabelText, never> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

const labelStyles = createStyles({
  fontWeight: type.properties.fontWeights.medium,
  paddingInlineStart: 0,
  marginBottom: space.xxxs,
  display: 'flex',
  alignItems: 'center',
  minWidth: '180px',
});

const asteriskStyles = createStyles({
  marginInlineStart: space.xxxs,
  fontSize: type.properties.fontSizes[20],
  fontWeight: type.properties.fontWeights.regular,
  textDecoration: 'unset',
  color: cssVar(brand.error.base, '#de2e21'),
});

const labelModifiers = createModifiers({
  orientation: {
    horizontal: createStyles({
      float: 'left',
      maxHeight: space.xl,
    }),
    vertical: createStyles({
      width: '100%',
    }),
  },
});

const labelTextStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    color: base.blackPepper300,
  },
  modifiers: {
    orientation: {
      horizontal: {
        float: 'left',
        maxHeight: space.xl,
      },
      vertical: {
        width: '100%',
      },
    },
    variant: {
      error: {color: base.cinnamon500},
      hint: {color: base.licorice300},
      inverse: {color: base.frenchVanilla100},
    },
    disabled: {
      true: {
        cursor: 'default',
        color: base.licorice100,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: 'true'},
      styles: {
        opacity: system.opacity.disabled,
        color: base.frenchVanilla100,
      },
    },
  ],
});

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(elemProps, [
        labelStyles,
        labelModifiers({orientation: model.state.orientation}),
      ])}
    >
      {children}
      {model.state.isRequired && (
        <Text cs={asteriskStyles} aria-hidden="true">
          *
        </Text>
      )}
    </Element>
  );
});
