import * as React from 'react';
import {chevronRightSmallIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  subModelHook,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';

export interface BreadcrumbsOverflowButtonProps extends TertiaryButtonProps {
  'aria-label': string;
  /**
   * style prop applies styles to the whole Flex component,
   * `useOverflowListTarget` automatically adds hidden styles if list doesn't have items to hide
   * style prop passed through `overflowButtonProps` from `Breadcrumbs.List` will ignore
   */
  style?: FlexProps;
}

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
    <Flex alignItems="center" {...style}>
      <TertiaryButton as={Element} icon={relatedActionsIcon} {...elemProps} />
      <SystemIcon
        icon={chevronRightSmallIcon}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        size={20}
        height={space.l}
        width={space.l}
        shouldMirror={useIsRTL()}
        styles={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}
        aria-hidden
      />
    </Flex>
  );
});
