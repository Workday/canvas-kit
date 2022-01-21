import {expectTransformFactory} from './expectTransformFactory';
import transform from '../compoundActionBar';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('ActionBar', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = `import ActionBar from '@workday/some-other-library'`;
    const expected = `import ActionBar from '@workday/some-other-library'`;

    expectTransform(input, expected);
  });

  it('should replace default import', () => {
    const input = `import ActionBar from '@workday/canvas-kit-react/action-bar';`;
    const expected = `import { ActionBar } from '@workday/canvas-kit-react/action-bar';`;

    expectTransform(input, expected);
  });

  it('should replace default import with a renamed export', () => {
    const input = `import ButtonBar from '@workday/canvas-kit-react/action-bar';`;
    const expected = `import { ActionBar as ButtonBar } from '@workday/canvas-kit-react/action-bar';`;

    expectTransform(input, expected);
  });

  it('should ignore ActionBar from other packages', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/some-other-library'

      <ActionBar fixed="true" />
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/some-other-library'

      <ActionBar fixed="true" />
    `;

    expectTransform(input, expected);
  });

  it('should remove fixed prop from ActionBar component', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      <ActionBar fixed="true" />
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      <ActionBar />
    `;

    expectTransform(input, expected);
  });

  it('should remove fixed prop from ActionBar component imported from main package', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react';

      <ActionBar fixed="true" />
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react';

      <ActionBar />
    `;

    expectTransform(input, expected);
  });

  it('should replace default import and remove fixed prop', () => {
    const input = stripIndent`
      import ActionBar from '@workday/canvas-kit-react/action-bar';

      <ActionBar fixed="true" />
    `;

    const expected = stripIndent`
      import { ActionBar } from '@workday/canvas-kit-react/action-bar';

      <ActionBar />
    `;

    expectTransform(input, expected);
  });
});
