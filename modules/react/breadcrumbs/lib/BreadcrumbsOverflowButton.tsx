import * as React from 'react';

import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubModelElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {chevronRightSmallIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {component, system} from '@workday/canvas-tokens-web';

import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

export interface BreadcrumbsOverflowButtonProps extends Omit<TertiaryButtonProps, 'style'> {
  'aria-label': string;
  /**
   * Style prop applies inline styles to the list item container.
   * `useOverflowListTarget` automatically adds hidden styles if list doesn't have items to hide.
   * Style prop passed through `overflowButtonProps` from `Breadcrumbs.List` will ignore.
   */
  style?: React.CSSProperties;
}

export const breadcrumbsOverflowButtonStencil = createStencil({
  parts: {
    overflowButton: 'breadcrumbs-overflow-button',
    chevronRightIcon: 'breadcrumbs-overflow-button-chevron-right-icon',
  },
  base: ({chevronRightIconPart, overflowButtonPart}) => ({
    alignItems: 'center',
    display: 'flex',
    [systemIconStencil.vars.color]: system.color.fg.muted.default,
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,
    [overflowButtonPart]: {
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
    [chevronRightIconPart]: {
      height: system.legacy.size.sm,
      width: system.legacy.size.sm,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex',
      ':dir(rtl)': {
        transform: 'scaleX(-1)',
      },
    },
  }),
});

export const useBreadcrumbsOverflowButton = composeHooks(
  createElemPropsHook(useBreadcrumbsModel)(() => ({
    'aria-haspopup': true,
    'aria-controls': 'menu',
  })),
  useOverflowListTarget,
  createSubModelElemPropsHook(useBreadcrumbsModel)(m => m.menu, useMenuTarget)
);

export const BreadcrumbsOverflowButton = createSubcomponent('button')({
  displayName: 'Breadcrumbs.OverflowButton',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsOverflowButton,
})<BreadcrumbsOverflowButtonProps>(({style, ...elemProps}, Element) => {
  return (
    <li {...breadcrumbsOverflowButtonStencil()} style={style}>
      <TertiaryButton
        as={Element}
        icon={relatedActionsIcon}
        size="extraSmall"
        {...breadcrumbsOverflowButtonStencil.parts.overflowButton}
        {...handleCsProp(elemProps)}
      />
      <SystemIcon
        icon={chevronRightSmallIcon}
        {...breadcrumbsOverflowButtonStencil.parts.chevronRightIcon}
        aria-hidden
      />
    </li>
  );
});
