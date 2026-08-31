import {stripIndent} from 'common-tags';

import transform from '../migrateExpressiveIcons';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('migrateAccentIcons', () => {
  it('should not update other icons', () => {
    const input = stripIndent`
      import {laptopEducationIcon} from "other-package"
      import {AccentIcon} from "@workday/canvas-kit-react/icon"
      
      <AccentIcon icon={laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import {laptopEducationIcon} from "other-package"
      import {AccentIcon} from "@workday/canvas-kit-react/icon"

      <AccentIcon icon={laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should not update other icons', () => {
    const input = stripIndent`
      import * as icons from "other-package";
      import {AccentIcon} from "@workday/canvas-kit-react/icon";
      
      <AccentIcon icon={icons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as icons from "other-package";
      import {AccentIcon} from "@workday/canvas-kit-react/icon";

      <AccentIcon icon={icons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update accent icons to the new accent icons', () => {
    const input = stripIndent`
      import {laptopEducationIcon} from "@workday/canvas-accent-icons-web";
      import {AccentIcon} from "@workday/canvas-kit-react/icon";
      
      <AccentIcon icon={laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import {laptopEducationIcon} from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react/icon";

      <ExpressiveIcon icon={laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update renamed accent icons to the new accent icons', () => {
    const input = stripIndent`
      import {laptopEducationIcon as canvasIcon} from "@workday/canvas-accent-icons-web";
      import {AccentIcon} from "@workday/canvas-kit-react/icon";
      
      <AccentIcon icon={canvasIcon} />
    `;

    const expected = stripIndent`
      import {laptopEducationIcon as canvasIcon} from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react/icon";

      <ExpressiveIcon icon={canvasIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update accent icons to the new accent icons', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-accent-icons-web";
      import {AccentIcon} from "@workday/canvas-kit-react/icon";

      <AccentIcon icon={canvasIcons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react/icon";

      <ExpressiveIcon icon={canvasIcons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update accent icons to the new expressive icons with a named import', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-accent-icons-web";
      import {AccentIcon as Icon} from "@workday/canvas-kit-react/icon";

      <Icon icon={canvasIcons.laptopEducationIcon} />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon as Icon} from "@workday/canvas-kit-react/icon";

      <Icon icon={canvasIcons.laptopEducationIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update accent icons to the new expressive icons with a default import', () => {
    const input = stripIndent`
      import * as canvasIcons from "@workday/canvas-accent-icons-web";
      import {AccentIcon} from "@workday/canvas-kit-react";

      <AccentIcon icon={canvasIcons.laptopEducationIcon} />
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
      import * as canvasIcons from "@workday/canvas-accent-icons-web";
      import {AccentIcon} from "@workday/canvas-kit-react";

      <AccentIcon icon={canvasIcons.laptopEducationIcon} size="lg" />
    `;

    const expected = stripIndent`
      import * as canvasIcons from "@workday/canvas-expressive-icons-web";
      import {ExpressiveIcon} from "@workday/canvas-kit-react";

      <ExpressiveIcon icon={canvasIcons.laptopEducationIcon} size="lg" />
    `;

    expectTransform(input, expected);
  });

  it('should correctly update multiple imports', () => {
    const input = stripIndent`
      import {laptopEducationIcon} from "@workday/canvas-accent-icons-web";
      import {birthdaysIcon} from "@workday/canvas-applet-icons-web";
      import {AccentIcon, AppletIcon} from "@workday/canvas-kit-react/icon";
      
      <>
        <AccentIcon icon={laptopEducationIcon} />
        <AppletIcon icon={birthdaysIcon} />
      </>
    `;

    const expected = stripIndent`
      import { laptopEducationIcon, birthdaysIcon } from "@workday/canvas-expressive-icons-web";
      import { ExpressiveIcon } from "@workday/canvas-kit-react/icon";

      <>
        <ExpressiveIcon icon={laptopEducationIcon} />
        <ExpressiveIcon icon={birthdaysIcon} />
      </>
    `;

    expectTransform(input, expected);
  });
});
