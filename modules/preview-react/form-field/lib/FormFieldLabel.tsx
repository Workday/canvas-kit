import React from 'react';

import {createSubcomponent, ExtractProps, useTheme} from '@workday/canvas-kit-react/common';
import {Flex, SystemPropValues} from '@workday/canvas-kit-react/layout';
import {LabelText, Text} from '@workday/canvas-kit-react/text';
import {useFormFieldLabel, useFormFieldModel} from './hooks';

export interface FormFieldLabelProps extends Omit<ExtractProps<typeof Flex, never>, 'spacing'> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
  /**
   * When the input is required, this is spacing between label and asterisk.
   * @default xxxs
   */
  spacing?: SystemPropValues['space'];
}

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({spacing = 'xxxs', children, ...elemProps}, Element, model) => {
  const theme = useTheme();

  return (
    <Flex as={Element} gap={spacing} minWidth="180px" {...elemProps}>
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
