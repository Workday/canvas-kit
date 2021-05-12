/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react-common';
import {
  Popper,
  Popup,
  usePopup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
} from '@workday/canvas-kit-react-popup';

import README from '../README.md';

export default {
  title: 'Components/Popups/Popup/React',
  component: Popup,
  decorators: [withReadme(README)],
};

export const Default = () => {
  const {targetProps, closePopup, popperProps, stackRef} = usePopup();

  useCloseOnOutsideClick(stackRef, closePopup);
  useCloseOnEscape(stackRef, closePopup);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Popper placement={'bottom'} {...popperProps}>
        <Popup
          width={400}
          heading={'Delete Item'}
          padding={Popup.Padding.s}
          handleClose={closePopup}
        >
          <div style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </div>

          <DeleteButton style={{marginRight: '16px'}} onClick={closePopup}>
            Delete
          </DeleteButton>
          <Button onClick={closePopup}>Cancel</Button>
        </Popup>
      </Popper>
    </div>
  );
};

export const Open = () => {
  return (
    <Popup width={400} heading={'Delete Item'} padding={Popup.Padding.s} handleClose={() => null}>
      <div style={{marginBottom: '24px'}}>
        Are you sure you'd like to delete the item titled 'My Item'?
      </div>

      <DeleteButton style={{marginRight: '16px'}} onClick={() => null}>
        Delete
      </DeleteButton>
      <Button onClick={() => null}>Cancel</Button>
    </Popup>
  );
};

export const RTL = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Popup width={400} heading="למחוק פריט" padding={Popup.Padding.s} handleClose={() => null}>
        <div style={{marginBottom: '24px'}}>האם ברצונך למחוק פריט זה</div>

        <DeleteButton style={{marginLeft: '16px'}} onClick={() => null}>
          לִמְחוֹק
        </DeleteButton>
        <Button onClick={() => null}>לְבַטֵל</Button>
      </Popup>
    </CanvasProvider>
  );
};

const isElementNativelyFocusable = (element: HTMLElement) => {
  const nodeName = element.nodeName.toLowerCase();
  const validInput = nodeName === 'input' && (element as HTMLInputElement).type !== 'hidden';
  const validAnchor = nodeName === 'a' && element.hasAttribute('href');
  const validAudioVideo = ['audio', 'video'].includes(nodeName) && element.hasAttribute('controls');
  const validImgObject = ['img', 'object'].includes(nodeName) && element.hasAttribute('usemap');
  const validNativelyFocusable = [
    'button',
    'details',
    'embed',
    'iframe',
    'select',
    'textarea',
  ].includes(nodeName);

  return validInput || validAnchor || validAudioVideo || validImgObject || validNativelyFocusable;
};

const getFirstFocusableElement = (content: HTMLElement): HTMLElement | null => {
  const elements = content.querySelectorAll('*');

  for (let i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    if (element && isElementNativelyFocusable(element as HTMLElement)) {
      return element as HTMLElement;
    }
  }

  console.log(
    'No focusable element was found. Please ensure popup has at least one focusable element'
  );
  return null;
};

const useInitialFocus = (
  popupRef: React.RefObject<HTMLElement>,
  popupOpen: boolean = false,
  initialFocusRef?: React.RefObject<HTMLElement>
) => {
  React.useLayoutEffect(() => {
    if (popupOpen && popupRef.current) {
      if (initialFocusRef.current) {
        initialFocusRef.current.focus();
      } else {
        const elem = getFirstFocusableElement(popupRef.current);
        if (elem) {
          elem.focus();
        }
      }
    }
  }, [popupRef, popupOpen, initialFocusRef]);
};

const useReturnFocus = (
  popupRef: React.RefObject<HTMLElement>,
  popupOpen: boolean = false,
  returnFocusRef: React.RefObject<HTMLElement>
) => {
  React.useLayoutEffect(() => {
    if (!popupOpen && popupRef.current && returnFocusRef.current) {
      returnFocusRef.current.focus();
    }
  }, [popupRef, popupOpen, returnFocusRef]);
};

/**
 * Most accessible popups come with these expectations:
 * 1. Close on ESCAPE key
 * 2. When the popup first opens, initial focus lands on the first focusable element in the popup.
 * 3. When the popup closes, focus should land on a specified element. Usually, this is the popup's
 *    target element, but this return focus element can be a different element from the target
 *    element.
 *
 * (with the exception of dropdowns and tooltips, which have their own set of expectations)
 * @param popupRef the popup ref
 * @param popupOpen whether the popup is open or not
 * @param onClose the handler to execute when the popup closes
 * @param returnFocusRef the element that should receive focus when the popup closes
 */
const useAccessiblePopupBehaviors = (
  popupRef: React.RefObject<HTMLElement>,
  popupOpen: boolean,
  onClose: () => void,
  returnFocusRef: React.RefObject<HTMLElement>
) => {
  useCloseOnEscape(popupRef, onClose);

  useInitialFocus(popupRef, popupOpen);

  useReturnFocus(popupRef, popupOpen, returnFocusRef);
};

export const AccessiblePopupWithFocusTrapping = () => {
  const {targetProps, closePopup, popperProps, stackRef} = usePopup();

  const deleteButtonRef = React.useRef(null);
  useCloseOnOutsideClick(stackRef, closePopup);
  useAccessiblePopupBehaviors(stackRef, popperProps.open, closePopup, deleteButtonRef);
  useFocusTrap(stackRef);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <DeleteButton {...targetProps} buttonRef={deleteButtonRef}>
        Delete Item
      </DeleteButton>
      <Popper placement={'bottom'} {...popperProps}>
        <Popup
          width={400}
          heading={'Delete Item'}
          padding={Popup.Padding.s}
          handleClose={closePopup}
        >
          <div style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </div>

          <DeleteButton style={{marginRight: '16px'}} onClick={closePopup}>
            Delete
          </DeleteButton>
          <Button onClick={closePopup}>Cancel</Button>
        </Popup>
      </Popper>
    </div>
  );
};
