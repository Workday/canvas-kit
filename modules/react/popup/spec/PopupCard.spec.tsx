import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import React from 'react';

import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Card', () => {
  verifyComponent(Popup.Card, {modelFn: usePopupModel});

  it('should have a role of "dialog"', () => {
    render(<Popup.Card />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

describe('Popup.Card Accessibility', () => {
  describe('Popup.Card accessible name', () => {
    it('should have a valid accessible name via aria-labelledby pointing to an element', async () => {
      const {getByRole, getByText} = render(
        <Popup>
          <Popup.Target>Open</Popup.Target>
          <Popup.Popper>
            <Popup.Card>
              <Popup.Heading>Popup Title</Popup.Heading>
              <Popup.Body>Content goes here</Popup.Body>
              <Popup.CloseButton>Close</Popup.CloseButton>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
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
      expect(labelElement?.textContent).toBe('Popup Title');
    });

    it('should have a valid accessible name when aria-labelledby references an element with text', async () => {
      const {getByRole, getByText} = render(
        <Popup>
          <Popup.Target>Open</Popup.Target>
          <Popup.Popper>
            <Popup.Card>
              <Popup.Heading>Information Popup</Popup.Heading>
              <Popup.Body>
                <p>This is popup content</p>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
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
        <Popup>
          <Popup.Target>Open</Popup.Target>
          <Popup.Popper>
            <Popup.Card aria-label="Help Information">
              <Popup.Body>Content without heading</Popup.Body>
              <Popup.CloseButton>Close</Popup.CloseButton>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      );

      fireEvent.click(getByText('Open'));

      await waitFor(() => {
        const dialogElement = getByRole('dialog', {name: 'Help Information'});
        expect(dialogElement).toBeInTheDocument();
      });
    });

    it('should have a non-empty accessible name (via labelledby or label)', async () => {
      const {getByRole, getByText} = render(
        <Popup>
          <Popup.Target>Open</Popup.Target>
          <Popup.Popper>
            <Popup.Card>
              <Popup.Heading>My Popup</Popup.Heading>
              <Popup.Body>Body content</Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
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
        fail('Popup should have either aria-labelledby or aria-label');
      }
    });
  });
});
