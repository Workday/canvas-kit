import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  useTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Box, HStack, StackSpacing} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';

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

const StyledFormFieldLabel = styled('span')({
  ...type.levels.subtext.large,
  fontWeight: type.properties.fontWeights.medium,
});

const StyledAsterisk = styled(Box)<StyledType>({
  fontSize: type.properties.fontSizes[20],
  fontWeight: type.properties.fontWeights.regular,
  textDecoration: 'unset',
});

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({spacing = 'xxxs', children, ...elemProps}, Element, model) => {
  const theme = useTheme();

  return (
    <HStack as={Element} spacing={spacing} minWidth="180px" {...elemProps}>
      <StyledFormFieldLabel>{children}</StyledFormFieldLabel>
      {model.state.isRequired && (
        <StyledAsterisk as="span" color={theme.canvas.palette.error.main} aria-hidden="true">
          *
        </StyledAsterisk>
      )}
    </HStack>
  );
});
