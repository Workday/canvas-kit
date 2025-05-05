import {Interpolation} from '@emotion/react';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';

/**
 * A utility to hide the default canvas style focus ring when using mouse input.
 * Requires wrapping your components in an InputProvider component.
 * @deprecated `hideMouseFocus` is deprecated and will be removed in a future major version. Please use [`focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) when applying focus styles to elements.
 */
export const hideMouseFocus: CSSProperties = {
  [`[data-whatinput="mouse"] &:focus,
    [data-whatinput="touch"] &:focus,
    [data-whatinput="pointer"] &:focus`]: {
    outline: 'none',
    boxShadow: 'none',
    animation: 'none',
  },
};

/**
 * A utility that simplifies focus selectors since you can't use nested syntax for some reason. Example:
 * [`[data-whatinput="mouse"],
     [data-whatinput="touch"],
     [data-whatinput="pointer"]: {
       '& .my-selector': {
          ...
       }
   },
 * @deprecated `mouseFocusBehavior` is deprecated and will be removed in a future major version. Please use [`focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) when applying focus styles to elements.
 */
export const mouseFocusBehavior = (
  selectors: Record<string, Interpolation<any>>
): Record<string, Interpolation<any>> => {
  const output: Record<string, Interpolation<any>> = {};

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
