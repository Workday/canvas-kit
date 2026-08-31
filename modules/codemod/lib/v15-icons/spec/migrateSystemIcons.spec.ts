import {stripIndent} from 'common-tags';

import transform from '../migrateSystemIcons';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('migrateSystemIcons', () => {
  it('should not update other icons', () => {
    const input = stripIndent`
      import {accountsIcon} from 'other-package'
      
      <SystemIcon icon={accountsIcon} />
    `;

    const expected = stripIndent`
      import {accountsIcon} from 'other-package'

      <SystemIcon icon={accountsIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should not update other icons', () => {
    const input = stripIndent`
      import * as icons from 'other-package'
      
      <SystemIcon icon={icons.accountsIcon} />
    `;

    const expected = stripIndent`
      import * as icons from 'other-package'

      <SystemIcon icon={icons.accountsIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update system icons to the new system icons', () => {
    const input = stripIndent`
      import {accountsIcon} from '@workday/canvas-system-icons-web'
      
      <SystemIcon icon={accountsIcon} />
    `;

    const expected = stripIndent`
      import {catalogIcon} from '@workday/canvas-system-icons-web'

      <SystemIcon icon={catalogIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update renamed system icons to the new system icons', () => {
    const input = stripIndent`
      import {accountsIcon as canvasIcon} from '@workday/canvas-system-icons-web'
      
      <SystemIcon icon={canvasIcon} />
    `;

    const expected = stripIndent`
      import {catalogIcon as canvasIcon} from '@workday/canvas-system-icons-web'

      <SystemIcon icon={canvasIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should update system icons to the new system icons', () => {
    const input = stripIndent`
      import * as canvasIcons from '@workday/canvas-system-icons-web'
      
      <SystemIcon icon={canvasIcons.accountsIcon} />
    `;

    const expected = stripIndent`
      import * as canvasIcons from '@workday/canvas-system-icons-web'

      <SystemIcon icon={canvasIcons.catalogIcon} />
    `;

    expectTransform(input, expected);
  });

  it('should correctly update multiple imports', () => {
    const input = stripIndent`
      import {accountsIcon, catalogIcon} from '@workday/canvas-system-icons-web';
      
      <>
        <SystemIcon icon={accountsIcon} />
        <SystemIcon icon={catalogIcon} />
      </>
    `;

    const expected = stripIndent`
      import { catalogIcon } from '@workday/canvas-system-icons-web';

      <>
        <SystemIcon icon={catalogIcon} />
        <SystemIcon icon={catalogIcon} />
      </>
    `;

    expectTransform(input, expected);
  });
});
