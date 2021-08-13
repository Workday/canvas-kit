/** @jsx jsx */
import * as React from 'react';
import {css, jsx} from '@emotion/core';
import {space} from '@workday/canvas-kit-react/tokens';
import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';

import {SidePanelModel, SidePanelModelContext, useSidePanelToggleButton} from './hooks';

export interface SidePanelToggleButtonProps
  extends Omit<IconButtonProps, 'aria-label'>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: SidePanelModel;
}

export const SidePanelToggleButton = createComponent(IconButton)({
  displayName: 'SidePanel.ToggleButton',
  Component: (
    {
      model,
      icon = transformationImportIcon,
      variant = 'plain',
      ...elemProps
    }: SidePanelToggleButtonProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(SidePanelModelContext, model);
    const props = useSidePanelToggleButton(localModel, elemProps, ref);

    // Note: Depending on the collapsed width, the button could "jump" to it's final position.
    const buttonStyles = css({
      position: 'absolute',
      top: space.m,
      right: !localModel.state.expanded
        ? 0
        : localModel.state.origin === 'start'
        ? space.s
        : undefined,
      left: !localModel.state.expanded
        ? 0
        : localModel.state.origin === 'end'
        ? space.s
        : undefined,
      margin: !localModel.state.expanded ? 'auto' : 0, // to override the -8px margin for IconButton.Plain
      // transform:
      //   localModel.state === 'collapsed' || localModel.state === 'collapsing'
      //     ? `scaleX(${localModel.origin === 'left' ? '1' : '-1'})`
      //     : `scaleX(${localModel.origin === 'left' ? '-1' : '1'})`,
    });

    return (
      // @ts-ignore aria-label type error here. The user will decide to use aria-label or aria-labelledby
      <Element
        ref={ref}
        css={buttonStyles}
        type="button"
        variant={variant}
        icon={icon}
        {...props}
      />
    );
  },
});
