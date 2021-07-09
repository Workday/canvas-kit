/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {Basic} from '../stories/stories';

describe('Dialog', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Dialog>
          <Dialog.Target>Open Dialog</Dialog.Target>
          <Dialog.Popper>
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading>Dialog Heading</Dialog.Heading>
              <Dialog.Body>
                <p>Dialog Contents</p>
                <Dialog.CloseButton>Close</Dialog.CloseButton>
              </Dialog.Body>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      );
    expect(ssrRender).not.toThrow();
  });
});
