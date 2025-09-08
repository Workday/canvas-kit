import React from 'react';
import {useConstant} from './useConstant';

// Create a unique seed per import to prevent collisions from other versions of `useUniqueId`
let seed = Math.random()
  .toString(36)
  .slice(2)
  .replace(/[0-9]*/, '')
  .substr(0, 4);

let c = 0;

const hasStableId = typeof React.useId === 'function';

/**
 * Generates a unique and HTML5 compliant identifier every time it is called. Internally it uses a 4
 * character random seed starting with a letter. This seed is unique to each instance of this
 * package meaning different versions of Canvas Kit on the page will have a different seed. Each
 * call will use a Base 36 string (10 numbers + 26 letters) based on an incremented number. The
 * incremented number always starts at 0 and can be reset for testing purposes using
 * [resetUniqueIdCount](#resetuniqueidcount). [setUniqueSeed](#setuniqueseed) can also be used for
 * testing or server side rendering to get the same results during hydration.
 */
export const generateUniqueId = () => seed + (c++).toString(36);

/**
 * Generate a unique ID if one is not provided. The generated ID will be stable across renders. Uses
 * `React.useId()` if available.
 * @param id Optional ID provided that will be used instead of a unique ID
 */
export const useUniqueId = (id?: string) => {
  // https://codesandbox.io/s/react-functional-component-ids-p2ndq
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const generatedId = hasStableId ? React.useId() : useConstant(generateUniqueId);
  return id || generatedId;
};

/**
 * Backwards-compatible change to converting to hook
 * @deprecated ⚠️ `uniqueId` has been deprecated and will be removed in a future major version. Please use `useUniqueId` instead.
 */
export const uniqueId = useUniqueId;

/**
 * Update the seed used by the id generator. This is useful for snapshot tests to help stabilize ids
 * generated each run. This could also be used for server-side hydration - if you choose the same
 * seed for server and set that on the client before components are rendered, the ids generated will
 * be the same.
 * @example
 * // set in a script tag from the server
 * setSeed(window.__ID_SEED); // set in a script tag from the server
 *
 * // jest setup
 * before(() => {
 *   setSeed('a')
 * })
 */
export const setUniqueSeed = (s: string) => {
  seed = s;
};

/**
 * This should only be called for tests in an `beforeEach`
 */
export const resetUniqueIdCount = () => {
  c = 0;
};
