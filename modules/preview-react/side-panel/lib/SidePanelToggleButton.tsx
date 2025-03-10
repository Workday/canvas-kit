import * as React from 'react';
import {createComponent, ExtractProps, useIsRTL} from '@workday/canvas-kit-react/common';
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
  },
  modifiers: {
    state: {
      collapsed: {
        margin: 'auto',
        left: 0,
        right: 0,
      },
      collapsing: {
        margin: 0,
      },
      expanded: {
        margin: 0,
      },
      expanding: {
        margin: 0,
      },
    },
    rtlOrigin: {
      left: {},
      right: {},
    },
  },
  compound: [
    {
      modifiers: {state: 'collapsed', rtlOrigin: 'left'},
      styles: {
        transform: `scaleX(1)`,
      },
    },
    {
      modifiers: {state: 'collapsed', rtlOrigin: 'right'},
      styles: {
        transform: `scaleX(-1)`,
      },
    },
    {
      modifiers: {state: 'collapsing', rtlOrigin: 'left'},
      styles: {
        transform: `scaleX(1)`,
        right: system.space.x4,
      },
    },
    {
      modifiers: {state: 'collapsing', rtlOrigin: 'right'},
      styles: {
        transform: `scaleX(-1)`,
        left: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanded', rtlOrigin: 'left'},
      styles: {
        transform: `scaleX(-1)`,
        right: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanded', rtlOrigin: 'right'},
      styles: {
        transform: `scaleX(1)`,
        left: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanding', rtlOrigin: 'left'},
      styles: {
        transform: `scaleX(-1)`,
        right: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanding', rtlOrigin: 'right'},
      styles: {
        transform: `scaleX(1)`,
        left: system.space.x4,
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

    const useRTLOrigin = () => {
      const isRTL = useIsRTL();
      // if the direction is set to RTl, flip the origin
      if (isRTL) {
        return context.origin === 'left' ? 'right' : 'left';
      }
      // Otherwise, default to returning the origin
      return context.origin;
    };

    const rtlOrigin = useRTLOrigin();

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
              rtlOrigin: rtlOrigin as 'left' | 'right',
            })
          )}
        />
      </Tooltip>
    );
  },
});
