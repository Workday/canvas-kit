import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';
import {focusRing} from '@workday/canvas-kit-react/common';
import {Subtext} from '@workday/canvas-kit-react/text';
import {calc, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

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
    width: calc.add('100%', system.size.sm),
    height: system.size.sm,
    margin: `${calc.negate(base.size100)} ${calc.negate(system.size.xxxs)} ${base.size100}`,
    padding: `0 ${system.padding.md}`,
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
      backgroundColor: system.color.surface.default,
    },
    '&:focus-visible, &.focus': {
      ...focusRing(),
    },
    [labelPart]: {
      marginInlineStart: system.gap.sm,
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
