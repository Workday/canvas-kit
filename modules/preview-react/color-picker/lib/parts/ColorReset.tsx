import {calc, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';
import {focusRing} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';
import {Subtext} from '@workday/canvas-kit-react/text';

export interface ResetButtonProps {
  label: string;
  resetColor: string;
  onClick: (color: string) => void;
}

export const resetButtonStencil = createStencil({
  parts: {
    label: 'reset-button-label',
  },
  base: ({labelPart}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: calc.add('100%', system.space.x8),
    height: system.space.x8,
    margin: `${calc.negate(system.space.x2)} ${calc.negate(system.space.x4)} ${system.space.x2}`,
    padding: `0 ${system.space.x4}`,
    whiteSpace: 'nowrap',
    border: 'none',
    outline: 'none',
    background: 'none',
    cursor: 'pointer',
    transition: 'color 120ms ease, background-color 120ms ease',

    '&:hover, &.hover': {
      backgroundColor: system.color.bg.alt.default,
    },

    '&:active, &.active': {
      backgroundColor: system.color.bg.alt.strong,
    },
    '&:focus-visible, &.focus': {
      ...focusRing(),
    },
    [labelPart]: {
      marginLeft: system.space.x2,
    },
  }),
});

export const ResetButton = ({onClick, resetColor, label}: ResetButtonProps) => {
  const handleResetColor = () => onClick(resetColor);

  return (
    <button onClick={handleResetColor} {...handleCsProp({}, resetButtonStencil())}>
      <ColorSwatch color={resetColor} data-color="" />
      <Subtext size="medium" as="div" {...resetButtonStencil.parts.label}>
        {label}
      </Subtext>
    </button>
  );
};
