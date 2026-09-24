import {fireEvent, render, waitFor} from '@testing-library/react';
import * as React from 'react';
import {renderToString} from 'react-dom/server';

import {Modal} from '../lib/Modal';
import {Basic} from '../stories/examples/Basic';

describe('Modal', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Basic />);

    expect(ssrRender).not.toThrow();
  });
});

describe('Modal Accessibility', () => {
  describe('Modal.Card accessible name', () => {
    it('should have a valid accessible name via aria-labelledby pointing to an element', async () => {
      const {getByRole, getByText} = render(
        <Modal>
          <Modal.Target>Open</Modal.Target>
          <Modal.Popper>
            <Modal.Card>
              <Modal.Heading>Modal Title</Modal.Heading>
              <Modal.Body>Content goes here</Modal.Body>
              <Modal.CloseButton>Close</Modal.CloseButton>
            </Modal.Card>
          </Modal.Popper>
        </Modal>
      );

      fireEvent.click(getByText('Open'));

      await waitFor(() => {
        const dialogElement = getByRole('dialog');
        expect(dialogElement).toBeInTheDocument();
      });

      const dialogElement = getByRole('dialog');
      const ariaLabelledby = dialogElement.getAttribute('aria-labelledby');

      // Verify aria-labelledby is set and not empty
      expect(ariaLabelledby).not.toBeNull();
      expect(ariaLabelledby).not.toBe('');

      // Verify aria-labelledby points to an actual element in the DOM
      const labelElement = document.getElementById(ariaLabelledby || '');
      expect(labelElement).toBeInTheDocument();

      // Verify the referenced element has text content (the accessible name)
      expect(labelElement?.textContent).toBe('Modal Title');
    });

    it('should have a valid accessible name when aria-labelledby references an element with text', async () => {
      const {getByRole, getByText} = render(
        <Modal>
          <Modal.Target>Open</Modal.Target>
          <Modal.Popper>
            <Modal.Card>
              <Modal.Heading>Critical Action Required</Modal.Heading>
              <Modal.Body>
                <p>This is a modal dialog</p>
              </Modal.Body>
            </Modal.Card>
          </Modal.Popper>
        </Modal>
      );

      fireEvent.click(getByText('Open'));

      await waitFor(() => {
        const dialogElement = getByRole('dialog');
        expect(dialogElement).toBeInTheDocument();
      });

      const dialogElement = getByRole('dialog');
      const ariaLabelledby = dialogElement.getAttribute('aria-labelledby');
      const labelElement = document.getElementById(ariaLabelledby || '');

      // The accessible name should have content
      expect(labelElement?.textContent).toBeTruthy();
      expect(labelElement?.textContent?.length).toBeGreaterThan(0);
    });

    it('should support aria-label as an alternative accessible name', async () => {
      const {getByRole, getByText} = render(
        <Modal>
          <Modal.Target>Open</Modal.Target>
          <Modal.Popper>
            <Modal.Card aria-label="Confirm Action">
              <Modal.Body>Are you sure?</Modal.Body>
              <Modal.CloseButton>Close</Modal.CloseButton>
            </Modal.Card>
          </Modal.Popper>
        </Modal>
      );

      fireEvent.click(getByText('Open'));

      await waitFor(() => {
        const dialogElement = getByRole('dialog', {name: 'Confirm Action'});
        expect(dialogElement).toBeInTheDocument();
      });
    });

    it('should have a non-empty accessible name (via labelledby or label)', async () => {
      const {getByRole, getByText} = render(
        <Modal>
          <Modal.Target>Open</Modal.Target>
          <Modal.Popper>
            <Modal.Card>
              <Modal.Heading>Modal Heading</Modal.Heading>
              <Modal.Body>Content</Modal.Body>
            </Modal.Card>
          </Modal.Popper>
        </Modal>
      );

      fireEvent.click(getByText('Open'));

      await waitFor(() => {
        const dialogElement = getByRole('dialog');
        expect(dialogElement).toBeInTheDocument();
      });

      const dialogElement = getByRole('dialog');
      const ariaLabelledby = dialogElement.getAttribute('aria-labelledby');
      const ariaLabel = dialogElement.getAttribute('aria-label');

      // Either aria-labelledby or aria-label should exist and have content
      if (ariaLabelledby) {
        const labelElement = document.getElementById(ariaLabelledby);
        expect(labelElement?.textContent).toBeTruthy();
      } else if (ariaLabel) {
        expect(ariaLabel).toBeTruthy();
      } else {
        // If neither exists, test should fail
        fail('Modal should have either aria-labelledby or aria-label');
      }
    });
  });
});
