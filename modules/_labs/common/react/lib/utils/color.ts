import {colors, CanvasColor} from '@workday/canvas-kit-react-core';

export interface ColorProps {
  color?: CanvasColor;
  backgroundColor?: CanvasColor;
}

export const colorKeys = {
  backgroundColor: 'backgroundColor',
  color: 'color',
};

export function color<P extends ColorProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in colorKeys) {
      const attr = colorKeys[key as keyof ColorProps];
      const colorName = props[key as keyof ColorProps] as CanvasColor;
      const value = colors[colorName];
      styles = {...styles, [attr]: value};
    }
  }

  return styles;
}
