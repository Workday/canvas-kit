import * as React from 'react';

import {createComponent, useForkRef} from '@workday/canvas-kit-react/common';
import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';
import {
  Popup,
  PopupModelContext,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  useTransferOnFullscreenExit,
} from '@workday/canvas-kit-react/popup';

const ContextMenuTarget = createComponent('div')({
  displayName: 'Popup.ContextMenuTarget',
  Component: ({children, ...elemProps}, ref, Element) => {
    const model = React.useContext(PopupModelContext);
    const elementRef = useForkRef(ref, model.state.targetRef as any);

    const onContextMenu = (event: React.MouseEvent) => {
      if (model.state.visibility === 'visible') {
        model.events.hide(event);
      } else if (model.state.visibility === 'hidden') {
        model.events.show(event);
      }

      // Prevent the default context menu from showing to avoid double menus
      event.preventDefault();
    };

    return (
      <Element ref={elementRef} onContextMenu={onContextMenu} {...elemProps}>
        {children}
      </Element>
    );
  },
});

export const ContextMenu = () => {
  const model = usePopupModel();

  useAlwaysCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useTransferOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <ContextMenuTarget style={{display: 'inline'}} tabIndex={0}>
        Right click on this text (Context menu target)
      </ContextMenuTarget>
      <Popup.Popper>
        <DeprecatedMenu onClose={model.events.hide}>
          <DeprecatedMenuItem>Back</DeprecatedMenuItem>
          <DeprecatedMenuItem>Forward</DeprecatedMenuItem>
          <DeprecatedMenuItem>Reload</DeprecatedMenuItem>
          <DeprecatedMenuItem hasDivider>Bookmark Page</DeprecatedMenuItem>
          <DeprecatedMenuItem>Save Page As...</DeprecatedMenuItem>
          <DeprecatedMenuItem>Select All</DeprecatedMenuItem>
          <DeprecatedMenuItem hasDivider>Take Screenshot</DeprecatedMenuItem>
          <DeprecatedMenuItem hasDivider>View Page Source</DeprecatedMenuItem>
          <DeprecatedMenuItem>Inspect Accessibility Properties</DeprecatedMenuItem>
          <DeprecatedMenuItem>Inspect</DeprecatedMenuItem>
        </DeprecatedMenu>
      </Popup.Popper>
    </Popup>
  );
};
