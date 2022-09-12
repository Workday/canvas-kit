import * as React from 'react';
import {chevronRightSmallIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  createElemPropsHook,
  composeHooks,
  subModelHook,
  createSubcomponent,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';

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
})<TertiaryButtonProps>((elemProps, Element) => {
  return (
    <Flex alignItems="center">
      <TertiaryButton
        as={Element}
        icon={relatedActionsIcon}
        aria-label="More links"
        {...elemProps}
      />
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
