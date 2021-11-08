/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {
  createComponent,
  ExtractProps,
  useModelContext,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {ComponentStyles} from '@workday/canvas-kit-labs-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {HStack, StackSpacing} from '@workday/canvas-kit-labs-react/layout';

import {FormFieldModelContext} from './FormField';
import {FormFieldModel, useFormFieldLabel} from './hooks';

export interface FormFieldLabelProps extends Omit<ExtractProps<typeof HStack, never>, 'spacing'> {
  model?: FormFieldModel;
  /**
   * The text of the label.
   */
  children: React.ReactNode;
  /**
   * When the input is required, this is spacing between label and asterisk.
   * @default xxxs
   */
  spacing?: StackSpacing;
}

const styles: ComponentStyles = {
  label: {
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.medium,
  },
  asterisk: {
    fontSize: type.properties.fontSizes[16],
    fontWeight: type.properties.fontWeights.regular,
    textDecoration: 'unset',
  },
};

export const FormFieldLabel = createComponent('label')({
  displayName: 'FormField.Label',
  Component: ({spacing='xxxs', model, children, ...elemProps}: FormFieldLabelProps, ref) => {
    const localModel = useModelContext(FormFieldModelContext, model);
    const props = useFormFieldLabel(localModel, elemProps, ref);
    const theme = useTheme();

    return (
      <HStack
        as="label"
        spacing={spacing}
        css={styles.label}
        minWidth='180px'
        {...props}
      >
        <span>{children}</span>
        {localModel.state.isRequired && (
          <span
            css={[styles.asterisk, {color: theme.canvas.palette.error.main}]}
            aria-hidden="true"
          >
            *
          </span>
        )}
      </HStack>
    );
  },
});
