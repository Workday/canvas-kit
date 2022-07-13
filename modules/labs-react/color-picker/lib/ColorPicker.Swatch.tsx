/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import {
  pickForegroundColor,
  StyledType,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {borderRadius, colors} from '@workday/canvas-kit-react/tokens';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import chroma from 'chroma-js';
import * as React from 'react';

import {useColorPickerModel} from './useColorPickerModel';

export interface ColorSwatchProps {
  /**
   * A valid color string that determines the color of the square
   */
  color: string;
  /**
   * Will show a check mark on the color swatch if true
   * @default false
   */
  showCheck?: boolean;
}

function compareColors(color1: string, color2: string): boolean {
  // Check for validity or else you'll get an unknown format error when passing blank strings
  /* istanbul ignore next */
  if (!chroma.valid(color1) || !chroma.valid(color2)) {
    /* istanbul ignore next */
    return false;
  }

  return chroma(color1).hex() === chroma(color2).hex();
}

const StyledContainer = styled('div')<ColorSwatchProps & StyledType>(
  {
    width: 20,
    height: 20,
    borderRadius: borderRadius.s,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      // Account for 24px icon
      margin: -2,
    },
  },
  ({color, showCheck}) => ({
    backgroundColor: color,
    boxShadow:
      showCheck || compareColors(color, colors.frenchVanilla100)
        ? 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25)'
        : undefined,
  })
);

export default createSubcomponent('div')({
  displayName: 'Swatch',
  modelHook: useColorPickerModel,
})<ColorSwatchProps>(({color, showCheck = false, ...elemProps}, Element, model) => {
  return (
    <StyledContainer
      color={color}
      as={Element}
      showCheck={showCheck || model.state.selectedIds[0] === color}
      {...elemProps}
    >
      {showCheck || model.state.color === color ? (
        <SystemIcon
          fill={pickForegroundColor(color)}
          fillHover={pickForegroundColor(color)}
          icon={checkSmallIcon}
          color={color}
        />
      ) : null}
    </StyledContainer>
  );
});
