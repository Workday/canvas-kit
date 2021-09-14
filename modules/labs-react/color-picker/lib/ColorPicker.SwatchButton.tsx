/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import {
  focusRing,
  mouseFocusBehavior,
  createComponent,
  StyledType,
  pickForegroundColor,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import chroma from 'chroma-js';
import * as React from 'react';

import {ColorPickerModelContext} from './ColorPicker';

export interface SwatchButtonProps {
  /**
   * A valid color string that determines the color of the square
   */
  color: string;
  /**
   * Will show a check mark on the color swatch if true
   * @default false
   */
  showCheck?: boolean;
  isSelected?: boolean;
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
const accessibilityBorder = `${colors.frenchVanilla100} 0px 0px 0px 2px, ${colors.licorice200} 0px 0px 0px 3px`;

const SwatchButtonContainer = styled('button')<
  {color: string; showCheck: boolean; isSelected: boolean} & StyledType
>(
  {
    width: 20,
    height: 20,
    cursor: 'pointer',
    borderRadius: borderRadius.s,
    transition: 'box-shadow 120ms ease',
    margin: `0px ${space.xxs} ${space.xxs} 0px`,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: accessibilityBorder,
    },

    '&:focus': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
  },
  ({color, showCheck}) => ({
    backgroundColor: color,
    boxShadow:
      showCheck || compareColors(color, colors.frenchVanilla100)
        ? 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25)'
        : undefined,
  }),
  ({isSelected}) => ({
    boxShadow: isSelected ? accessibilityBorder : undefined,
    ...mouseFocusBehavior({
      '&:focus': {
        animation: 'none',
        boxShadow: 'none',
      },
      '&:hover': {
        boxShadow: accessibilityBorder,
      },
      '&': {
        boxShadow: isSelected ? accessibilityBorder : undefined,
      },
    }),
  })
);

export default createComponent('button')({
  displayName: 'SwatchButton',
  Component: ({color, showCheck = false, ...elemProps}: SwatchButtonProps, ref, Element) => {
    const {state, events} = React.useContext(ColorPickerModelContext);
    const isSelected = state.color ? color === state.color : false;
    return (
      <SwatchButtonContainer
        ref={ref}
        color={color}
        as={Element}
        showCheck={showCheck || state.color === color}
        isSelected={isSelected}
        onClick={() => events.setColor({color: color})}
        {...elemProps}
      >
        {showCheck || state.color === color ? (
          <SystemIcon
            fill={pickForegroundColor(color)}
            fillHover={pickForegroundColor(color)}
            icon={checkSmallIcon}
            color={color}
          />
        ) : null}
      </SwatchButtonContainer>
    );
  },
});
