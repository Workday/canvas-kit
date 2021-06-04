import * as React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';

import {usePopupHeading, PopupModel, PopupModelContext} from './hooks';

export interface PopupHeadingProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

export const PopupHeading = createComponent('h2')({
  displayName: 'Popup.Heading',
  Component: ({children, model, ...elemProps}: PopupHeadingProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupHeading(localModel, elemProps, ref);
    return (
      <Card.Heading as={Element} {...props}>
        {children}
      </Card.Heading>
    );
  },
});
