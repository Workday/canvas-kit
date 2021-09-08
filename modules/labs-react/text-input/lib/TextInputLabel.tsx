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

import {TextInputModelContext} from './TextInput';
import {TextInputModel} from './hooks/useTextInputModel';
import {useTextInputLabel} from './hooks/useTextInputLabel';

export interface TextInputLabelProps extends ExtractProps<typeof Box, never> {
  model?: TextInputModel;
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

export const TextInputLabel = createComponent('label')({
  displayName: 'TextInput.Label',
  Component: ({isVisuallyHidden, model, children, ...elemProps}: TextInputLabelProps, ref) => {
    const localModel = useModelContext(TextInputModelContext, model);
    const props = useTextInputLabel(localModel, elemProps, ref);
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
