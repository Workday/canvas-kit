import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {type, space} from '@workday/canvas-kit-react/tokens';
import {Text} from '@workday/canvas-kit-react/text';
import {useFormFieldLabel, useFormFieldModel} from './hooks';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {base, brand, system} from '@workday/canvas-tokens-web';

export interface FormFieldLabelProps {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
  /**
   * Will style the text as disabled
   */
  disabled?: boolean;
  /**
   * Changes the color of the text
   */
  variant?: 'error' | 'hint' | 'inverse';
}

const asteriskStyles = createStyles({
  marginInlineStart: space.xxxs,
  fontSize: type.properties.fontSizes[20],
  fontWeight: type.properties.fontWeights.regular,
  textDecoration: 'unset',
  color: brand.error.base,
});

const labelStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    fontWeight: system.fontWeight.medium,
    color: base.blackPepper300,
    paddingInlineStart: 0,
    marginBottom: space.xxxs,
    display: 'flex',
    alignItems: 'center',
    minWidth: '180px',
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
      modifiers: {variant: 'inverse', disabled: true},
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
})<FormFieldLabelProps>(({children, disabled, variant, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(elemProps, [
        labelStencil({orientation: model.state.orientation, disabled, variant}),
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
