import * as React from 'react';
import ColorInput from './ColorInput';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';

export interface ColorPreviewProps {
  value: string;
  id?: string;
}

const ColorPreviewComponent = styled(ColorInput)({
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.frenchVanilla100,
  pointerEvents: 'none',
});

export default class ColorPreview extends React.Component<ColorPreviewProps> {
  public render() {
    return (
      <ColorPreviewComponent
        id={this.props.id}
        value={this.props.value}
        readOnly={true}
        placeholder=""
      />
    );
  }
}
