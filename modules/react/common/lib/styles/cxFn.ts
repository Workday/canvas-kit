/* eslint-disable guard-for-in */
import {ColorStyleProps} from '@workday/canvas-kit-labs-react/common';

export function cxFn<S extends CXStyleProps>(styles: S) {
  let cxStyles = {};

  for (const key in styles) {
    if (key in colorProps) {
      const value = styles[key as keyof ColorStyleProps];
      const styleFn = colorProps[key as keyof ColorStyleProps];
      const cxStyle = styleFn(value);
      cxStyles = {...cxStyles, ...cxStyle};
    }

    if (key in depthProps) {
      const value = styles[key as keyof DepthStyleProps];
      const styleFn = depthProps[key as keyof DepthStyleProps];
      const cxStyle = styleFn(value);
      cxStyles = {...cxStyles, ...cxStyle};
    }
  }

  return cxStyles;
}
