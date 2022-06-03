import React from 'react';
import {
  createSubcomponent,
  ExtractProps,
  useTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {space, type} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {useFormFieldHint, useFormFieldModel} from './hooks';

const StyledHint = styled(Box)<StyledType & BoxProps>({
  ...type.levels.subtext.medium,
});

export const FormFieldHint = createSubcomponent('p')({
  displayName: 'FormField.Hint',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldHint,
})<ExtractProps<typeof Box, never>>(({children, ...elemProps}, Element, model) => {
  const theme = useTheme();

  if (!children) {
    // If there is no hint text just skip rendering
    return null;
  }

  return (
    <StyledHint
      as={Element}
      color={model.state.hasError ? theme.canvas.palette.error.main : undefined}
      marginY={space.xxs}
      {...elemProps}
    >
      {children}
    </StyledHint>
  );
});
