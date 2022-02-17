import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {PropertyPosition, PropertyZIndex} from './types';

export type PositionStyleProps = {
  /** sets `position` property  */
  position?: PropertyPosition;
  /** sets `zIndex` property  */
  zIndex?: PropertyZIndex;
  /** sets `top` property  */
  top?: number | string;
  /** sets `right` property (no bidirectional support) */
  right?: number | string;
  /** sets `bottom` property  */
  bottom?: number | string;
  /** sets `left` property (no bidirectional support)  */
  left?: number | string;
  /** sets `left` property (bidirectional support)  */
  insetInlineStart?: number | string;
  /** sets `right` property (bidirectional support) */
  insetInlineEnd?: number | string;
};

const insetInlineStart = (value?: number | string, isRTL = false) => {
  const key = isRTL ? 'right' : 'left';
  return {[key]: value};
};

const insetInlineEnd = (value?: number | string, isRTL = false) => {
  const key = isRTL ? 'left' : 'right';
  return {[key]: value};
};

export const positionFns = {
  position: (value?: PropertyPosition) => ({position: value}),
  zIndex: (value?: PropertyZIndex) => ({zIndex: value}),
  top: (value?: number | string) => ({top: value}),
  right: (value?: number | string) => ({right: value}),
  bottom: (value?: number | string) => ({bottom: value}),
  left: (value?: number | string) => ({left: value}),
  insetInlineStart: (value?: number | string, isRTL = false) => {
    const key = isRTL ? 'right' : 'left';
    return {[key]: value};
  },
  insetInlineEnd: (value?: number | string, isRTL = false) => {
    const key = isRTL ? 'left' : 'right';
    return {[key]: value};
  },
};

export function getPositionStyles<P extends PositionStyleProps>(
  styleProps: P,
  key: keyof PositionStyleProps,
  isRTL = false
) {
  const value = styleProps[key as keyof PositionStyleProps];
  if (key === 'insetInlineStart') {
    return insetInlineStart(value, isRTL);
  }
  if (key === 'insetInlineEnd') {
    return insetInlineEnd(value, isRTL);
  }
  return {[key]: value};
}

/**
 * A style prop function that takes components props and returns position styles.
 * If no `PositionProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `position` with low-level, styled components
 * const BoxExample = () => (
 *   <Box position="absolute" top="50%">
 *     Hello, positions!
 *   </Box>
 * );
 *
 */
export function position<P extends PositionStyleProps & {theme: PartialEmotionCanvasTheme}>(
  props: P
) {
  const isRTL = props.theme.canvas?.direction === 'rtl';
  let styles = {};

  for (const key in props) {
    if (props.hasOwnProperty(key) && positionFns.hasOwnProperty(key)) {
      const style = getPositionStyles(props, key as keyof PositionStyleProps, isRTL);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
