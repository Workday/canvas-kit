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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    margin: `0 ${calc.negate(cssVar(system.gap.sm, system.space.x2))} ${calc.negate(cssVar(system.gap.sm, system.space.x2))} 0`,
    [tilePart]: {
      display: 'flex',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      width: cssVar(system.size.xxs, px2rem(20)),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      height: cssVar(system.size.xxs, px2rem(20)),
      cursor: 'pointer',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderRadius: cssVar(system.shape.sm, system.shape.half),
      transition: 'box-shadow 120ms ease',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      margin: `0px ${cssVar(system.gap.sm, system.space.x2)} ${cssVar(system.gap.sm, system.space.x2)} 0px`,

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
