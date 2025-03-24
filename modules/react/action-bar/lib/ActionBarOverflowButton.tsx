import * as React from 'react';

import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  createSubcomponent,
  createSubModelElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';

import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useActionBarModel} from './useActionBarModel';
import {SecondaryButton, SecondaryButtonProps} from '@workday/canvas-kit-react/button';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';

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
      {...handleCsProp(elemProps, actionBarOverflowButtonStencil())}
    />
  );
});
