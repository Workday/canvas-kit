import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';

import {usePopupHeading, usePopupModel} from './hooks';

export interface PopupHeadingProps extends ExtractProps<typeof Card.Heading, never> {
  children?: React.ReactNode;
}

export const PopupHeading = createSubcomponent('h2')({
  displayName: 'Popup.Heading',
  modelHook: usePopupModel,
  elemPropsHook: usePopupHeading,
})<PopupHeadingProps>(({children, ...elemProps}, Element) => {
  return (
    <Card.Heading
      as={Element}
      // marginInlineStart="l"
      // marginInlineEnd="l"
      // marginTop="l"
      marginBottom="xxs"
      padding="xxs"
      {...elemProps}
    >
      {children}
    </Card.Heading>
  );
});
