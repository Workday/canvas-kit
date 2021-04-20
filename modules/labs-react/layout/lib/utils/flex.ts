import CSS from 'csstype';

export type FlexProps = {
  alignItems?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  justifyItems?: CSS.Property.JustifyItems;
  justifyContent?: CSS.Property.JustifyContent;
  flexWrap?: CSS.Property.FlexWrap;
  wrap?: CSS.Property.FlexWrap; // a helpful alias for flexWrap
  flexDirection?: CSS.Property.FlexDirection;
  direction?: CSS.Property.FlexDirection; // a helpful alias for flexDirection
  flex?: number | string;
  flexGrow?: number | string;
  grow?: number | string; // a helpful alias for flexGrow
  flexShrink?: number | string;
  shrink?: number | string; // a helpful alias for flexShrink
  flexBasis?: number | string;
  basis?: number | string; // a helpful alias for flexBasis
  justifySelf?: CSS.Property.JustifySelf;
  alignSelf?: CSS.Property.AlignSelf;
  order?: CSS.Property.Order;
};

export const flexProps = {
  alignItems: 'alignItems',
  alignContent: 'alignContent',
  justifyItems: 'justifyItems',
  justifyContent: 'justifyContent',
  flexWrap: 'flexWrap',
  wrap: 'flexWrap',
  flexDirection: 'flexDirection',
  direction: 'flexDirection',
  flex: 'flex',
  flexGrow: 'flexGrow',
  grow: 'flexGrow',
  flexShrink: 'flexShrink',
  shrink: 'flexShrink',
  flexBasis: 'flexBasis',
  basis: 'basis',
  justifySelf: 'justifySelf',
  alignSelf: 'alignSelf',
  order: 'order',
};

export function flex<P extends FlexProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in props) {
      const attr = flexProps[key as keyof FlexProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
