import {useConstant} from './useConstant';

// Create a unique seed per import to prevent collisions from other versions of `useUniqueId`
const seed = Math.random()
  .toString(36)
  .slice(2)
  .replace(/[0-9]*/, '')
  .substr(0, 4);
let c = 0;

export const generateUniqueId = () => seed + (c++).toString(36);

/**
 * Generate a unique ID if one is not provided. The generated ID will be stable across renders
 * @param id Optional ID provided that will be used instead of a unique ID
 */
export const useUniqueId = (id?: string) => {
  // https://codesandbox.io/s/react-functional-component-ids-p2ndq
  const generatedId = useConstant(generateUniqueId);
  return id || generatedId;
};

/**
 * Backwards-compatible change to converting to hook
 * @deprecated
 * TODO: Remove in major release
 */
export const uniqueId = useUniqueId;
