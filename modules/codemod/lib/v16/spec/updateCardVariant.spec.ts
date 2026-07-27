import {stripIndent} from 'common-tags';

import {expectTransformFactory} from '../../v6/utils/expectTransformFactory';
import transform from '../updateCardVariant';

const expectTransform = expectTransformFactory(transform);

describe('Canvas Kit v16 Card Variant Update', () => {
  it('should update `variant="borderless"` to `variant="alt"` when using slash imports', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card variant="borderless">
            Body Content
          </Card>
        );
      }
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card variant="alt">
            Body Content
          </Card>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should update `variant="borderless"` to `variant="alt"` when using package imports', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react';

      export default function App() {
        return (
          <Card variant="borderless">
            Body Content
          </Card>
        );
      }
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react';

      export default function App() {
        return (
          <Card variant="alt">
            Body Content
          </Card>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should update `variant={"borderless"}` to `variant="alt"` when using JSX expression', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card variant={"borderless"}>
            Body Content
          </Card>
        );
      }
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card variant="alt">
            Body Content
          </Card>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should not update other variant values', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card variant="tonal">
            Body Content
          </Card>
        );
      }
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card variant="tonal">
            Body Content
          </Card>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should handle Cards without variant prop', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card>
            Body Content
          </Card>
        );
      }
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <Card>
            Body Content
          </Card>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should update multiple Cards with borderless variant', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <>
            <Card variant="borderless">
              First Card
            </Card>
            <Card variant="tonal">
              Second Card
            </Card>
            <Card variant="borderless">
              Third Card
            </Card>
          </>
        );
      }
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <>
            <Card variant="alt">
              First Card
            </Card>
            <Card variant="tonal">
              Second Card
            </Card>
            <Card variant="alt">
              Third Card
            </Card>
          </>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should handle renamed imports', () => {
    const input = stripIndent`
      import {Card as MyCard} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <MyCard variant="borderless">
            Body Content
          </MyCard>
        );
      }
    `;

    const expected = stripIndent`
      import {Card as MyCard} from '@workday/canvas-kit-react/card';

      export default function App() {
        return (
          <MyCard variant="alt">
            Body Content
          </MyCard>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should not transform if Card is not imported from Canvas Kit', () => {
    const input = stripIndent`
      import {Card} from 'some-other-library';

      export default function App() {
        return (
          <Card variant="borderless">
            Body Content
          </Card>
        );
      }
    `;

    expectTransform(input, input);
  });
});
