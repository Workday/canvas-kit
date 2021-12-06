import * as React from 'react';
import uuid from 'uuid/v4';

export const generateUniqueId = () => uuid().replace(/^[0-9]*/gi, '');

/**
 * Generate a unique ID if one is not provided. The generated ID will be stable across renders
 * @param id Optional ID provided that will be used instead of a unique ID
 */
export const useUniqueId = (id?: string) => {
  // https://codesandbox.io/s/react-functional-component-ids-p2ndq
  const [generatedId] = React.useState(generateUniqueId);
  return id || generatedId;
};

/**
 * Backwards-compatible change to converting to hook
 * @deprecated
 * TODO: Remove in major release
 */
export const uniqueId = useUniqueId;
