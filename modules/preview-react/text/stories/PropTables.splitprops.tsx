import React from 'react';
import {TextProps, TypeLabelProps, TypeLevelProps} from '@workday/canvas-kit-preview-react/text';

// <ArgsTable of={Text} /> generates a very large props table given that
// Text includes BoxProps. Use this dummy component instead to
// limit the props shown.
export const TextComponent = (_: TextProps) => <div />;

// <ArgsTable of={Label} /> generates a props table with
// Text and Box props. Use this dummy component instead to limit the props shown.
export const LabelComponent = (_: TypeLabelProps) => <div />;

// <ArgsTable of={Heading} /> generates a props table with
// Text and Box props. Use this dummy component instead to limit the props shown.
export const TypeLevelComponent = (_: TypeLevelProps) => <div />;
