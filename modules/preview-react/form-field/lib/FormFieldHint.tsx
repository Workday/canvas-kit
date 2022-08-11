import React from 'react';
import {createSubcomponent, ExtractProps, useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

import {useFormFieldHint, useFormFieldModel} from './hooks';
import {Subtext} from '@workday/canvas-kit-react/text';

export const FormFieldHint = createSubcomponent('p')({
  displayName: 'FormField.Hint',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldHint,
})<Omit<ExtractProps<typeof Subtext, never>, 'size'>>(
  ({children, ...elemProps}, Element, model) => {
    const theme = useTheme();

    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <Subtext
        as={Element}
        size="medium"
        color={model.state.hasError ? theme.canvas.palette.error.main : undefined}
        marginY={space.xxs}
        {...elemProps}
      >
        {children}
      </Subtext>
    );
  }
);
