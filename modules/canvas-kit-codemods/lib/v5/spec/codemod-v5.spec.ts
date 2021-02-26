'use strict';

import {defineInlineTest} from 'jscodeshift/dist/testUtils';
import transform from '..';

describe('reverse-identifiers', () => {
  defineInlineTest(
    transform,
    {},
    `
import {ActionBar, Banner, BannerVariant} from '@workday/canvas-kit-react';
    `,
    `
import { ActionBar } from "@workday/canvas-kit-react/action-bar";
import { Banner, BannerVariant } from "@workday/canvas-kit-react/banner";
    `,
    'Splits bundle module import specifiers into separate imports'
  );

  defineInlineTest(
    transform,
    {},
    `
import {
  colors,
  depth as depthValues,
  type,
  spacing,
  borderRadius,
  CanvasDepthValue,
  CanvasSpacingValue,
} from '@workday/canvas-kit-react-core';`,
    `
import {
  colors,
  depth as depthValues,
  type,
  spacing,
  borderRadius,
  CanvasDepthValue,
  CanvasSpacingValue,
} from "@workday/canvas-kit-react/core";
  `,
    'Updates bundle module import source'
  );
});
