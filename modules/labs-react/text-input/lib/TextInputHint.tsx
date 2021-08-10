import React from 'react';

import {
  createComponent,
  ErrorType,
  ExtractProps,
  styled,
  StyledType,
  Themeable,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {space, type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {TextInputModelContext} from './TextInput';
import {TextInputModel} from './useTextInputModel';

export interface TextInputHintProps extends ExtractProps<typeof Box, never>, Themeable {
  model?: TextInputModel;
  /**
   * Hint text to show to the user regarding the Error/Alert
   */
  children?: React.ReactNode;
}

const StyledBox = styled(Box)<
  Pick<TextInputHintProps, 'theme'> & Pick<TextInputModel['state'], 'hasError'> & StyledType
>(
  type.levels.subtext.medium,
  {
    margin: `${space.xxs} 0 0`,
    width: '100%',
  },
  ({hasError, theme}) => hasError === ErrorType.Error && {color: theme.canvas.palette.error.main}
);

export const TextInputHint = createComponent('p')({
  displayName: 'TextInput.Hint',
  Component: ({model, children, theme, ...elemProps}: TextInputHintProps, ref, Element) => {
    const {state} = useModelContext(TextInputModelContext, model);
    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <StyledBox
        as={Element}
        ref={ref}
        hasError={state.hasError}
        theme={theme}
        id={state.hintId}
        {...elemProps}
      >
        {children}
      </StyledBox>
    );
  },
});
