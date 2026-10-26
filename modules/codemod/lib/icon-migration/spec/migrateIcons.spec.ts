import {stripIndent} from 'common-tags';

import transform from '../migrateIcons';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('migrateIcons', () => {
  it('should not change the icon if it is not a Canvas system icon', () => {
    const input = stripIndent`
      import {undoIcon} from 'any-icon-library';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={undoIcon} />
    `;

    expectTransform(input, input);
  });

  it('should not change the icon matching property', () => {
    const input = stripIndent`
      import {undoIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={undoIcon} />
        <SystemIcon icon={{name: 'undoIcon'}} />
        <SystemIcon icon={config.undoIcon} />
        <SystemIcon icon={{undoIcon: true}} />
      </>
    `;

    const expected = stripIndent`
      import {arrowUTurnLeftIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={arrowUTurnLeftIcon} />
        <SystemIcon icon={{name: 'undoIcon'}} />
        <SystemIcon icon={config.undoIcon} />
        <SystemIcon icon={{undoIcon: true}} />
      </>
    `;

    expectTransform(input, expected);
  });

  it('should replace a deprecated Canvas system icon with its fallback icon', () => {
    const input = stripIndent`
      import {academicAppointmentTitleIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={academicAppointmentTitleIcon} />
    `;

    const expected = stripIndent`
      import {clipboardUserIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={clipboardUserIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should keep the local name if the deprecated icon was renamed on import', () => {
    const input = stripIndent`
      import {academicAppointmentTitleIcon as myIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={myIcon} />
    `;

    const expected = stripIndent`
      import {clipboardUserIcon as myIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={myIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should replace deprecated icons accessed from a namespace import', () => {
    const input = stripIndent`
      import * as systemIcons from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={systemIcons.academicAppointmentTitleIcon} />
    `;

    const expected = stripIndent`
      import * as systemIcons from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={systemIcons.clipboardUserIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should replace the icon with a supported icon when the fallback is also deprecated', () => {
    const input = stripIndent`
      import {transformationImportIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={transformationImportIcon} />
    `;

    const expected = stripIndent`
      import {arrowRightToLineIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={arrowRightToLineIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should not add a duplicate import when the fallback is already imported', () => {
    const input = stripIndent`
      import {academicAppointmentTitleIcon, clipboardUserIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={academicAppointmentTitleIcon} />
        <SystemIcon icon={clipboardUserIcon} />
      </>
    `;

    const expected = stripIndent`
      import {clipboardUserIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={clipboardUserIcon} />
        <SystemIcon icon={clipboardUserIcon} />
      </>
    `;

    expectTransform(input, expected);
  });

  it('should not add a duplicate import when the fallback is already imported', () => {
    const input = stripIndent`
      import {passwordIcon, lockKeyholeIcon, lockIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={passwordIcon} />
        <SystemIcon icon={lockKeyholeIcon} />
        <SystemIcon icon={lockIcon} />
      </>
    `;

    const expected = stripIndent`
      import {lockIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={lockIcon} />
        <SystemIcon icon={lockIcon} />
        <SystemIcon icon={lockIcon} />
      </>
    `;

    expectTransform(input, expected);
  });

  it('should not add a duplicate import when the fallback is already imported if renamed', () => {
    const input = stripIndent`
      import {academicAppointmentTitleIcon as academicIcon, clipboardUserIcon as clipboardIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={academicIcon} />
        <SystemIcon icon={clipboardIcon} />
      </>
    `;

    const expected = stripIndent`
      import {clipboardUserIcon as clipboardIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <>
        <SystemIcon icon={clipboardIcon} />
        <SystemIcon icon={clipboardIcon} />
      </>
    `;

    expectTransform(input, expected);
  });

  it('should not change an icon that is its own fallback', () => {
    const input = stripIndent`
      import {hierarchyChevronOpenIcon} from '@workday/canvas-system-icons-web';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={hierarchyChevronOpenIcon} />
    `;

    expectTransform(input, input);
  });

  it('should not change an icon of the same name imported from another library', () => {
    const input = stripIndent`
      import {academicAppointmentTitleIcon} from 'any-icon-library';
      import {SystemIcon} from '@workday/canvas-kit-react/icon';

      <SystemIcon icon={academicAppointmentTitleIcon} />
    `;

    expectTransform(input, input);
  });
});
