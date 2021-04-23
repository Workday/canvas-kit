import {Property} from 'csstype';
import {
  borderRadius as borderRadiusTokens,
  CanvasBorderRadiusTokens,
  colors as colorTokens,
  CanvasColor,
} from '@workday/canvas-kit-react/tokens';

/** style props to set the border properties */
export type BorderShorthandProps = {
  /** sets `border` property */
  border?: string;
  /** sets `border-top` property */
  borderTop?: string;
  /** sets `border-right` property */
  borderRight?: string;
  /** sets `border-bottom` property */
  borderBottom?: string;
  /** sets `border-left` property */
  borderLeft?: string;
};

/** style props to set the border color properties */
export type BorderColorProps = {
  /** sets `border-color` property */
  borderColor?: CanvasColor | (string & {});
  /** sets `border-top-color` property */
  borderTopColor?: CanvasColor | (string & {});
  /** sets `border-right-color` property */
  borderRightColor?: CanvasColor | (string & {});
  /** sets `border-bottom-color` property */
  borderBottomColor?: CanvasColor | (string & {});
  /** sets `border-left-color` property */
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
  /** sets `border-right-style` property */
  borderRightStyle?: Property.BorderStyle;
  /** sets `border-bottom-style` property */
  borderBottomStyle?: Property.BorderStyle;
  /** sets `border-left-style` property */
  borderLeftStyle?: Property.BorderStyle;
};

/** style props to set the border width properties */
export type BorderWidthProps = {
  /** sets `border-width` property */
  borderWidth?: string | number;
  /** sets `border-top-width` property */
  borderTopWidth?: string | number;
  /** sets `border-right-width` property */
  borderRightWidth?: string | number;
  /** sets `border-bottom-width` property */
  borderBottomWidth?: string | number;
  /** sets `border-left-width` property */
  borderLeftWidth?: string | number;
};

/** a collection style props for border properties */
export type BorderProps = BorderShorthandProps &
  BorderColorProps &
  BorderRadiusProps &
  BorderStyleProps &
  BorderWidthProps;

const borderShorthandStyles = {
  border: 'border',
  borderTop: 'borderTop',
  borderRight: 'borderRight',
  borderBottom: 'borderBottom',
  borderLeft: 'borderLeft',
};

const borderColors = {
  borderColor: 'borderColor',
  borderTopColor: 'borderTopColor',
  borderRightColor: 'borderRightColor',
  borderBottomColor: 'borderBottomColor',
  borderLeftColor: 'borderLeftColor',
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
};

const borderWidths = {
  borderWidth: 'borderWidth',
  borderTopWidth: 'borderTopWidth',
  borderRightWidth: 'borderRightWidth',
  borderBottomWidth: 'borderBottomWidth',
  borderLeftWidth: 'borderLeftWidth',
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
export function border<P extends BorderProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (key in borderShorthandStyles) {
        const value = props[key as keyof BorderShorthandProps];
        const attr = borderShorthandStyles[key as keyof BorderShorthandProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
      if (key in borderColors) {
        const propValue = props[key as keyof BorderColorProps] as CanvasColor | string;
        const value = colorTokens[propValue as CanvasColor] || propValue;
        const attr = borderColors[key as keyof BorderColorProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
      if (key in borderRadii) {
        const propValue = props[key as keyof BorderRadiusProps] as
          | CanvasBorderRadiusTokens
          | string
          | number;
        const value = borderRadiusTokens[propValue as CanvasBorderRadiusTokens] || propValue;
        const attr = borderRadii[key as keyof BorderRadiusProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
      if (key in borderStyles) {
        const value = props[key as keyof BorderStyleProps];
        const attr = borderStyles[key as keyof BorderStyleProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
      if (key in borderWidths) {
        const value = props[key as keyof BorderWidthProps];
        const attr = borderWidths[key as keyof BorderWidthProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
    }
  }
  return styles;
}
