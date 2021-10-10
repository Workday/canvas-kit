import * as React from 'react';

import {createComponent, useForkRef} from '@workday/canvas-kit-react/common';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {
  Popup,
  PopupModelContext,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react/popup';

const ContextMenuTarget = createComponent('div')({
  displayName: 'Popup.ContextMenuTarget',
  Component: ({children, ...elemProps}, ref, Element) => {
    const model = React.useContext(PopupModelContext);
    const elementRef = useForkRef(ref, model.state.targetRef as any);

    const onContextMenu = (event: React.MouseEvent) => {
      if (model.state.visibility === 'visible') {
        model.events.hide({event});
      } else if (model.state.visibility === 'hidden') {
        model.events.show({event});
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

  return (
    <Popup model={model}>
      <ContextMenuTarget style={{display: 'inline'}} tabIndex={0}>
        Right click on this text (Context menu target)
      </ContextMenuTarget>
      <Popup.Popper>
        <Menu onClose={model.events.hide}>
          <MenuItem>Back</MenuItem>
          <MenuItem>Forward</MenuItem>
          <MenuItem>Reload</MenuItem>
          <MenuItem hasDivider>Bookmark Page</MenuItem>
          <MenuItem>Save Page As...</MenuItem>
          <MenuItem>Select All</MenuItem>
          <MenuItem hasDivider>Take Screenshot</MenuItem>
          <MenuItem hasDivider>View Page Source</MenuItem>
          <MenuItem>Inspect Accessibility Properties</MenuItem>
          <MenuItem>Inspect</MenuItem>
        </Menu>
      </Popup.Popper>
    </Popup>
  );
};
