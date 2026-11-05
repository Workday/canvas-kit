import * as React from 'react';

import {Card, cardHeadingStencil} from '@workday/canvas-kit-react/card';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {usePopupHeading, usePopupModel} from './hooks';

export interface PopupHeadingProps extends ExtractProps<typeof Card.Heading, never> {
  children?: React.ReactNode;
}

export const popupHeadingStencil = createStencil({
  extends: cardHeadingStencil,
  base: {
    paddingInline: system.legacy.padding.xs,
  },
  defaultModifiers: {typeLevel: 'body.large'},
});

export const PopupHeading = createSubcomponent('h2')({
  displayName: 'Popup.Heading',
  modelHook: usePopupModel,
  elemPropsHook: usePopupHeading,
})<PopupHeadingProps>(({children, ...elemProps}, Element) => {
  return <Element {...mergeStyles(elemProps, popupHeadingStencil())}>{children}</Element>;
});
