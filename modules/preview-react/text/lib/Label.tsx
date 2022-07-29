import * as React from 'react';
import {Property} from 'csstype';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-preview-react/text';
import {inputColors} from '@workday/canvas-kit-react/tokens';

export interface TypeLabelProps extends TextProps {
  cursor?: Property.Cursor;
  disabled?: boolean;
}

const StyledLabel = styled(Text.as('label'))<StyledType & TypeLabelProps>(
  ({cursor, disabled, variant}) => ({
    color: disabled && variant !== 'inverse' ? inputColors.disabled.text : undefined,
    cursor: cursor && !disabled ? cursor : 'default',
    opacity: disabled && variant === 'inverse' ? '.4' : '1',
  })
);

export const Label = createComponent('label')({
  displayName: 'Label',
  Component: (elemProps: TypeLabelProps, ref, Element) => {
    return <StyledLabel ref={ref} as={Element} tokenLevel="subtext.large" {...elemProps} />;
  },
});
