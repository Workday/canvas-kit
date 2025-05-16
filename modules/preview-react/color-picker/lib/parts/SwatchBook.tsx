import * as React from 'react';
import {focusRing} from '@workday/canvas-kit-react/common';
import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface SwatchBookColorObject {
  value: string;
  label: string;
}

export interface SwatchBookProps {
  colors: (string | SwatchBookColorObject)[];
  value?: string;
  onSelect: (color: string) => void;
}

export const swatchBookStencil = createStencil({
  parts: {
    wrapper: 'swatch-book-wrapper',
  },
  vars: {
    shadow: `${system.color.border.inverse} 0 0 0 ${px2rem(2)}, ${
      system.color.border.input.default
    } 0 0 0 ${px2rem(3)}`,
  },
  base: ({wrapperPart, shadow}) => ({
    display: 'flex',
    width: px2rem(20),
    height: px2rem(20),
    cursor: 'pointer',
    borderRadius: system.shape.half,
    transition: 'box-shadow 120ms ease',
    margin: `0px ${system.space.x2} ${system.space.x2} 0px`,

    '&:hover': {
      boxShadow: shadow,
    },

    '&:focus-visible': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },

    [wrapperPart]: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: `0 ${calc.negate(system.space.x2)} ${calc.negate(system.space.x2)} 0`,
    },
  }),
  modifiers: {
    selected: {
      true: ({shadow}) => ({
        boxShadow: shadow,

        '&:focus-visible': {
          animation: 'none',
          boxShadow: 'none',
        },

        '&:hover': {
          boxShadow: shadow,
        },
      }),
    },
  },
});

export const SwatchBook = ({colors, value, onSelect}: SwatchBookProps) => {
  return (
    <div {...swatchBookStencil.parts.wrapper}>
      {colors.map((color: string | SwatchBookColorObject, index: number) => {
        const hexCode = typeof color === 'object' ? color.value : color;
        const label = typeof color === 'object' ? color.label : color;
        const isSelected = value ? hexCode.toLowerCase() === value.toLowerCase() : false;

        const handleClick = () => onSelect(hexCode);
        const handleKeyDown = (event: React.KeyboardEvent) =>
          (event.key === 'Enter' || event.key === ' ') && onSelect(hexCode);

        return (
          <div
            {...handleCsProp({}, swatchBookStencil({selected: isSelected}))}
            key={index + '-' + color}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={label}
            aria-selected={isSelected}
          >
            <ColorSwatch color={hexCode} showCheck={isSelected} />
          </div>
        );
      })}
    </div>
  );
};
