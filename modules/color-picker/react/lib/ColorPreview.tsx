import * as React from 'react';
import ColorInput from './ColorInput';
import {TextInputProps} from '@workday/canvas-kit-react-text-input';
import styled from '@emotion/styled';
import {colors} from '@workday/canvas-kit-react-core';

export interface ColorPreviewProps extends TextInputProps {
  /**
   * The value entered by the user into the color input
   * @default FFFFFF
   */
  value: string;
  /**
   * An id linked to the color preview input to be used with an associated form label
   */
  id?: string;
}

const ColorPreviewComponent = styled(ColorInput)({
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.frenchVanilla100,
  pointerEvents: 'none',
});

export default class ColorPreview extends React.Component<ColorPreviewProps> {
  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {id, value, ...elemProps} = this.props;

    return (
      <ColorPreviewComponent id={id} value={value} readOnly={true} placeholder="" {...elemProps} />
    );
  }
}
