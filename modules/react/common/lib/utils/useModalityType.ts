import React from 'react';

type Modality = 'mouse' | 'touch' | 'pen';

// Use this shared global value to reduce calls to localStorage which is a synchronous API to a
// drive which could be slow (spinning disks could be hundreds of ms). We read only once this way.
// The following initialization is very difficult to test via automation. Don't mess with it unless
// you plan to manually test.
//
// 1. Initialize modality to localStorage
//   a. if localStorage isn't primed, use clientWidth of the browsers
//   b. if < 768, default to 'touch'
//   c. else default to 'mouse'
let localStorageValue =
  ((localStorage && localStorage.getItem('modality')) as Modality) ||
  (document && document.documentElement.clientWidth < 768 && 'touch') ||
  'mouse';

// Update the `localStorageValue`, but conditionally update localStorage only if the value has
// changed. This prevents too many calls to `localStorage` which can be costly on spinning disk
// drives
const updateLocalStorage = (value: Modality) => {
  if (localStorageValue !== value) {
    localStorage.setItem('modality', value);
  }
  localStorageValue = value;
};

/**
 * Uses heuristics to determine if the user is on a touch device, uses a pen, or a mouse. This hook
 * is useful if you have styles or behaviors that depend on the user's interaction type. For
 * example, touch users can scroll horizontally easier than mouse users, so horizontal overflow
 * might be more desired than overflow menus on touch devices. For devices that support multiple
 * input types, the last used input type is saved. For these devices, consider the possibility this
 * value could change after your component is rendered, so make sure you component rerenders
 * properly in this case.
 *
 * Uses `PointerEvent.pointerType` to determine last used input.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
 */
export const useModalityType = (): Modality => {
  const [modality, setModality] = React.useState(localStorageValue);

  React.useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const value = event.pointerType as Modality;
      setModality(value);
      updateLocalStorage(value);
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return modality;
};
