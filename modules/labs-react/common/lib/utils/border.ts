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
  /** sets `border-left` property (no bidirectional support) */
  borderInlineStart?: string;
  /** sets `border-left-color` property (no bidirectional support) */
  borderInlineStartColor?: CanvasColor | (string & {});
  /** sets `border-left-style` property (no bidirectional support) */
  borderInlineStartStyle?: Property.BorderStyle;
  /** sets `border-left-width` property (no bidirectional support) */
  borderInlineStartWidth?: string | number;
  /** sets `border-right` property (no bidirectional support) */
  borderInlineEnd?: string;
  /** sets `border-right-color` property (no bidirectional support) */
  borderInlineEndColor?: CanvasColor | (string & {});
  /** sets `border-right-style` property (no bidirectional support) */
  borderInlineEndStyle?: Property.BorderStyle;
  /** sets `border-right-width` property (no bidirectional support) */
  borderInlineEndWidth?: string | number;
};

/** a collection style props for border properties */
export type BorderProps = BorderShorthandProps &
  BorderColorProps &
  BorderRadiusProps &
  BorderStyleProps &
  BorderWidthProps &
  BorderLogicalProps;

const borderShorthandProps = {
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

const borderLogicalProps = {
  borderInlineStart: (isRTL: boolean) => (isRTL ? 'borderRight' : 'borderLeft'),
  borderInlineEnd: (isRTL: boolean) => (isRTL ? 'borderLeft' : 'borderRight'),

  borderInlineStartColor: (isRTL: boolean) => (isRTL ? 'borderRightColor' : 'borderLeftColor'),
  borderInlineEndColor: (isRTL: boolean) => (isRTL ? 'borderLeftColor' : 'borderRightColor'),

  borderInlineStartStyle: (isRTL: boolean) => (isRTL ? 'borderRightStyle' : 'borderLeftStyle'),
  borderInlineEndStyle: (isRTL: boolean) => (isRTL ? 'borderLeftStyle' : 'borderRightStyle'),

  borderInlineStartWidth: (isRTL: boolean) => (isRTL ? 'borderRightWidth' : 'borderLeftWidth'),
  borderInlineEndWidth: (isRTL: boolean) => (isRTL ? 'borderLeftWidth' : 'borderRightWidth'),
};

function convertLogicalPropAttrs<P extends BorderProps & {theme?: PartialEmotionCanvasTheme}>(
  props: P
) {
  // convertLogicalPropAttrs will always be used within the context of a component, but eslint doesn't know that
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {canvas} = useTheme(props.theme);
  const convertedProps = {};
  for (const key in props) {
    if (key in props) {
      const value = props[key];

      if (key in borderLogicalProps) {
        const isRTL = canvas.direction === ContentDirection.RTL;
        const propFn = borderLogicalProps[key as keyof BorderLogicalProps];
        const attr = propFn(isRTL);
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        convertedProps[attr] = value;
      } else {
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        convertedProps[key] = value;
      }
    }
  }
  return convertedProps as P;
}

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
  const styles = {};
  const convertedProps = convertLogicalPropAttrs(props);
  for (const key in convertedProps) {
    if (convertedProps.hasOwnProperty(key)) {
      if (key in borderShorthandProps) {
        const value = convertedProps[key as keyof BorderShorthandProps];
        const attr = borderShorthandProps[key as keyof BorderShorthandProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderColors) {
        const propValue = convertedProps[key as keyof BorderColorProps] as CanvasColor | string;
        const value = colorTokens[propValue as CanvasColor] || propValue;
        const attr = borderColors[key as keyof BorderColorProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderRadii) {
        const propValue = convertedProps[key as keyof BorderRadiusProps] as
          | CanvasBorderRadiusTokens
          | number
          | string;
        const value = borderRadiusTokens[propValue as CanvasBorderRadiusTokens] || propValue;
        const attr = borderRadii[key as keyof BorderRadiusProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderStyles) {
        const value = convertedProps[key as keyof BorderStyleProps];
        const attr = borderStyles[key as keyof BorderStyleProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }

      if (key in borderWidths) {
        const value = convertedProps[key as keyof BorderWidthProps];
        const attr = borderWidths[key as keyof BorderWidthProps];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
      }
    }
  }
  return styles;
}
