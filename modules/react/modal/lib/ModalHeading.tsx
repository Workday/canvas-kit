import * as React from 'react';

import {createComponent, useModelContext, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup, PopupModelContext} from '@workday/canvas-kit-react/popup';

import {useModalHeading} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading> {}

export const ModalHeading = createComponent('h2')({
  displayName: 'Modal.Heading',
  Component: ({children, model, ...elemProps}: ModalHeadingProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = useModalHeading(localModel, elemProps, ref);
    return (
      <Popup.Heading as={Element} {...props}>
        {children}
      </Popup.Heading>
    );
  },
});
