import * as React from 'react';
import {Property} from 'csstype';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-preview-react/text';

export interface TypeLabelProps extends TextProps {
  cursor?: Property.Cursor;
  disabled?: boolean;
}

const StyledLabel = styled(Text.as('label'))<StyledType & TypeLabelProps>(({cursor, disabled}) => ({
  cursor: cursor && !disabled ? cursor : 'default',
}));

export const Label = createComponent('label')({
  displayName: 'Label',
  Component: ({disabled, variant, ...elemProps}: TypeLabelProps, ref, Element) => (
    <StyledLabel
      ref={ref}
      as={Element}
      asToken="subtext.large"
      color={disabled ? 'licorice100' : undefined}
      variant={!disabled ? variant : undefined}
      {...elemProps}
    />
  ),
});
