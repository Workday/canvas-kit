/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import {createComponent, ExtractProps, useIsRTL} from '@workday/canvas-kit-react/common';
import {css, jsx} from '@emotion/react';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {space} from '@workday/canvas-kit-react/tokens';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {SidePanelContext} from './hooks';

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

    // Note: Depending on the collapsed width, the button could "jump" to it's final position.
    const buttonStyle = css({
      position: 'absolute',
      top: space.m,
      width: space.l,
      right: context.state === 'collapsed' ? 0 : rtlOrigin === 'left' ? space.s : undefined,
      left: context.state === 'collapsed' ? 0 : rtlOrigin === 'right' ? space.s : undefined,
      margin: context.state === 'collapsed' ? 'auto' : 0, // to override the -8px margin for TertiaryButton.Plain
      transform:
        context.state === 'collapsed' || context.state === 'collapsing'
          ? `scaleX(${rtlOrigin === 'left' ? '1' : '-1'})`
          : `scaleX(${rtlOrigin === 'left' ? '-1' : '1'})`,
    });

    return (
      <Tooltip
        title={context.state === 'collapsed' ? tooltipTextExpand : tooltipTextCollapse}
        type="muted"
      >
        <TertiaryButton
          type="button"
          css={buttonStyle}
          icon={icon}
          variant={variant}
          {...elemProps}
        />
      </Tooltip>
    );
  },
});
