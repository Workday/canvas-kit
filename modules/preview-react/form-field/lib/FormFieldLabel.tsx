import React from 'react';

import {
  createComponent,
  ExtractProps,
  useModelContext,
  useTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Box, HStack, StackSpacing} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';

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

const StyledFormFieldLabel = styled('span')({
  ...type.levels.subtext.large,
  fontWeight: type.properties.fontWeights.medium,
});

const StyledAsterisk = styled(Box)<StyledType>({
  fontSize: type.properties.fontSizes[20],
  fontWeight: type.properties.fontWeights.regular,
  textDecoration: 'unset',
});

export const FormFieldLabel = createComponent('label')({
  displayName: 'FormField.Label',
  Component: ({spacing = 'xxxs', model, children, ...elemProps}: FormFieldLabelProps, ref) => {
    const localModel = useModelContext(FormFieldModelContext, model);
    const props = useFormFieldLabel(localModel, elemProps, ref);
    const theme = useTheme();

    return (
      <HStack as="label" spacing={spacing} minWidth="180px" {...props}>
        <StyledFormFieldLabel>{children}</StyledFormFieldLabel>
        {localModel.state.isRequired && (
          <StyledAsterisk as="span" color={theme.canvas.palette.error.main} aria-hidden="true">
            *
          </StyledAsterisk>
        )}
      </HStack>
    );
  },
});
