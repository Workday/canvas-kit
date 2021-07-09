import * as React from 'react';
import styled from '@emotion/styled';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react/common';
import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';

export interface SwatchBookProps {
  colors: string[];
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

export const SwatchBook = ({colors, value, onSelect}: SwatchBookProps) => (
  <Container>
    {colors.map((color, index) => {
      const isSelected = value ? color.toLowerCase() === value.toLowerCase() : false;

      const handleClick = () => onSelect(color);
      const handleKeyDown = (event: React.KeyboardEvent) =>
        (event.key === 'Enter' || event.key === ' ') && onSelect(color);

      return (
        <SwatchContainer
          key={index + '-' + color}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          isSelected={isSelected}
        >
          <ColorSwatch color={color} showCheck={isSelected} />
        </SwatchContainer>
      );
    })}
  </Container>
);
