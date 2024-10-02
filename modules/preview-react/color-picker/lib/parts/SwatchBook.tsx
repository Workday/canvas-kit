import * as React from 'react';
import styled from '@emotion/styled';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react/common';
import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';

export interface SwatchBookColorObject {
  value: string;
  label: string;
}

export interface SwatchBookProps {
  colors: (string | SwatchBookColorObject)[];
  value?: string;
  onSelect: (color: string) => void;
}

interface SwatchContainerProps {
  isSelected: boolean;
}

const accessibilityBorder = `${colors.frenchVanilla100} 0px 0px 0px 2px, ${colors.licorice200} 0px 0px 0px 3px`;

const SwatchContainer = styled('div')<SwatchContainerProps>(
  {
    display: 'flex',
    width: 20,
    height: 20,
    cursor: 'pointer',
    borderRadius: borderRadius.s,
    transition: 'box-shadow 120ms ease',
    margin: `0px ${space.xxs} ${space.xxs} 0px`,

    '&:hover': {
      boxShadow: accessibilityBorder,
    },

    '&:focus': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
  },
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

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  margin: `0px -${space.xxs} -${space.xxs} 0px`,
});

export const SwatchBook = ({colors, value, onSelect}: SwatchBookProps) => {
  return (
    <Container>
      {colors.map((color: string | SwatchBookColorObject, index: number) => {
        const hexCode = typeof color === 'object' ? color.value : color;
        const label = typeof color === 'object' ? color.label : color;
        const isSelected = value ? hexCode.toLowerCase() === value.toLowerCase() : false;

        const handleClick = () => onSelect(hexCode);
        const handleKeyDown = (event: React.KeyboardEvent) =>
          (event.key === 'Enter' || event.key === ' ') && onSelect(hexCode);

        return (
          <SwatchContainer
            key={index + '-' + color}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            isSelected={isSelected}
            role="button"
            aria-label={label}
            aria-selected={isSelected}
          >
            <ColorSwatch color={hexCode} showCheck={isSelected} />
          </SwatchContainer>
        );
      })}
    </Container>
  );
};
