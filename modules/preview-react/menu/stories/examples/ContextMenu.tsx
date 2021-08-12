import * as React from 'react';

import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {
  Popup,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react/popup';

import {ContextMenuTarget} from './ContextMenuTarget';

export const ContextMenu = () => {
  const canvasTheme = {
    canvas: {
      direction: ContentDirection.LTR,
    },
  };

  const model = usePopupModel();

  useAlwaysCloseOnOutsideClick(model);
  useCloseOnEscape(model);

  return (
    <CanvasProvider theme={canvasTheme}>
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
    </CanvasProvider>
  );
};
