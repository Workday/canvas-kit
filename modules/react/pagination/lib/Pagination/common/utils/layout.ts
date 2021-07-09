type Globals = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
type OverflowProperty = Globals | 'auto' | 'hidden' | 'scroll' | 'visible' | string;
type OverflowXProperty =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'auto'
  | 'hidden'
  | 'scroll'
  | 'visible';
type OverflowYProperty = OverflowXProperty;
export interface LayoutProps {
  display?: string;
  height?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: OverflowProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  verticalAlign?: string;
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
  verticalAlign: 'verticalAlign',
  width: 'width',
};
