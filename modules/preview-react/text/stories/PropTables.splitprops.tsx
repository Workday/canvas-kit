import React from 'react';
import {TextProps, TypeLabelProps, TypeLevelProps} from '@workday/canvas-kit-preview-react/text';

// <ArgsTable of={Banner} /> generates a very large props table given that
// BannerProps includes FlexProps. Use this dummy component instead to
// limit the props shown.
export const TextComponent = (_: TextProps) => <div />;

// <ArgsTable of={Banner.Icon} /> generates a props table with
// SystemIcon props. Use this dummy component instead to limit the props shown.
export const LabelComponent = (_: TypeLabelProps) => <div />;

// <ArgsTable of={Banner.Label} /> generates a props table with
// Flex props. Use this dummy component instead to limit the props shown.
export const TypeLevelComponent = (_: TypeLevelProps) => <div />;
