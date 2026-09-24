import {render} from '@testing-library/react';
import React from 'react';

import {Dialog} from '../lib/Dialog';

describe('Dialog Accessibility', () => {
  describe('Dialog.Card accessible name', () => {
    it('should have a valid accessible name via aria-labelledby pointing to an element', () => {
      const {getByRole} = render(
        <Dialog>
          <Dialog.Target>Open</Dialog.Target>
          <Dialog.Popper>
            <Dialog.Card>
              <Dialog.Heading>Dialog Title</Dialog.Heading>
              <Dialog.Body>Content goes here</Dialog.Body>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      );

      const dialogElement = getByRole('dialog');
      const ariaLabelledby = dialogElement.getAttribute('aria-labelledby');

      // Verify aria-labelledby is set and not empty
      expect(ariaLabelledby).not.toBeNull();
      expect(ariaLabelledby).not.toBe('');

      // Verify aria-labelledby points to an actual element in the DOM
      const labelElement = document.getElementById(ariaLabelledby || '');
      expect(labelElement).toBeInTheDocument();

      // Verify the referenced element has text content (the accessible name)
      expect(labelElement?.textContent).toBe('Dialog Title');
    });

    it('should have a valid accessible name when aria-labelledby references an element with text', () => {
      const {getByRole} = render(
        <Dialog>
          <Dialog.Target>Open</Dialog.Target>
          <Dialog.Popper>
            <Dialog.Card>
              <Dialog.Heading>Important Dialog</Dialog.Heading>
              <Dialog.Body>
                <p>This is the dialog content</p>
              </Dialog.Body>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      );

      const dialogElement = getByRole('dialog');
      const ariaLabelledby = dialogElement.getAttribute('aria-labelledby');
      const labelElement = document.getElementById(ariaLabelledby || '');

      // The accessible name should match the heading text
      expect(labelElement?.textContent).toBeTruthy();
      expect(labelElement?.textContent?.length).toBeGreaterThan(0);
    });

    it('should support aria-label as an alternative accessible name', () => {
      const {getByRole} = render(
        <Dialog>
          <Dialog.Target>Open</Dialog.Target>
          <Dialog.Popper>
            <Dialog.Card aria-label="Custom Dialog Name">
              <Dialog.Body>Content without heading</Dialog.Body>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      );

      // Should be findable by its aria-label
      const dialogElement = getByRole('dialog', {name: 'Custom Dialog Name'});
      expect(dialogElement).toBeInTheDocument();
    });

    it('should have a non-empty accessible name (via labelledby or label)', () => {
      const {getByRole} = render(
        <Dialog>
          <Dialog.Target>Open</Dialog.Target>
          <Dialog.Popper>
            <Dialog.Card>
              <Dialog.Heading>My Dialog</Dialog.Heading>
              <Dialog.Body>Body content</Dialog.Body>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      );

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
        fail('Dialog should have either aria-labelledby or aria-label');
      }
    });
  });
});
