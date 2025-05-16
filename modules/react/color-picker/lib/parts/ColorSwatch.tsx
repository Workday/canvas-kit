import * as React from 'react';

import {pickForegroundColor} from '@workday/canvas-kit-react/common';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  showCheck?: boolean;
}

export const colorPickerColorSwatchStencil = createStencil({
  vars: {
    color: '',
    iconColor: '',
  },
  base: ({color, iconColor}) => ({
    [systemIconStencil.vars.color]: iconColor,
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

const getIconColor = (color: string) => {
  return color.startsWith('--cnvs')
    ? color.match(/.*-(100|200|300|400)$/)
      ? cssVar(system.color.text.strong)
      : cssVar(system.color.text.inverse)
    : pickForegroundColor(color);
};

export const ColorSwatch = ({color, showCheck = false, ...elemProps}: ColorSwatchProps) => {
  return (
    <div
      {...handleCsProp(
        elemProps,
        colorPickerColorSwatchStencil({
          color: color.startsWith('--cnvs') ? cssVar(color) : color,
          iconColor: getIconColor(color),
          withShadow: showCheck || color.includes('french-vanilla-100'),
        })
      )}
    >
      {showCheck && <SystemIcon icon={checkSmallIcon} />}
    </div>
  );
};
