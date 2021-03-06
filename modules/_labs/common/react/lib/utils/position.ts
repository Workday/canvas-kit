import * as CSS from 'csstype';

export type PositionProps = {
  position?: CSS.PositionProperty;
  zIndex?: CSS.ZIndexProperty;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
};

export const positionKeys = {
  position: 'position',
  zIndex: 'zIndex',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

export function position<P extends PositionProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in positionKeys) {
      const attr = positionKeys[key as keyof PositionProps];
      const value = props[key];
      styles = {...styles, [attr]: value};
    }
  }
  return styles;
}
