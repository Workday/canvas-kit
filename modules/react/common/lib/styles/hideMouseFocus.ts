import {CSSObject, Interpolation} from '@emotion/core';

/**
 * A utility to hide the default canvas style focus ring when using mouse input.
 * Requires wrapping your components in an InputProvider component.
 */
export const hideMouseFocus: CSSObject = {
  [`[data-whatinput="mouse"] &:focus,
    [data-whatinput="touch"] &:focus,
    [data-whatinput="pointer"] &:focus`]: {
    outline: 'none',
    boxShadow: 'none',
    animation: 'none',
  },
};

/*
 * A utility that simplifies focus selectors since you can't use nested syntax for some reason. Example:
 * [`[data-whatinput="mouse"],
     [data-whatinput="touch"],
     [data-whatinput="pointer"]: {
       '& .my-selector': {
          ...
       }
   },
 */
export const mouseFocusBehavior = (
  selectors: Record<string, Interpolation>
): Record<string, Interpolation> => {
  const output: Record<string, Interpolation> = {};

  Object.keys(selectors).map((selector, index) => {
    selector.split(',').forEach(selectorPart => {
      const prefixedSelector = `
        [data-whatinput="mouse"] ${selectorPart},
        [data-whatinput="touch"] ${selectorPart},
        [data-whatinput="pointer"] ${selectorPart}`;
      output[prefixedSelector] = selectors[selector];
    });
  });

  return output;
};
