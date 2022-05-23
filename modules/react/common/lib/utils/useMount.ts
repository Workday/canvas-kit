import React from 'react';

/**
 * Alias to `useEffect` with the intention to only run on mount/unmount.
 * Avoids the React lint errors and encodes intent.
 */
export const useMount = (callback: () => (() => void) | void) => {
  // we only want this to be called once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, []);
};

/**
 * Alias to `useLayoutEffect` with the intention to only run on mount/unmount
 * Avoids the React lint errors and encodes intent.
 */
export const useMountLayout = (callback: () => (() => void) | void) => {
  // we only want this to be called once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useLayoutEffect(callback, []);
};
