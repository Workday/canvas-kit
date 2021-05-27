import * as React from 'react';
import ColorInput from './ColorInput';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {TextInputProps} from '@workday/canvas-kit-react/text-input';
import styled from '@emotion/styled';
import {colors} from '@workday/canvas-kit-react/tokens';

export interface ColorPreviewProps extends TextInputProps {
  /**
   * The value of the ColorPreview.
   */
  value: string;
  /**
   * The HTML `id` of the underlying text input element.
   */
  id?: string;
}

const StyledColorPreview = styled(ColorInput)<StyledType>({
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.frenchVanilla100,
  pointerEvents: 'none',
});

export const ColorPreview = createComponent('input')({
  displayName: 'ColorPreview',
  Component: ({id, value, ...elemProps}: ColorPreviewProps, ref, Element) => (
    <StyledColorPreview
      ref={ref}
      as={Element}
      id={id}
      value={value}
      readOnly={true}
      placeholder=""
      {...elemProps}
    />
  ),
});

export default ColorPreview;
