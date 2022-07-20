import * as React from 'react';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-preview-react/text';

export interface TypeLabelProps extends TextProps {
  hasPointerCursor?: boolean;
  disabled?: boolean;
}

const StyledLabel = styled(Text.as('label'))<StyledType & TypeLabelProps>(
  ({hasPointerCursor, disabled}) =>
    hasPointerCursor && {
      cursor: disabled ? 'default' : 'pointer',
    }
);

export const Label = createComponent('label')({
  displayName: 'Label',
  Component: (elemProps: TypeLabelProps, ref, Element) => (
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
