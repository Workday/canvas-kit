import React from 'react';

import {createSubcomponent, ExtractProps, useTheme} from '@workday/canvas-kit-react/common';
import {HStack, StackSpacing} from '@workday/canvas-kit-react/layout';
import {Label, Text} from '@workday/canvas-kit-preview-react/text';
import {useFormFieldLabel, useFormFieldModel} from './hooks';

export interface FormFieldLabelProps extends Omit<ExtractProps<typeof HStack, never>, 'spacing'> {
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

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({spacing = 'xxxs', children, ...elemProps}, Element, model) => {
  const theme = useTheme();

  return (
    <HStack as={Element} spacing={spacing} minWidth="180px" {...elemProps}>
      <Label as="span" fontWeight="medium">
        {children}
      </Label>
      {model.state.isRequired && (
        <Text
          fontSize={20}
          fontWeight="regular"
          textDecoration="unset"
          color={theme.canvas.palette.error.main}
          aria-hidden="true"
        >
          *
        </Text>
      )}
    </HStack>
  );
});
