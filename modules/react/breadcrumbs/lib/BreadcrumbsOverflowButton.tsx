import * as React from 'react';

import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  subModelHook,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {chevronRightSmallIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {component, system} from '@workday/canvas-tokens-web';

import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

export interface BreadcrumbsOverflowButtonProps extends Omit<TertiaryButtonProps, 'style'> {
  'aria-label': string;
  /**
   * Inline styles applied to the wrapping `<li>`. `useOverflowListTarget` uses this to visually
   * hide the overflow button (while keeping it measurable) when the list doesn't have items to
   * hide. A style prop passed through `overflowButtonProps` from `Breadcrumbs.List` is ignored.
   */
  style?: FlexProps;
}

export const breadcrumbsOverflowButtonStencil = createStencil({
  parts: {
    overflowButton: 'breadcrumbs-overflow-button',
    chevronRightIcon: 'breadcrumbs-overflow-button-chevron-right-icon',
  },
  base: ({chevronRightIconPart}) => ({
    alignItems: 'center',
    display: 'flex',
    [systemIconStencil.vars.color]: system.color.fg.default,
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,
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
  subModelHook((m: ReturnType<typeof useBreadcrumbsModel>) => m.menu, useMenuTarget)
);

export const BreadcrumbsOverflowButton = createSubcomponent('button')({
  displayName: 'Breadcrumbs.OverflowButton',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsOverflowButton,
})<BreadcrumbsOverflowButtonProps>(({style, ...elemProps}, Element) => {
  return (
    // `useOverflowListTarget` hides the button with inline styles when nothing overflows. They
    // must be applied as `style` on the `<li>`; spreading them renders invalid DOM attributes
    // (`position="absolute"`) and leaves an empty overflow menu button visible.
    <li {...breadcrumbsOverflowButtonStencil()} style={style as React.CSSProperties}>
      <TertiaryButton
        as={Element}
        icon={relatedActionsIcon}
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
