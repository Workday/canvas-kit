import * as React from 'react';

import {pickForegroundColor} from '@workday/canvas-kit-react/common';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
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
    width: px2rem(20),
    height: px2rem(20),
    borderRadius: system.shape.half,
    backgroundColor: color,
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

export const ColorSwatch = ({color, showCheck = false, ...elemProps}: ColorSwatchProps) => {
  const lowerCasedColor = color.toLowerCase();

  return (
    <div
      data-color={lowerCasedColor}
      {...handleCsProp(
        elemProps,
        colorPickerColorSwatchStencil({
          color,
          iconColor: pickForegroundColor(color),
          withShadow: showCheck || lowerCasedColor === '#ffffff',
        })
      )}
    >
      {showCheck && <SystemIcon icon={checkSmallIcon} />}
    </div>
  );
};
