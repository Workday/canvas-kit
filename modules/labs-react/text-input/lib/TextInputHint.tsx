/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';
import {CSSProperties, space, type} from '@workday/canvas-kit-react/tokens';
import {Box, useThemeRTL} from '@workday/canvas-kit-labs-react/common';

import {TextInputModelContext} from './TextInput';
import {TextInputModel} from './hooks/useTextInputModel';
import {useTextInputHint} from './hooks/useTextInputHint';

export interface TextInputHintProps extends ExtractProps<typeof Box, never> {
  model?: TextInputModel;
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

export const TextInputHint = createComponent('p')({
  displayName: 'TextInput.Hint',
  Component: ({model, children, ...elemProps}: TextInputHintProps, ref, Element) => {
    const localModel = useModelContext(TextInputModelContext, model);
    const props = useTextInputHint(localModel, elemProps, ref);
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
