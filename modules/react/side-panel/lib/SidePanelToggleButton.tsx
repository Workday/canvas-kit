import * as React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {
  ExtractProps,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

import {useSidePanelModel} from './useSidePanelModel';

export interface SidePanelToggleButtonProps extends ExtractProps<typeof TertiaryButton> {
  /**
   * The tooltip text to expand the side panel
   * @deprecated Use
   */
  tooltipTextExpand?: string;
  /**
   * Provides an accessible label to the button. This text **should not** convey visual state but rather what it does like "control data panel."
   */
  tooltipText?: string;
  /**
   * The tooltip text to collapse the side panel. Optional text for when the side panel is in a collapsed state.
   */
  tooltipTextCollapse?: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

export const sidePanelToggleButtonStencil = createStencil({
  base: {
    position: 'absolute',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    top: cssVar(system.gap.lg, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(system.gap.lg, system.space.x8),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    insetInlineEnd: cssVar(base.size150, system.space.x3),
  },
  modifiers: {
    state: {
      collapsing: {
        margin: 0,
        transform: `scaleX(1)`,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
        },
      },
      collapsed: {
        margin: 'auto',
        transform: `scaleX(1)`,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
        },
      },
      expanded: {
        margin: 0,
        transform: `scaleX(-1)`,
        ':dir(rtl)': {
          transform: `scaleX(1)`,
        },
      },
      expanding: {
        margin: 0,
        transform: `scaleX(-1)`,
        ':dir(rtl)': {
          transform: `scaleX(1)`,
        },
      },
    },
    origin: {
      start: {},
      end: {
        transform: `scaleX(1)`,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
        },
      },
    },
  },

  compound: [
    {
      modifiers: {state: 'collapsed', origin: 'end'},
      styles: {
        transform: `scaleX(-1)`,
        ':dir(rtl)': {
          transform: `scaleX(1)`,
        },
      },
    },
    {
      modifiers: {state: 'collapsing', origin: 'end'},
      styles: {
        transform: `scaleX(-1)`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        insetInlineStart: cssVar(base.size150, system.space.x3),
        ':dir(rtl)': {
          transform: `scaleX(1)`,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          insetInlineEnd: cssVar(base.size150, system.space.x3),
        },
      },
    },
    {
      modifiers: {state: 'expanded', origin: 'end'},
      styles: {
        transform: `scaleX(1)`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        insetInlineStart: cssVar(base.size150, system.space.x3),
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          insetInlineEnd: cssVar(base.size150, system.space.x3),
        },
      },
    },
    {
      modifiers: {state: 'expanding', origin: 'end'},
      styles: {
        transform: `scaleX(1)`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        insetInlineStart: cssVar(base.size150, system.space.x3),
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          insetInlineEnd: cssVar(base.size150, system.space.x3),
        },
      },
    },
  ],
});

export const useSidePanelToggleButton = createElemPropsHook(useSidePanelModel)(({state}) => {
  return {
    'aria-controls': state.panelId,
    'aria-pressed': state.transitionState === 'collapsed',
    'aria-describedby': state.labelId,
  };
});

export const SidePanelToggleButton = createSubcomponent('button')({
  displayName: 'SidePanel.ToggleButton',
  modelHook: useSidePanelModel,
  elemPropsHook: useSidePanelToggleButton,
})(
  (
    {
      variant = undefined,
      icon = transformationImportIcon,
      tooltipTextExpand = 'Expand View',
      tooltipTextCollapse = 'Collapse View',
      tooltipProps,
      tooltipText,
      ...elemProps
    }: SidePanelToggleButtonProps,
    Element,
    model
  ) => {
    return (
      <Tooltip
        type="muted"
        {...tooltipProps}
        title={
          tooltipText ||
          (model.state.transitionState === 'expanded' ? tooltipTextCollapse : tooltipTextExpand)
        }
      >
        <TertiaryButton
          icon={icon}
          as={Element}
          variant={variant}
          aria-label={tooltipText}
          {...handleCsProp(
            elemProps,
            sidePanelToggleButtonStencil({
              state: model.state.transitionState,
              origin: model.state.origin,
            })
          )}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            elemProps.onClick?.(event);
            model.events.handleAnimationStart();
          }}
        />
      </Tooltip>
    );
  }
);
