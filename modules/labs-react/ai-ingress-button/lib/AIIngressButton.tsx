import {createComponent, focusRing, useUniqueId} from '@workday/canvas-kit-react/common';
import {BaseButton, BaseButtonProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {createStencil, handleCsProp, calc} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {getAIIngressIcon} from './AIIngressIcon';
export interface AIIngressButtonProps
  extends Omit<
    BaseButtonProps,
    'size' | 'colors' | 'icon' | 'iconPosition' | 'shouldMirrorIcon' | 'shouldMirrorIconInRTL'
  > {
  /**
   * When true, indicates that the AI Ingress button is toggled.
   */
  toggled?: boolean;
  /**
   * Used on dark backgrounds.
   */
  variant?: 'inverse';
}

/**
 * Icon gradient colors
 */
const illuminateStopColor1 = base.red200; //'#FFA198'
const illuminateStopColor2 = base.orange200; //'#FFCAA0'
const illuminateStopColor3 = base.orange200; //'#FFCA79'
const illuminateStopColor4 = base.amber200; //'#FDCA44'
const illuminateStopColor5 = base.amber300; //'#FFB74D';

/**
 * Box shadow glow colors
 */
const glowEraser = base.magenta200; //'#FFC2FD';
const glowHighlighter = base.amber100; //'#FFF3A8';
const glowLunchBreak = base.amber300; //'#FEC10B';
const glowHappyHour = base.orange400; //'#FD7E00';
const glowThumbtack = base.coral500; //'#FC5B05';

export const AIIngressButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    [buttonStencil.vars.background]: system.color.bg.ai.strongest,
    borderRadius: system.shape.round,
    height: calc.add(system.space.x10, system.space.x1),
    width: calc.add(system.space.x10, system.space.x1),
    transition: 'box-shadow 300ms ease-out, background 300ms ease-out',

    '.wd-icon-ai-ingress-button': {
      '.wd-icon-fill': {
        transition: 'fill 300ms ease-out',
      },
      '> linearGradient > stop': {
        transition: '300ms ease-out',
        stopColor: system.color.fg.inverse,
      },
    },

    '&:is(:hover, .hover):not(:disabled, .disabled)': {
      '.wd-icon-ai-ingress-button': {
        'linearGradient > stop:first-child': {
          stopColor: illuminateStopColor1,
        },
        'linearGradient > stop:nth-child(2)': {
          stopColor: illuminateStopColor2,
        },
        'linearGradient > stop:nth-child(3)': {
          stopColor: illuminateStopColor3,
        },
        'linearGradient > stop:nth-child(4)': {
          stopColor: illuminateStopColor4,
        },
        'linearGradient > stop:nth-child(5)': {
          stopColor: illuminateStopColor5,
        },
      },
    },
    '&:disabled, &:disabled:active, &.disabled': {
      opacity: system.opacity.disabled,
    },
    '&:is(:focus-visible, .focus):not(:disabled, .disabled)': {
      ...focusRing({width: 2, separation: 0}),
    },
  },
  modifiers: {
    variant: {
      inverse: {
        [buttonStencil.vars.background]: system.color.bg.default,
        '.wd-icon-ai-ingress-button': {
          '.wd-icon-fill': {
            transition: 'fill 300ms ease-out',
          },
          '> linearGradient > stop': {
            transition: '300ms ease-out',
            stopColor: system.color.fg.ai,
          },
        },
        '&:is(:hover, .hover):not(:disabled, .disabled)': {
          '.wd-icon-ai-ingress-button': {
            'linearGradient > stop:first-child': {
              stopColor: illuminateStopColor1,
            },
            'linearGradient > stop:nth-child(2)': {
              stopColor: illuminateStopColor2,
            },
            'linearGradient > stop:nth-child(3)': {
              stopColor: illuminateStopColor3,
            },
            'linearGradient > stop:nth-child(4)': {
              stopColor: illuminateStopColor4,
            },
            'linearGradient > stop:nth-child(5)': {
              stopColor: illuminateStopColor5,
            },
          },
        },
        '&:is(:focus-visible, .focus):not(:disabled, .disabled)': {
          ...focusRing({width: 2, separation: 0, outerColor: system.color.fg.inverse}),
          border: `2px solid ${system.color.border.ai} `,
        },
      },
    },
    toggled: {
      true: {
        [buttonStencil.vars.background]: system.color.bg.default,
        transition: 'box-shadow 300ms ease-out, background 300ms ease-out',

        boxShadow: `0px 0px 4.9px 0px ${glowEraser}, 0px 0px 0.98px 0px ${glowHighlighter}, 0px 0px 1.96px 0px ${glowLunchBreak}, 0px 0px 2.94px 0px ${glowLunchBreak}, 0px 0px 4.9px 0px ${glowHappyHour}, 0px 0px 7.36px 0px ${glowThumbtack}, 0px 0px 9.81px 0px ${glowEraser}, 0px 0px 12.26px 0px rgba(255, 194, 253, 0.50)`,
        '.wd-icon-ai-ingress-button': {
          '.wd-icon-fill': {
            transition: 'fill 300ms ease-out',
          },
          '> linearGradient > stop': {
            transition: '300ms ease-out',
            stopColor: system.color.fg.ai,
          },
        },
        '> linearGradient > stop': {
          transition: '300ms ease-out',
          stopColor: system.color.fg.ai,
        },
        '&:is(:focus-visible, .focus):not(:disabled, .disabled)': {
          ...focusRing({width: 2, separation: 2}),
          border: `1px solid ${system.color.border.container} `,
        },
      },
      false: {
        transition: 'box-shadow 300ms ease-out, background 300ms ease-out',
      },
    },
  },
  compound: [
    {
      modifiers: {toggled: true, variant: 'inverse'},
      styles: {
        [buttonStencil.vars.background]: system.color.bg.ai.strongest,
        '.wd-icon-ai-ingress-button': {
          '.wd-icon-fill': {
            transition: 'fill 300ms ease-out',
          },
          '> linearGradient > stop': {
            transition: '300ms ease-out',
            stopColor: system.color.fg.inverse,
          },
        },
        '&:is(:focus-visible, .focus):not(:disabled, .disabled)': {
          ...focusRing({width: 2, separation: 0, outerColor: system.color.fg.inverse}),
          border: 'none',
        },
      },
    },
  ],
});

export const AIIngressButton = createComponent('button')({
  displayName: 'AIIngressButton',
  Component: ({toggled, variant, ...elemProps}: AIIngressButtonProps, ref, Element) => {
    const svgGradientId = useUniqueId();
    return (
      <BaseButton
        ref={ref}
        as={Element}
        {...handleCsProp(elemProps, [
          AIIngressButtonStencil({toggled, variant}),
          {
            [systemIconStencil.vars.color]: `url(#${svgGradientId})`,
          },
        ])}
      >
        <BaseButton.Icon size="large" icon={getAIIngressIcon(svgGradientId)} />
      </BaseButton>
    );
  },
});
