import React from 'react';
import {
  createComponent,
  ExtractProps,
  useModelContext,
  useTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {space, type} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {FormFieldModelContext} from './FormField';
import {FormFieldModel, useFormFieldHint} from './hooks';

export interface FormFieldHintProps extends ExtractProps<typeof Box, never> {
  model?: FormFieldModel;
  /**
   * Hint text to show to the user regarding the Error/Alert
   */
  children?: React.ReactNode;
}

const StyledHint = styled(Box)<StyledType & BoxProps>({
  ...type.levels.subtext.medium,
});

export const FormFieldHint = createComponent('p')({
  displayName: 'FormField.Hint',
  Component: ({model, children, ...elemProps}: FormFieldHintProps, ref, Element) => {
    const localModel = useModelContext(FormFieldModelContext, model);
    const props = useFormFieldHint(localModel, elemProps, ref);
    const theme = useTheme();

    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <StyledHint
        as={Element}
        color={localModel.state.hasError ? theme.canvas.palette.error.main : undefined}
        marginY={space.xxs}
        {...props}
      >
        {children}
      </StyledHint>
    );
  },
});
