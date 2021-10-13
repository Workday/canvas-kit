/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';
import {CSSProperties, space, type} from '@workday/canvas-kit-react/tokens';
import {Box, useThemeRTL} from '@workday/canvas-kit-labs-react/common';

import {FormFieldModelContext} from './FormField';
import {FormFieldModel, useFormFieldHint} from './hooks';

export interface FormFieldHintProps extends ExtractProps<typeof Box, never> {
  model?: FormFieldModel;
  /**
   * Hint text to show to the user regarding the Error/Alert
   */
  children?: React.ReactNode;
}

const baseStyles: CSSProperties = {
  ...type.levels.subtext.medium,
  margin: `${space.xxs} 0 0`,
  width: '100%',
};

export const FormFieldHint = createComponent('p')({
  displayName: 'FormField.Hint',
  Component: ({model, children, ...elemProps}: FormFieldHintProps, ref, Element) => {
    const localModel = useModelContext(FormFieldModelContext, model);
    const props = useFormFieldHint(localModel, elemProps, ref);
    const {themeRTL, theme} = useThemeRTL();

    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <Box
        as={Element}
        css={themeRTL(
          baseStyles,
          localModel.state.hasError ? {color: theme.canvas.palette.error.main} : {}
        )}
        {...props}
      >
        {children}
      </Box>
    );
  },
});
