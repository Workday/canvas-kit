import {Property} from 'csstype';
import {
  borderRadius as borderRadiusTokens,
  CanvasBorderRadiusTokens,
  colors as colorTokens,
  CanvasColor,
} from '@workday/canvas-kit-react/tokens';
import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

/** style props to set the border properties */
export type BorderShorthandProps = {
  /** sets `border` property */
  border?: string;
  /** sets `border-top` property */
  borderTop?: string;
  /** sets `border-right` property (no bidirectional support) */
  borderRight?: string;
  /** sets `border-bottom` property */
  borderBottom?: string;
  /** sets `border-left` property (no bidirectional support) */
  borderLeft?: string;
};

/** style props to set the border color properties */
export type BorderColorProps = {
  /** sets `border-color` property */
  borderColor?: CanvasColor | (string & {});
  /** sets `border-top-color` property */
  borderTopColor?: CanvasColor | (string & {});
  /** sets `border-right-color` property (no bidirectional support) */
  borderRightColor?: CanvasColor | (string & {});
  /** sets `border-bottom-color` property */
  borderBottomColor?: CanvasColor | (string & {});
  /** sets `border-left-color` property (no bidirectional support) */
  borderLeftColor?: CanvasColor | (string & {});
};

/** style props to set the border radius properties */
export type BorderRadiusProps = {
  /** sets `border-radius` property */
  borderRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets `border-top-left-radius` property */
  borderTopLeftRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets `border-top-right-radius` property */
  borderTopRightRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets `border-bottom-left-radius` property */
  borderBottomLeftRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets `border-bottom-right-radius` property */
  borderBottomRightRadius?: CanvasBorderRadiusTokens | number | (string & {});
};

/** style props to set the border style properties */
export type BorderStyleProps = {
  /** sets `border-style` property */
  borderStyle?: Property.BorderStyle;
  /** sets `border-top-style` property */
  borderTopStyle?: Property.BorderStyle;
  /** sets `border-right-style` property (no bidirectional support) */
  borderRightStyle?: Property.BorderStyle;
  /** sets `border-bottom-style` property */
  borderBottomStyle?: Property.BorderStyle;
  /** sets `border-left-style` property (no bidirectional support) */
  borderLeftStyle?: Property.BorderStyle;
};

/** style props to set the border width properties */
export type BorderWidthProps = {
  /** sets `border-width` property */
  borderWidth?: string | number;
  /** sets `border-top-width` property */
  borderTopWidth?: string | number;
  /** sets `border-right-width` property (no bidirectional support) */
  borderRightWidth?: string | number;
  /** sets `border-bottom-width` property */
  borderBottomWidth?: string | number;
  /** sets `border-left-width` property (no bidirectional support) */
  borderLeftWidth?: string | number;
};

export type BorderLogicalProps = {
  /** sets `border-left` property (bidirectional support) */
  borderInlineStart?: string;
  /** sets `border-left-color` property (bidirectional support) */
  borderInlineStartColor?: CanvasColor | (string & {});
  /** sets `border-left-style` property (bidirectional support) */
  borderInlineStartStyle?: Property.BorderStyle;
  /** sets `border-left-width` property (bidirectional support) */
  borderInlineStartWidth?: string | number;
  /** sets `border-right` property (bidirectional support) */
  borderInlineEnd?: string;
  /** sets `border-right-color` property (bidirectional support) */
  borderInlineEndColor?: CanvasColor | (string & {});
  /** sets `border-right-style` property (bidirectional support) */
  borderInlineEndStyle?: Property.BorderStyle;
  /** sets `border-right-width` property (bidirectional support) */
  borderInlineEndWidth?: string | number;
};

/** a collection style props for border properties */
export type BorderProps = BorderShorthandProps &
  BorderColorProps &
  BorderRadiusProps &
  BorderStyleProps &
  BorderWidthProps &
  BorderLogicalProps;

// border logical prop handlers
const borderInlineStart = (isRTL: boolean) => (isRTL ? 'borderRight' : 'borderLeft');
const borderInlineEnd = (isRTL: boolean) => (isRTL ? 'borderLeft' : 'borderRight');
const borderInlineStartColor = (isRTL: boolean) => (isRTL ? 'borderRightColor' : 'borderLeftColor');
const borderInlineEndColor = (isRTL: boolean) => (isRTL ? 'borderLeftColor' : 'borderRightColor');
const borderInlineStartStyle = (isRTL: boolean) => (isRTL ? 'borderRightStyle' : 'borderLeftStyle');
const borderInlineEndStyle = (isRTL: boolean) => (isRTL ? 'borderLeftStyle' : 'borderRightStyle');
const borderInlineStartWidth = (isRTL: boolean) => (isRTL ? 'borderRightWidth' : 'borderLeftWidth');
const borderInlineEndWidth = (isRTL: boolean) => (isRTL ? 'borderLeftWidth' : 'borderRightWidth');

const borderShorthandProps = {
  border: 'border',
  borderTop: 'borderTop',
  borderRight: 'borderRight',
  borderBottom: 'borderBottom',
  borderLeft: 'borderLeft',
  borderInlineStart,
  borderInlineEnd,
};

const borderColors = {
  borderColor: 'borderColor',
  borderTopColor: 'borderTopColor',
  borderRightColor: 'borderRightColor',
  borderBottomColor: 'borderBottomColor',
  borderLeftColor: 'borderLeftColor',
  borderInlineStartColor,
  borderInlineEndColor,
};

const borderRadii = {
  borderRadius: 'borderRadius',
  borderTopLeftRadius: 'borderTopLeftRadius',
  borderTopRightRadius: 'borderTopRightRadius',
  borderBottomLeftRadius: 'borderBottomLeftRadius',
  borderBottomRightRadius: 'borderBottomRightRadius',
};

const borderStyles = {
  borderStyle: 'borderStyle',
  borderTopStyle: 'borderTopStyle',
  borderRightStyle: 'borderRightStyle',
  borderBottomStyle: 'borderBottomStyle',
  borderLeftStyle: 'borderLeftStyle',
  borderInlineStartStyle,
  borderInlineEndStyle,
};

const borderWidths = {
  borderWidth: 'borderWidth',
  borderTopWidth: 'borderTopWidth',
  borderRightWidth: 'borderRightWidth',
  borderBottomWidth: 'borderBottomWidth',
  borderLeftWidth: 'borderLeftWidth',
  borderInlineStartWidth,
  borderInlineEndWidth,
};

/**
 * A style prop function that takes components props and returns border styles. Some props, such as borderRadius and borderColor, are connected to our design tokens.
 * If no `BorderProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `border` with low-level, styled components
 * const BoxExample = () => (
 *   <Box border={`solid 1px #333333 ${colors.blackPepper400}`}>Hello, border styles!</Box>
 * );
 *
 */
export function border<P extends BorderProps & {theme?: PartialEmotionCanvasTheme}>(props: P) {
  // border will always be used within the context of a component, but eslint doesn't know that
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {canvas} = useTheme(props.theme);
  const isRTL = canvas.direction === ContentDirection.RTL;
  const styles = {};
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (key in borderShorthandProps) {
        const value = props[key as keyof BorderShorthandProps];
        let attr: string;
        if (key === 'borderInlineStart') {
          attr = borderInlineStart(isRTL);
        } else if (key === 'borderInlineEnd') {
          attr = borderInlineEnd(isRTL);
        } else {
          attr = borderShorthandProps[key as keyof BorderShorthandProps];
        }
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderColors) {
        const propValue = props[key as keyof BorderColorProps] as CanvasColor | string;
        const value = colorTokens[propValue as CanvasColor] || propValue;
        let attr: string;
        if (key === 'borderInlineStartColor') {
          attr = borderInlineStartColor(isRTL);
        } else if (key === 'borderInlineEndColor') {
          attr = borderInlineEndColor(isRTL);
        } else {
          attr = borderColors[key as keyof BorderColorProps];
        }
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderRadii) {
        const propValue = props[key as keyof BorderRadiusProps] as
          | CanvasBorderRadiusTokens
          | number
          | string;
        const value = borderRadiusTokens[propValue as CanvasBorderRadiusTokens] || propValue;
        const attr = borderRadii[key as keyof BorderRadiusProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderStyles) {
        const value = props[key as keyof BorderStyleProps];
        let attr: string;
        if (key === 'borderInlineStartStyle') {
          attr = borderInlineStartStyle(isRTL);
        } else if (key === 'borderInlineEndStyle') {
          attr = borderInlineEndStyle(isRTL);
        } else {
          attr = borderStyles[key as keyof BorderStyleProps];
        }
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderWidths) {
        const value = props[key as keyof BorderWidthProps];
        let attr: string;
        if (key === 'borderInlineStartWidth') {
          attr = borderInlineStartWidth(isRTL);
        } else if (key === 'borderInlineEndWidth') {
          attr = borderInlineEndWidth(isRTL);
        } else {
          attr = borderWidths[key as keyof BorderWidthProps];
        }
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
    }
  }
  return styles;
}
