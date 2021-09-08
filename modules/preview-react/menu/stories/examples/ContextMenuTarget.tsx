import React from 'react';

import {createComponent, useForkRef} from '@workday/canvas-kit-react/common';
import {PopupModelContext} from '@workday/canvas-kit-react/popup';

interface ContextMenuTargetProps {
  children: React.ReactNode;
}

export const ContextMenuTarget = createComponent('div')({
  displayName: 'Popup.ContextMenuTarget',
  Component: ({children, ...elemProps}: ContextMenuTargetProps, ref, Element) => {
    const model = React.useContext(PopupModelContext);
    const elementRef = useForkRef(ref, model.state.targetRef as any);

    const onContextMenu = (event: React.MouseEvent) => {
      if (model.state.visibility === 'visible') {
        model.events.hide({event});
      } else if (model.state.visibility === 'hidden') {
        model.events.show({event});
      }

      // prevent the default context menu from showing to avoid double menus
      event.preventDefault();
    };

    return (
      <Element ref={elementRef} onContextMenu={onContextMenu} {...elemProps}>
        {children}
      </Element>
    );
  },
});
