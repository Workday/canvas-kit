import CSS from 'csstype';

export interface FlexProps {
  alignItems?: CSS.AlignItemsProperty;
  alignContent?: CSS.AlignContentProperty;
  justifyItems?: CSS.JustifyItemsProperty;
  display?: CSS.DisplayProperty;
  justifyContent?: CSS.JustifyContentProperty;
  flexWrap?: CSS.FlexWrapProperty;
  wrap?: CSS.FlexWrapProperty; // a helpful alias for flexWrap
  flexDirection?: CSS.FlexDirectionProperty;
  direction?: CSS.FlexDirectionProperty; // a helpful alias for flexDirection
  flex?: number | string;
  flexGrow?: number | string;
  grow?: number | string; // a helpful alias for flexGrow
  flexShrink?: number | string;
  shrink?: number | string; // a helpful alias for flexShrink
  flexBasis?: number | string;
  basis?: number | string; // a helpful alias for flexBasis
  justifySelf?: CSS.JustifySelfProperty;
  alignSelf?: CSS.AlignSelfProperty;
  order?: CSS.GlobalsNumber;
}

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
  let styles = {};
  for (const key in props) {
    if (key in flexProps) {
      const attr = flexProps[key as keyof FlexProps];
      const value = props[key];
      styles = {...styles, [attr]: value};
    }
  }
  return styles;
}
