import {useEffect} from 'react';

/**
 * This hook will add an event listener to the document and automatically remove it.
 * Document event listeners are useful for global event types like keyboard events
 * or drag-and-drop
 * @param event The event to listen to
 * @param eventHandler The event handler
 */
export const useDocumentListener = (
  event: string,
  eventHandler: EventListenerOrEventListenerObject
) => {
  useEffect(() => {
    document.addEventListener(event, eventHandler);
    return () => {
      document.removeEventListener(event, eventHandler);
    };
  }, [eventHandler]);
};
