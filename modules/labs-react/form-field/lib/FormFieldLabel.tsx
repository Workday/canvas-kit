/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {
  accessibleHide,
  createComponent,
  ExtractProps,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {Box, ComponentStyles, useThemeRTL} from '@workday/canvas-kit-labs-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {HStack} from '@workday/canvas-kit-labs-react/layout';

import {FormFieldModelContext} from './FormField';
import {FormFieldModel} from './hooks/useFormFieldModel';
import {useFormFieldLabel} from './hooks/useFormFieldLabel';

export interface FormFieldLabelProps extends ExtractProps<typeof Box, never> {
  model?: FormFieldModel;
  /**
   * If true, apply the `accessibleHide` styles to the Label.
   */
  isVisuallyHidden?: boolean;
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

const styles: ComponentStyles = {
  label: {
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.medium,
    minWidth: '180px',
  },
  label_visuallyHidden: {
    ...accessibleHide,
  },
  asterisk: {
    fontSize: type.properties.fontSizes[16],
    fontWeight: type.properties.fontWeights.regular,
    textDecoration: 'unset',
  },
};

export const FormFieldLabel = createComponent('label')({
  displayName: 'FormField.Label',
  Component: ({isVisuallyHidden, model, children, ...elemProps}: FormFieldLabelProps, ref) => {
    const localModel = useModelContext(FormFieldModelContext, model);
    const props = useFormFieldLabel(localModel, elemProps, ref);
    const {themeRTL, theme} = useThemeRTL();

    return (
      <Box
        as="label"
        css={themeRTL(styles.label, isVisuallyHidden ? styles.label_visuallyHidden : {})}
        {...props}
      >
        <HStack spacing="xxxs">
          <span>{children}</span>
          {localModel.state.isRequired && (
            <span
              css={themeRTL(styles.asterisk, {color: theme.canvas.palette.error.main})}
              aria-hidden="true"
            >
              *
            </span>
          )}
        </HStack>
      </Box>
    );
  },
});
