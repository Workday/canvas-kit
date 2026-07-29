import * as React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {
  ExtractProps,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {sidebarLeftIcon, sidebarRightIcon} from '@workday/canvas-system-icons-web';
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
    top: px2rem(12),
    width: system.legacy.size.md,
    ':dir(rtl)': {
      transform: `scaleX(-1)`,
    },
  },
  modifiers: {
    state: {
      collapsing: {
        margin: 0,
      },
      collapsed: {
        margin: 'auto',
      },
      expanded: {
        margin: 0,
      },
      expanding: {
        margin: 0,
      },
    },
    origin: {
      start: {
        insetInlineEnd: base.legacy.size150,
      },
      end: {
        insetInlineStart: base.legacy.size150,
      },
    },
  },
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
      icon,
      tooltipTextExpand = 'Expand View',
      tooltipTextCollapse = 'Collapse View',
      tooltipProps,
      tooltipText,
      ...elemProps
    }: SidePanelToggleButtonProps,
    Element,
    model
  ) => {
    const sidePanelIcon =
      icon || (model.state.origin === 'start' ? sidebarLeftIcon : sidebarRightIcon);

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
          icon={sidePanelIcon}
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
