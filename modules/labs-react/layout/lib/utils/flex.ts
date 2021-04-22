import {Property} from 'csstype';

export type FlexProps = {
  alignItems?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  display?: Property.Display;
  justifyItems?: Property.JustifyItems;
  justifyContent?: Property.JustifyContent;
  flexWrap?: Property.FlexWrap;
  wrap?: Property.FlexWrap; // a helpful alias for flexWrap
  flexDirection?: Property.FlexDirection;
  direction?: Property.FlexDirection; // a helpful alias for flexDirection
  flex?: number | string;
  flexGrow?: number | string;
  grow?: number | string; // a helpful alias for flexGrow
  flexShrink?: number | string;
  shrink?: number | string; // a helpful alias for flexShrink
  flexBasis?: number | string;
  basis?: number | string; // a helpful alias for flexBasis
  justifySelf?: Property.JustifySelf;
  alignSelf?: Property.AlignSelf;
  order?: Property.Order;
};

export const flexProps = {
  alignItems: 'alignItems',
  alignContent: 'alignContent',
  display: 'display',
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
    if (key in flexProps) {
      const attr = flexProps[key as keyof FlexProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
