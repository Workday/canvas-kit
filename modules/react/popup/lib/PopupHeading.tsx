import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';

import {usePopupHeading, usePopupModel} from './hooks';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '../../layout';

export interface PopupHeadingProps extends ExtractProps<typeof Card.Heading, never> {
  children?: React.ReactNode;
}

export const popupHeadingStencil = createStencil({
  base: {
    padding: system.space.x2,
  },
});

export const PopupHeading = createSubcomponent('h2')({
  displayName: 'Popup.Heading',
  modelHook: usePopupModel,
  elemPropsHook: usePopupHeading,
})<PopupHeadingProps>(({children, ...elemProps}, Element) => {
  return (
    <Card.Heading as={Element} {...mergeStyles(elemProps, popupHeadingStencil())}>
      {children}
    </Card.Heading>
  );
});
