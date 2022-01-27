/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {
  createComponent,
  ExtractProps,
  useModelContext,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {FormFieldModelContext} from './FormField';
import {FormFieldModel, useFormFieldHint} from './hooks';

export interface FormFieldHintProps extends ExtractProps<typeof Box, never> {
  model?: FormFieldModel;
  /**
   * Hint text to show to the user regarding the Error/Alert
   */
  children?: React.ReactNode;
}

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
      <Box
        as={Element}
        css={{
          ...type.levels.subtext.medium,
          color: localModel.state.hasError ? theme.canvas.palette.error.main : undefined,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  },
});
