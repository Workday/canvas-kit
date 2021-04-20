import * as CSS from 'csstype';
import {
  borderRadius as borderRadiusTokens,
  CanvasBorderRadiusTokens,
  colors as colorTokens,
  CanvasColor,
} from '@workday/canvas-kit-react/tokens';

export type BorderShorthandProps = {
  /** sets border styles */
  border?: string;
  /** sets border-top styles */
  borderTop?: string;
  /** sets border-left styles */
  borderLeft?: string;
  /** sets border-right styles */
  borderRight?: string;
};

export type BorderColorProps = {
  /** sets border-color styles */
  borderColor?: CanvasColor | (string & {});
  /** sets border-top-color styles */
  borderTopColor?: CanvasColor | (string & {});
  /** sets border-left-color styles */
  borderLeftColor?: CanvasColor | (string & {});
  /** sets border-right-color styles */
  borderRightColor?: CanvasColor | (string & {});
};

export type BorderRadiusProps = {
  /** sets border-radius styles */
  borderRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets border-top-left-radius styles */
  borderTopLeftRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets border-top-right-radius styles */
  borderTopRightRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets border-bottom-left-radius styles */
  borderBottomLeftRadius?: CanvasBorderRadiusTokens | number | (string & {});
  /** sets border-bottom-right-radius styles */
  borderBottomRightRadius?: CanvasBorderRadiusTokens | number | (string & {});
};

export type BorderStyleProps = {
  /** sets border-style styles */
  borderStyle?: CSS.Property.BorderStyle;
  /** sets border-top-style styles */
  borderTopStyle?: CSS.Property.BorderStyle;
  /** sets border-left-style styles */
  borderLeftStyle?: CSS.Property.BorderStyle;
  /** sets border-right-style styles */
  borderRightStyle?: CSS.Property.BorderStyle;
};

export type BorderWidthProps = {
  /** sets border-width styles */
  borderWidth?: string | number;
  /** sets border-top-width styles */
  borderTopWidth?: string | number;
  /** sets border-left-width styles */
  borderLeftWidth?: string | number;
  /** sets border-right-width styles */
  borderRightWidth?: string | number;
};

/** a collection style props for borders */
export type BorderProps = BorderShorthandProps &
  BorderColorProps &
  BorderRadiusProps &
  BorderStyleProps &
  BorderWidthProps;

const borderShorthandStyles = {
  border: 'border',
  borderTop: 'borderTop',
  borderLeft: 'borderLeft',
  borderRight: 'borderRight',
};

const borderColors = {
  borderColor: 'borderColor',
  borderTopColor: 'borderTopColor',
  borderLeftColor: 'borderLeftColor',
  borderRightColor: 'borderRightColor',
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
  borderLeftStyle: 'borderLeftStyle',
  borderRightStyle: 'borderRightStyle',
};

const borderWidths = {
  borderWidth: 'borderWidth',
  borderTopWidth: 'borderTopWidth',
  borderLeftWidth: 'borderLeftWidth',
  borderRightWidth: 'borderRightWidth',
};

export const borderProps = {
  ...borderShorthandStyles,
  ...borderColors,
  ...borderRadii,
  ...borderStyles,
  ...borderWidths,
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
 * // But it can also be used as a standalone function
 * const props = { border: `solid 1px #333333 ${colors.blackPepper400}` };
 * const borderStyles = border(props);
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
