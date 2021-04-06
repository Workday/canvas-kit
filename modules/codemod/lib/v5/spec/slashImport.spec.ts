'use strict';

import {defineInlineTest} from 'jscodeshift/dist/testUtils';
import transform from '../slashImports';

describe('slashImport', () => {
  defineInlineTest(
    transform,
    {},
    `
  import canvas from '@workday/canvas-kit-react';
      `,
    `
  import canvas from "@workday/canvas-kit-react/core";
      `,
    'Changes default canvas bundle import to core import'
  );

  defineInlineTest(
    transform,
    {},
    `
  import * as foo from '@workday/canvas-kit-react-button';
      `,
    `
  import * as foo from "@workday/canvas-kit-react/button";
      `,
    'Updates namespaced import'
  );

  // TODO: ADD HANDLING FOR @workday/canvas-kit-react source. Need to split imports
  // defineInlineTest(
  //   transform,
  //   {},
  //   `
  // import * as foo from '@workday/canvas-kit-react';
  //     `,
  //   `
  // import * as foo from "@workday/canvas-kit-react/core";
  //     `,
  //   'Changes namespaced bundle import to namespaced core import'
  // );

  defineInlineTest(
    transform,
    {},
    `
    import Button from '@workday/canvas-kit-react-button';
        `,
    `
    import Button from "@workday/canvas-kit-react/button";
        `,
    'Updates default button import'
  );

  defineInlineTest(
    transform,
    {},
    `
  import canvas, {Button} from '@workday/canvas-kit-react';
      `,
    `
  import canvas from "@workday/canvas-kit-react/core";
  import { Button } from "@workday/canvas-kit-react/button";
      `,
    'Remaps multiple imports from bundle'
  );

  defineInlineTest(
    transform,
    {},
    `
  import * as Button from '@workday/canvas-kit-react-button';
      `,
    `
  import * as Button from "@workday/canvas-kit-react/button";
      `,
    'Updates namespaced button import'
  );

  defineInlineTest(
    transform,
    {},
    `
  import type from '@workday/canvas-kit-labs-react-core';

      `,
    `
  import { type } from "@workday/canvas-kit-labs-react/core";
      `,
    'Updates labs default import to named import'
  );

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
  import { colors, depth as depthValues } from '@workday/canvas-kit-react-core';`,
    `
  import { colors, depth as depthValues } from "@workday/canvas-kit-react/core";
    `,
    'Updates renamed module import'
  );

  defineInlineTest(
    transform,
    {},
    `
  import canvas, { colors, spacingNumbers as spacing } from '@workday/canvas-kit-react-core';`,
    `
  import canvas, { colors, spacingNumbers as spacing } from "@workday/canvas-kit-react/core";
    `,
    'Remaps combined default, namespace and named imports'
  );
});
