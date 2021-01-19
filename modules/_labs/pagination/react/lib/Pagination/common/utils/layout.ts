import CSS from 'csstype';

export interface LayoutProps {
  display?: CSS.DisplayProperty;
  height?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: CSS.OverflowYProperty;
  overflowX?: CSS.OverflowYProperty;
  overflowY?: CSS.OverflowYProperty;
  size?: number | string;
  verticalAlign?: CSS.VerticalAlignProperty<string>;
  width?: number | string;
}

export const layout = {
  display: 'display',
  height: 'height',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  overflow: 'overflow',
  overflowX: 'overflowX',
  overflowY: 'overflowY',
  size: 'size',
  verticalAlign: 'verticalAlign',
  width: 'width',
};
