import {stripIndent} from 'common-tags';

import transform from '../migrateExpressiveIcons';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('migrateAppletIcons', () => {
  it('should not update other icons', () => {
    const input = stripIndent`
      import {laptopEducationIcon} from "other-package";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";
      
      <AppletIcon icon={laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import {laptopEducationIcon} from "other-package";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";

      <AppletIcon icon={laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should not update other icons', () => {
    const input = stripIndent`
      import * as icons from "other-package";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";
      
      <AppletIcon icon={icons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as icons from "other-package";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";

      <AppletIcon icon={icons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update applet icons to the new applet icons', () => {
    const input = stripIndent`
      import {laptopEducationIcon} from "@workday/canvas-applet-icons-web";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";
      
      <AppletIcon icon={laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import {laptopEducationIcon} from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react/icon";

      <ExpressiveIcon icon={laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update renamed applet icons to the new applet icons', () => {
    const input = stripIndent`
      import {laptopEducationIcon as canvasIcon} from "@workday/canvas-applet-icons-web";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";
      
      <AppletIcon icon={canvasIcon} />
    `;

    const expected = stripIndent`
      import {laptopEducationIcon as canvasIcon} from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react/icon";

      <ExpressiveIcon icon={canvasIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update applet icons to the new applet icons', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-applet-icons-web";
      import {AppletIcon} from "@workday/canvas-kit-react/icon";

      <AppletIcon icon={canvasIcons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react/icon";

      <ExpressiveIcon icon={canvasIcons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update applet icons to the new expressive icons with a named import', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-applet-icons-web";
      import {AppletIcon as Icon} from "@workday/canvas-kit-react/icon";

      <Icon icon={canvasIcons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon as Icon} from "@workday/canvas-kit-react/icon";

      <Icon icon={canvasIcons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update applet icons to the new expressive icons with a default import', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-applet-icons-web";
      import {AppletIcon} from "@workday/canvas-kit-react";

      <AppletIcon icon={canvasIcons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react";

      <ExpressiveIcon icon={canvasIcons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should keep all props', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-applet-icons-web";
      import {AppletIcon} from "@workday/canvas-kit-react";

      <AppletIcon icon={canvasIcons.laptopEducationIcon} size="lg" />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react";

      <ExpressiveIcon icon={canvasIcons.laptopEducationIcon} size="lg" />
    `;

    expectTransform(input, expected);
  });
});
