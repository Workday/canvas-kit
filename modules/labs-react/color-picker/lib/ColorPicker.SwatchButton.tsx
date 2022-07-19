/* eslint-disable workday-custom-rules/restricted-imports */
/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import {
  focusRing,
  mouseFocusBehavior,
  StyledType,
  pickForegroundColor,
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import chroma from 'chroma-js';
import * as React from 'react';
import {
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  isSelected,
} from '@workday/canvas-kit-react/collection';
import {useColorPickerModel} from './useColorPickerModel';

export interface SwatchButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
const accessibilityBorder = `${colors.frenchVanilla100} 0px 0px 0px 2px, ${colors.licorice200} 0px 0px 0px 3px`;
export const swatchButtonSize = 20;

const SwatchButtonContainer = styled('button')<{color: string; showCheck: boolean} & StyledType>(
  {
    width: swatchButtonSize,
    height: swatchButtonSize,
    cursor: 'pointer',
    borderRadius: borderRadius.s,
    transition: 'box-shadow 120ms ease',
    margin: `0px ${space.xxs} ${space.xxs} 0px`,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    forcedColorAdjust: 'none',
    '&:hover': {
      boxShadow: accessibilityBorder,
    },

    '&:focus': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
    '&[aria-checked=true]': {
      boxShadow: accessibilityBorder,
      ...mouseFocusBehavior({
        '&:focus': {
          animation: 'none',
          boxShadow: 'none',
        },
        '&:hover': {
          boxShadow: accessibilityBorder,
        },
        '&': {
          boxShadow: accessibilityBorder,
        },
      }),
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

export const useSwatchesItem = composeHooks(
  createElemPropsHook(useColorPickerModel)(
    ({state, events}, _?: React.Ref<HTMLButtonElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';

      const selected = !!elemProps['data-id'] && isSelected(name, state);

      return {
        type: 'button' as const,
        role: 'radio',
        'aria-checked': selected,
        'aria-label': `color ${state.color}`,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
          console.log('event', event.target.getAttribute('color'));
          events.setCustomColor(event.target.getAttribute('color'));
        },
      };
    }
  ),
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

export default createSubcomponent('button')({
  displayName: 'SwatchButton',
  modelHook: useColorPickerModel,
  elemPropsHook: useSwatchesItem,
})<SwatchButtonProps>(({color, showCheck = false, ...elemProps}, Element, model) => {
  return (
    <SwatchButtonContainer
      color={color}
      as={Element}
      showCheck={showCheck || model.state.color === color}
      style={{boxShadow: model.state.cursorId === color ? accessibilityBorder : undefined}}
      {...elemProps}
    >
      {showCheck || elemProps['aria-checked'] ? (
        <SystemIcon
          fill={pickForegroundColor(color)}
          fillHover={pickForegroundColor(color)}
          icon={checkSmallIcon}
          color={color}
        />
      ) : null}
    </SwatchButtonContainer>
  );
});
