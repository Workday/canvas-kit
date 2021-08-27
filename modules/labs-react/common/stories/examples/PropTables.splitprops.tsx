import React from 'react';

import {
  BoxProps,
  BorderStyleProps,
  ColorStyleProps,
  DepthStyleProps,
  FlexItemStyleProps,
  LayoutStyleProps,
  PositionStyleProps,
  SpaceStyleProps,
} from '@workday/canvas-kit-labs-react/common';
// border props
export const BoxBorder = (props: BorderStyleProps) => <div />;
export const BoxBorderShorthand = (
  props: Pick<
    BorderStyleProps,
    'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft'
  >
) => <div />;
export const BoxBorderColor = (
  props: Pick<
    BorderStyleProps,
    'borderColor' | 'borderTopColor' | 'borderRightColor' | 'borderBottomColor' | 'borderLeftColor'
  >
) => <div />;
export const BoxBorderRadius = (
  props: Pick<
    BorderStyleProps,
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
  >
) => <div />;
export const BoxBorderStyle = (
  props: Pick<
    BorderStyleProps,
    'borderStyle' | 'borderTopStyle' | 'borderRightStyle' | 'borderBottomStyle' | 'borderLeftStyle'
  >
) => <div />;
export const BoxBorderWidth = (
  props: Pick<
    BorderStyleProps,
    'borderWidth' | 'borderTopWidth' | 'borderRightWidth' | 'borderBottomWidth' | 'borderLeftWidth'
  >
) => <div />;
export const BoxBorderLogical = (
  props: Pick<
    BorderStyleProps,
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
export const BoxColor = (props: ColorStyleProps) => <div />;
// depth props
export const BoxDepth = (props: DepthStyleProps) => <div />;
// flex item props
export const BoxFlexItem = (props: FlexItemStyleProps) => <div />;
// layout props
export const BoxLayout = (props: LayoutStyleProps) => <div />;
// position props
export const BoxPosition = (props: PositionStyleProps) => <div />;
export const BoxPositionLogical = (
  props: Pick<PositionStyleProps, 'insetInlineStart' | 'insetInlineEnd'>
) => <div />;
export const BoxPositionStandard = (
  props: Omit<PositionStyleProps, 'insetInlineStart' | 'insetInlineEnd'>
) => <div />;
// space props
export const BoxSpace = (props: SpaceStyleProps) => <div />;
export const BoxSpaceLogical = (
  props: Pick<
    SpaceStyleProps,
    'marginInlineStart' | 'marginInlineEnd' | 'paddingInlineStart' | 'paddingInlineEnd'
  >
) => <div />;
export const BoxSpaceStandard = (
  props: Omit<
    SpaceStyleProps,
    'marginInlineStart' | 'marginInlineEnd' | 'paddingInlineStart' | 'paddingInlineEnd'
  >
) => <div />;
