// TODO: Export CanvasBorderRadius
import {borderRadius} from '@workday/canvas-kit-react-core';

type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends {[_ in keyof T]: infer U}
  ? U
  : never;

export type BorderRadius = KnownKeys<typeof borderRadius>;

export type BorderProps = {
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: BorderRadius;
  borderTop?: string;
  borderTopWidth?: string;
  borderTopStyle?: string;
  borderTopColor?: string;
  borderTopLeftRadius?: BorderRadius;
  borderTopRightRadius?: BorderRadius;
  borderRight?: string;
  borderRightWidth?: string;
  borderRightStyle?: string;
  borderRightColor?: string;
  borderBottom?: string;
  borderBottomWidth?: string;
  borderBottomStyle?: string;
  borderBottomColor?: string;
  borderBottomLeftRadius?: BorderRadius;
  borderBottomRightRadius?: BorderRadius;
  borderLeft?: string;
  borderLeftWidth?: string;
  borderLeftStyle?: string;
  borderLeftColor?: string;
  borderX?: string;
  borderY?: string;
};

export const borderKeys = {
  border: 'border',
  borderWidth: 'borderWidth',
  borderStyle: 'borderStyle',
  borderColor: 'borderColor',
  borderTop: 'borderTop',
  borderTopWidth: 'borderTopWidth',
  borderTopStyle: 'borderTopStyle',
  borderTopColor: 'borderTopColor',
  borderRight: 'borderRight',
  borderRightWidth: 'borderRightWidth',
  borderRightStyle: 'borderRightStyle',
  borderRightColor: 'borderRightColor',
  borderBottom: 'borderBottom',
  borderBottomWidth: 'borderBottomWidth',
  borderBottomStyle: 'borderBottomStyle',
  borderBottomColor: 'borderBottomColor',
  borderLeft: 'borderLeft',
  borderLeftWidth: 'borderLeftWidth',
  borderLeftStyle: 'borderLeftStyle',
  borderLeftColor: 'borderLeftColor',
  borderX: 'borderX',
  borderY: 'borderY',
  borderRadius: (value: BorderRadius) => ({
    borderRadius: borderRadius[value],
  }),
  borderTopLeftRadius: (value: BorderRadius) => ({
    borderTopLeftRadius: borderRadius[value],
  }),
  borderTopRightRadius: (value: BorderRadius) => ({
    borderTopRightRadius: borderRadius[value],
  }),
  borderBottomLeftRadius: (value: BorderRadius) => ({
    borderBottomLeftRadius: borderRadius[value],
  }),
  borderBottomRightRadius: (value: BorderRadius) => ({
    borderBottomRightRadius: borderRadius[value],
  }),
};

export function border<P extends BorderProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in borderKeys) {
      const value = props[key as keyof BorderProps];
      const attr = borderKeys[key as keyof BorderProps];
      if (typeof attr === 'function') {
        const borderStyle = attr(value as BorderRadius);
        styles = {...styles, ...borderStyle};
      } else {
        styles = {...styles, [attr]: value};
      }
    }
  }
  return styles;
}
