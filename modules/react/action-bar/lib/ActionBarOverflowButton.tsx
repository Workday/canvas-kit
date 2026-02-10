import {SecondaryButton, SecondaryButtonProps} from '@workday/canvas-kit-react/button';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubModelElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {createStencil} from '@workday/canvas-kit-styling';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';

import {useActionBarModel} from './useActionBarModel';

export interface ActionBarOverflowButtonProps extends SecondaryButtonProps {
  'aria-label': string;
}

export const actionBarOverflowButtonStencil = createStencil({
  base: {
    flex: 0,
  },
});

export const useActionBarOverflowButton = composeHooks(
  createElemPropsHook(useActionBarModel)(() => ({
    'aria-haspopup': true,
  })),
  useOverflowListTarget,
  createSubModelElemPropsHook(useActionBarModel)(m => m.menu, useMenuTarget)
);

export const ActionBarOverflowButton = createSubcomponent('button')({
  displayName: 'ActionBar.OverflowButton',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarOverflowButton,
})<ActionBarOverflowButtonProps>((elemProps, Element) => {
  return (
    <SecondaryButton
      as={Element}
      icon={relatedActionsIcon}
      {...mergeStyles(elemProps, actionBarOverflowButtonStencil())}
    />
  );
});
