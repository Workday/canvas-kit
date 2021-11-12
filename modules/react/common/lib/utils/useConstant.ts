import {useRef} from 'react';

/**
 * Get a constant value in React, only running the callback function once.  `React.useMemo` does not
 * guarantee that a function will only be run once.
 *
 * @example
 * const value = useConstant(generateUniqueId)
 */
export function useConstant<T>(fn: () => T): T {
  const ref = useRef<T>();

  if (!ref.current) {
    ref.current = fn();
  }

  return ref.current;
}
