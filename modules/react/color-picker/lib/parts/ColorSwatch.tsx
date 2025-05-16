import * as React from 'react';
import chroma from 'chroma-js';

import {pickForegroundColor} from '@workday/canvas-kit-react/common';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  showCheck?: boolean;
}

function compareColors(color1: string, color2: string): boolean {
  // Check for validity or else you'll get an unknown format error when passing blank strings
  if (!chroma.valid(color1) || !chroma.valid(color2)) {
    return false;
  }

  return chroma(color1).hex() === chroma(color2).hex();
}

export const colorPickerColorSwatchStencil = createStencil({
  vars: {
    color: '',
    iconColor: '',
  },
  base: ({color, iconColor}) => ({
    [systemIconStencil.vars.color]: cssVar(color, iconColor),
    backgroundColor: color,
    width: px2rem(20),
    height: px2rem(20),
    borderRadius: system.shape.half,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      // Account for 24px icon
      margin: calc.negate(px2rem(2)),
    },
  }),
  modifiers: {
    withShadow: {
      true: {
        boxShadow: `inset 0px 0px 0px ${px2rem(1)} rgba(0, 0, 0, 0.25)`,
      },
    },
  },
});

export const ColorSwatch = ({color, showCheck = false, ...elemProps}: ColorSwatchProps) => (
  <div
    {...handleCsProp(
      elemProps,
      colorPickerColorSwatchStencil({
        color,
        iconColor: pickForegroundColor(color),
        withShadow: showCheck || compareColors(color, system.color.bg.default),
      })
    )}
  >
    {showCheck && <SystemIcon icon={checkSmallIcon} />}
  </div>
);
