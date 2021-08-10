import React from 'react';

import {
  accessibleHide,
  createComponent,
  ExtractProps,
  styled,
  StyledType,
  Themeable,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {TextInputModel} from './useTextInputModel';
import {TextInputModelContext} from './TextInput';

export interface TextInputLabelProps extends ExtractProps<typeof Box, never>, Themeable {
  model?: TextInputModel;
  /**
   * If the field is required, provide the title required label.
   */
  isRequiredLabel?: string;
  /**
   * If true, apply the `accessibleHide` styles to the Label.
   */
  isVisuallyHidden?: boolean;
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

const StyledBox = styled(Box as typeof TextInputLabel)<
  Pick<TextInputLabelProps, 'isVisuallyHidden'> & StyledType
>(
  type.levels.subtext.large,
  {
    fontWeight: type.properties.fontWeights.medium,
    minWidth: '180px',
  },
  ({isVisuallyHidden}) => isVisuallyHidden && accessibleHide
);

const RequiredAsterisk = styled('abbr')<Pick<TextInputLabelProps, 'theme'> & StyledType>(
  {
    fontSize: type.properties.fontSizes[16],
    fontWeight: type.properties.fontWeights.regular,
    textDecoration: 'unset',
  },
  ({theme}) => {
    return {
      color: theme.canvas.palette.error.main,
    };
  }
);

export const TextInputLabel = createComponent('label')({
  displayName: 'TextInput.Label',
  Component: (
    {isRequiredLabel, isVisuallyHidden, theme, model, children, ...elemProps}: TextInputLabelProps,
    ref
  ) => {
    const {state} = useModelContext(TextInputModelContext, model);

    return (
      <StyledBox
        as="label"
        ref={ref}
        htmlFor={state.inputId}
        theme={theme}
        isVisuallyHidden={isVisuallyHidden}
        {...elemProps}
      >
        <HStack spacing="xxxs">
          <span>{children}</span>
          {!!isRequiredLabel && <RequiredAsterisk title={isRequiredLabel}>*</RequiredAsterisk>}
        </HStack>
      </StyledBox>
    );
  },
});
