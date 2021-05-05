import {
  BoxProps,
  BorderProps,
  ColorProps,
  DepthProps,
  FlexItemProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from '@workday/canvas-kit-labs-react/common';
// border props
export const BoxBorder = (props: BorderProps) => <div />;
export const BoxBorderShorthand = (
  props: Pick<BorderProps, 'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft'>
) => <div />;
export const BoxBorderColor = (
  props: Pick<
    BorderProps,
    'borderColor' | 'borderTopColor' | 'borderRightColor' | 'borderBottomColor' | 'borderLeftColor'
  >
) => <div />;
export const BoxBorderRadius = (
  props: Pick<
    BorderProps,
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
  >
) => <div />;
export const BoxBorderStyle = (
  props: Pick<
    BorderProps,
    'borderStyle' | 'borderTopStyle' | 'borderRightStyle' | 'borderBottomStyle' | 'borderLeftStyle'
  >
) => <div />;
export const BoxBorderWidth = (
  props: Pick<
    BorderProps,
    'borderWidth' | 'borderTopWidth' | 'borderRightWidth' | 'borderBottomWidth' | 'borderLeftWidth'
  >
) => <div />;
export const BoxBorderLogical = (
  props: Pick<
    BorderProps,
    | 'borderInlineStart'
    | 'borderInlineStartColor'
    | 'borderInlineStartStyle'
    | 'borderInlineStartWidth'
    | 'borderInlineEnd'
    | 'borderInlineEndColor'
    | 'borderInlineEndStyle'
    | 'borderInlineEndWidth'
  >
) => <div />;
// color props
export const BoxColor = (props: ColorProps) => <div />;
// depth props
export const BoxDepth = (props: DepthProps) => <div />;
// flex item props
export const BoxFlexItem = (props: FlexItemProps) => <div />;
// layout props
export const BoxLayout = (props: LayoutProps) => <div />;
// position props
export const BoxPosition = (props: PositionProps) => <div />;
export const BoxPositionLogical = (
  props: Pick<PositionProps, 'insetInlineStart' | 'insetInlineEnd'>
) => <div />;
export const BoxPositionStandard = (
  props: Omit<PositionProps, 'insetInlineStart' | 'insetInlineEnd'>
) => <div />;
// space props
export const BoxSpace = (props: SpaceProps) => <div />;
export const BoxSpaceLogical = (
  props: Pick<
    SpaceProps,
    'marginInlineStart' | 'marginInlineEnd' | 'paddingInlineStart' | 'paddingInlineEnd'
  >
) => <div />;
export const BoxSpaceStandard = (
  props: Omit<
    SpaceProps,
    'marginInlineStart' | 'marginInlineEnd' | 'paddingInlineStart' | 'paddingInlineEnd'
  >
) => <div />;
