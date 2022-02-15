import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {PropertyPosition, PropertyZIndex} from './types';

/** style props to for standard position properties */
export type PositionStandardProps = {
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
};

export type PositionLogicalProps = {
  /** sets `left` property (bidirectional support)  */
  insetInlineStart?: number | string;
  /** sets `right` property (bidirectional support) */
  insetInlineEnd?: number | string;
};

const getInsetInlineStartStyle = (value: number | string, isRTL = false) => {
  const attr = isRTL ? 'right' : 'left';
  return {[attr]: value};
};

const getInsetInlineEndStyle = (value: number | string, isRTL = false) => {
  const attr = isRTL ? 'left' : 'right';
  return {[attr]: value};
};

const standardPositionProps = {
  position: 'position',
  zIndex: 'zIndex',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const logicalPositionProps = {
  insetInlineStart: getInsetInlineStartStyle,
  insetInlineEnd: getInsetInlineEndStyle,
};

export type PositionStyleProps = PositionStandardProps & PositionLogicalProps;

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
export function position<P extends PositionStyleProps & {theme?: PartialEmotionCanvasTheme}>(
  props: P
) {
  // position will always be used within the context of a component, but eslint doesn't know that
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {canvas} = useTheme(props.theme);
  let styles = {};
  for (const key in props) {
    if (key in props) {
      if (key in standardPositionProps) {
        const value = props[key];
        const attr = standardPositionProps[key as keyof PositionStandardProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
        continue;
      }
      if (key in logicalPositionProps) {
        const value = props[key as keyof PositionLogicalProps] as string | number;
        const styleFn = logicalPositionProps[key as keyof PositionLogicalProps];
        const isRTL = canvas.direction === ContentDirection.RTL;
        const style = styleFn(value, isRTL);
        styles = {...styles, ...style};
      }
    }
  }
  return styles;
}
