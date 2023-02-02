import React from 'react';

import {createSubcomponent, ExtractProps, useTheme} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {LabelText, Text} from '@workday/canvas-kit-react/text';
import {useFormFieldLabel, useFormFieldModel} from './hooks';

export interface FormFieldLabelProps extends Omit<ExtractProps<typeof Flex, never>, 'gap'> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
  /**
   * When the input is required, this is gap between label and asterisk.
   * @default xxxs
   */
  gap?: FlexProps['gap'];
}

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({gap = 'xxxs', children, ...elemProps}, Element, model) => {
  const theme = useTheme();

  return (
    <Flex as={Element} gap={gap} minWidth="180px" {...elemProps}>
      <LabelText as="span" fontWeight="medium">
        {children}
      </LabelText>
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
    </Flex>
  );
});
