import * as React from 'react';
import {
  chevronLeftSmallIcon,
  chevronRightSmallIcon,
  relatedActionsIcon,
} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {
  createElemPropsHook,
  composeHooks,
  subModelHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {useRTL} from './useRTL';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useBreadcrumbsModel} from './useBreadcrumbsModel';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

export interface BreadcrumbsOverflowButtonProps {
  /**
   * The accessibility label for the dropdown menu button.
   *
   * Suggested value: "more links"
   */
  buttonAriaLabel?: string;
}

export const useBreadcrumbsOverflowButton = composeHooks(
  createElemPropsHook(useBreadcrumbsModel)((_model, _element) => ({
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
})<BreadcrumbsOverflowButtonProps>(({buttonAriaLabel = 'More links', ...elemProps}, Element) => {
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronLeftSmallIcon : chevronRightSmallIcon;
  const styles = (elemProps as typeof elemProps & {style: FlexProps}).style;

  return (
    <Flex alignItems="center" {...styles}>
      <TertiaryButton as={Element} icon={relatedActionsIcon} {...elemProps} />
      <SystemIcon
        icon={icon}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        size={20}
        height={32}
        width={32}
        styles={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}
        aria-hidden
        aria-label={buttonAriaLabel}
      />
    </Flex>
  );
});
