import * as React from 'react';

import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';
import {focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface SwatchBookColorObject {
  value: string;
  label: string;
}

export interface SwatchBookProps {
  colors: (string | SwatchBookColorObject)[];
  value?: string;
  onSelect: (color: string) => void;
}

const colorPickerSwatchBookStencil = createStencil({
  vars: {
    shadow: `${cssVar(system.color.border.inverse.default, base.neutral0)} 0 0 0 ${px2rem(2)}, ${
      system.color.border.input.default
    } 0 0 0 ${px2rem(3)}`,
  },
  parts: {
    tile: 'color-picker-swatch-book-tile',
  },
  base: ({tilePart, shadow}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: `0 ${calc.negate(system.gap.sm)} ${calc.negate(system.gap.sm)} 0`,
    [tilePart]: {
      display: 'flex',
      width: system.size.xxs,
      height: system.size.xxs,
      cursor: 'pointer',
      borderRadius: system.shape.sm,
      transition: 'box-shadow 120ms ease',
      margin: `0px ${system.gap.sm} ${system.gap.sm} 0px`,

      '&:hover': {
        boxShadow: shadow,
      },

      '&:focus-visible': {
        outline: 'none',
        ...focusRing({separation: 2}),
      },

      '&[aria-selected="true"]': {
        boxShadow: shadow,

        '&:focus-visible': {
          animation: 'none',
          boxShadow: 'none',
        },

        '&:hover': {
          boxShadow: shadow,
        },
      },
    },
  }),
});

export const SwatchBook = ({colors, value, onSelect}: SwatchBookProps) => {
  return (
    <div {...colorPickerSwatchBookStencil()}>
      {colors.map((color: string | SwatchBookColorObject, index: number) => {
        const hexCode = typeof color === 'object' ? color.value : color.toLowerCase();
        const label = typeof color === 'object' ? color.label : color.toLowerCase();
        const isSelected = value ? hexCode.toLowerCase() === value.toLowerCase() : false;

        const handleClick = () => onSelect(hexCode);
        const handleKeyDown = (event: React.KeyboardEvent) =>
          (event.key === 'Enter' || event.key === ' ') && onSelect(hexCode);

        return (
          <div
            key={index + '-' + color}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={label}
            aria-selected={isSelected}
            {...colorPickerSwatchBookStencil.parts.tile}
          >
            <ColorSwatch color={hexCode} showCheck={isSelected} />
          </div>
        );
      })}
    </div>
  );
};
