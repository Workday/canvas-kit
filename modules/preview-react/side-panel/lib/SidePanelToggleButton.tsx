import * as React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {SidePanelContext} from './hooks';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {SidePanelTransitionStates} from './SidePanel';

export interface SidePanelToggleButtonProps extends ExtractProps<typeof TertiaryButton, never> {
  /**
   * The tooltip text to expand the side panel
   */
  tooltipTextExpand?: string;
  /**
   * The tooltip text to collapse the side panel
   */
  tooltipTextCollapse?: string;
}

export const sidePanelToggleButtonStencil = createStencil({
  base: {
    position: 'absolute',
    top: system.space.x6,
    width: system.space.x8,
    insetInlineEnd: system.space.x4,
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
        insetInlineStart: 0,
        insetInlineEnd: 0,
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
      left: {},
      right: {},
    },
  },

  compound: [
    {
      modifiers: {state: 'collapsed', origin: 'right'},
      styles: {
        transform: `scaleX(-1)`,
      },
    },
    {
      modifiers: {state: 'collapsing', origin: 'right'},
      styles: {
        transform: `scaleX(-1)`,
        insetInlineStart: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanded', origin: 'right'},
      styles: {
        transform: `scaleX(1)`,
        insetInlineStart: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanding', origin: 'right'},
      styles: {
        transform: `scaleX(1)`,
        insetInlineStart: system.space.x4,
      },
    },
  ],
});

/**
 * A toggle button styled specifically for the side panel container.
 */
export const SidePanelToggleButton = createComponent('button')({
  displayName: 'SidePanel.ToggleButton',
  Component({
    variant = undefined,
    icon = transformationImportIcon,
    tooltipTextExpand = 'Expand',
    tooltipTextCollapse = 'Collapse',
    ...elemProps
  }: SidePanelToggleButtonProps) {
    const context = React.useContext(SidePanelContext);

    return (
      <Tooltip
        title={context.state === 'collapsed' ? tooltipTextExpand : tooltipTextCollapse}
        type="muted"
      >
        <TertiaryButton
          type="button"
          icon={icon}
          variant={variant}
          {...handleCsProp(
            elemProps,
            sidePanelToggleButtonStencil({
              state: context.state as SidePanelTransitionStates,
              origin: context.origin,
            })
          )}
          onClick={event => {
            //@ts-ignore this gets called from the useSidePanel hook.
            elemProps.onClick?.(event);
            context.handleAnimationStart();
          }}
        />
      </Tooltip>
    );
  },
});
