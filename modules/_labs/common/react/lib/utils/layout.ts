import * as CSS from 'csstype';

export type LayoutProps = {
  display?: CSS.DisplayProperty;
  height?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: CSS.OverflowProperty;
  overflowX?: CSS.OverflowXProperty;
  overflowY?: CSS.OverflowYProperty;
  verticalAlign?: string;
  width?: number | string;
};

export const layoutKeys: Record<string, string> = {
  display: 'display',
  height: 'height',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  overflow: 'overflow',
  overflowX: 'overflowX',
  overflowY: 'overflowY',
  verticalAlign: 'verticalAlign',
  width: 'width',
};

export function layout<P extends LayoutProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in layoutKeys) {
      const attr = layoutKeys[key as keyof LayoutProps];
      const value = props[key];
      styles = {...styles, [attr]: value};
    }
  }
  return styles;
}
