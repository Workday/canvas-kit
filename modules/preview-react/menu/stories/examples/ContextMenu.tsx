import * as React from 'react';

import {styled, CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {fonts} from '@workday/canvas-kit-react-fonts';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {
  Popup,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react/popup';

import {ContextMenuTarget} from './ContextMenuTarget';

const Container = styled('div')(...fonts, {
  ...type.levels.body.small,
});

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
      <Container>
        <Popup model={model}>
          <ContextMenuTarget style={{display: 'inline'}} tabIndex={0}>
            Right click on this text (Context menu target)
          </ContextMenuTarget>
          <Popup.Popper>
            <Menu onClose={model.events.hide}>
              <MenuItem>Back</MenuItem>
              <MenuItem>Forward</MenuItem>fd
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
      </Container>
    </CanvasProvider>
  );
};
