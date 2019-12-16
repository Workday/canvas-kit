import {CSSObject} from '@emotion/core';

/**
 * Allows the ability to force a state by a pseudo selector by changing the selector into a class creating a new styled object with the class names
 * @param shouldChangePseudoSelectors If true, it will replace pseudo selectors from the styled object and change them to classes
 * @param obj The styled object passed to the function to replace any pseudo selectors with a class name
 */

export const changeToStaticClass = (
  shouldChangePseudoSelectors = false,
  obj?: CSSObject
): CSSObject | undefined => {
  if (!shouldChangePseudoSelectors || !obj) {
    return obj;
  }

  return Object.keys(obj).reduce((result, key) => {
    const newKey = key
      .replace(/^:/, '&:')
      .replace(/:/g, '.')
      .replace(/\.not/g, ':not')
      .replace(/\.disabled/, ':disabled');
    const value =
      typeof obj[key] === 'object' ? changeToStaticClass(true, obj[key] as CSSObject) : obj[key];
    const newObj = {...result, [newKey]: value};
    return newObj;
  }, {});
};
