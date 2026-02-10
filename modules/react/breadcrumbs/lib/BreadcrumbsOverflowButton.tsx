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
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {chevronRightSmallIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

export interface BreadcrumbsOverflowButtonProps extends TertiaryButtonProps {
  'aria-label': string;
  /**
   * style prop applies styles to the whole Flex component,
   * `useOverflowListTarget` automatically adds hidden styles if list doesn't have items to hide
   * style prop passed through `overflowButtonProps` from `Breadcrumbs.List` will ignore
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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.color]: cssVar(system.color.fg.default, system.color.icon.default),
    [systemIconStencil.vars.size]: px2rem(20),
    [chevronRightIconPart]: {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      height: cssVar(system.size.md, system.space.x8),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      width: cssVar(system.size.md, system.space.x8),
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
    <li {...breadcrumbsOverflowButtonStencil()} {...style}>
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
