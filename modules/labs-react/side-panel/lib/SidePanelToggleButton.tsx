import * as React from 'react';
import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';
import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {useSidePanelModel} from './useSidePanelModel';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface SidePanelToggleButtonProps extends ExtractProps<typeof TertiaryButton> {
  /**
   * The tooltip text to expand the side panel
   */
  tooltipTextExpand?: string;
  /**
   * The tooltip text to collapse the side panel
   */
  tooltipTextCollapse?: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
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
        insetInlineStart: system.space.x4,
        ':dir(rtl)': {
          transform: `scaleX(1)`,
          insetInlineEnd: system.space.x4,
        },
      },
    },
    {
      modifiers: {state: 'expanded', origin: 'end'},
      styles: {
        transform: `scaleX(1)`,
        insetInlineStart: system.space.x4,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
          insetInlineEnd: system.space.x4,
        },
      },
    },
    {
      modifiers: {state: 'expanding', origin: 'end'},
      styles: {
        transform: `scaleX(1)`,
        insetInlineStart: system.space.x4,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
          insetInlineEnd: system.space.x4,
        },
      },
    },
  ],
});

export const useSidePanelToggleButtonElemProps = createElemPropsHook(useSidePanelModel)(
  ({state}) => {
    return {
      'aria-controls': state.panelId,
      'aria-expanded': state.transitionState === 'expanded',
      'aria-labelledby': state.labelId,
    };
  }
);

export const SidePanelToggleButton = createSubcomponent('button')({
  displayName: 'SidePanel.ToggleButton',
  modelHook: useSidePanelModel,
  elemPropsHook: useSidePanelToggleButtonElemProps,
})(
  (
    {
      variant = undefined,
      icon = transformationImportIcon,
      tooltipTextExpand = 'Expand',
      tooltipTextCollapse = 'Collapse',
      tooltipProps,
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
          model.state.transitionState === 'collapsed' ? tooltipTextExpand : tooltipTextCollapse
        }
      >
        <TertiaryButton
          icon={icon}
          as={Element}
          variant={variant}
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
