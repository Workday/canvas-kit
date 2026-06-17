import {stripIndent} from 'common-tags';

import transform from '../removePropFromPopper';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('removePropFromPopper', () => {
  it('should remove containerElement prop from Popper component', () => {
    const input = stripIndent`
      import {Popper} from '@workday/canvas-kit-react/popup';

      <Popper containerElement="any element here" />
    `;

    const expected = stripIndent`
      import {Popper} from '@workday/canvas-kit-react/popup';

      <Popper />
    `;

    expectTransform(input, expected);
  });

  it('should remove containerElement prop from Popper component imported from main package', () => {
    const input = stripIndent`
      import {Popper} from '@workday/canvas-kit-react';

      <Popper containerElement="any element here" />
    `;

    const expected = stripIndent`
      import {Popper} from '@workday/canvas-kit-react';

      <Popper />
    `;

    expectTransform(input, expected);
  });
});
