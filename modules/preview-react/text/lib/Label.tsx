import * as React from 'react';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-preview-react/text';

interface LabelProps extends TextProps {
  hasPointerCursor?: boolean;
  disabled?: boolean;
}

const StyledLabel = styled(Text.as('label'))<StyledType & LabelProps>(
  ({hasPointerCursor, disabled}) =>
    hasPointerCursor && {
      cursor: disabled ? 'default' : 'pointer',
    }
);

export const Label = createComponent('label')({
  displayName: 'Label',
  Component: (elemProps: LabelProps, ref, Element) => (
    <StyledLabel
      ref={ref}
      as={Element}
      level="subtext"
      size="large"
      color={elemProps.disabled ? 'licorice100' : undefined}
      {...elemProps}
    />
  ),
});
