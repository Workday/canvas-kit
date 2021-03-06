import {depth as depthStyles} from '@workday/canvas-kit-react-core';

// TODO: Export this from core lib
export type Depth = keyof typeof depthStyles;

export interface DepthProps {
  depth?: Depth;
}

export const depthProps = {
  depth: (value: Depth) => {
    return depthStyles[value];
  },
};

export function depth<P extends DepthProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in depthProps) {
      const value = props[key as keyof DepthProps] as Depth;
      const styleFn = depthProps[key as keyof DepthProps];
      const style = styleFn(value);
      styles = {...styles, ...style};
    }
  }

  return styles;
}
