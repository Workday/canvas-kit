import * as React from 'react';

import {createComponent, useModelContext, createHook} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';

import {PopupModel} from './usePopupModel';
import {PopupModelContext} from './Popup';

export interface PopupHeadingProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

export const usePopupHeading = createHook(({state}: PopupModel) => {
  return {
    id: state.id,
  };
});

export const PopupHeading = createComponent('h2')({
  displayName: 'Popup.Heading',
  Component: ({children, model, ...elemProps}: PopupHeadingProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupHeading(localModel, elemProps);
    return (
      <Card.Heading as={Element} ref={ref} {...props}>
        {children}
      </Card.Heading>
    );
  },
});
