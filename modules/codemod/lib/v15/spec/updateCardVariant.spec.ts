import {stripIndent} from 'common-tags';

import transform from '../updateCardVariant';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('updateCardVariant', () => {
  it('should update `variant="filled"` to `variant="tonal"` when using slash imports', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'
      <>
        <Card variant="filled">
          <Card.Body>Content</Card.Body>
        </Card>
        <Card variant="default">
          <Card.Body>Content</Card.Body>
        </Card>
        <Card variant="borderless">
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'
      <>
        <Card variant="tonal">
          <Card.Body>Content</Card.Body>
        </Card>
        <Card variant="default">
          <Card.Body>Content</Card.Body>
        </Card>
        <Card variant="borderless">
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should update `variant="filled"` to `variant="tonal"` when using package imports', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react'
      <>
        <Card variant="filled">
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react'
      <>
        <Card variant="tonal">
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should update `variant={"filled"}` to `variant="tonal"` when using JSX expression', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'
      <>
        <Card variant={'filled'}>
          <Card.Body>Content</Card.Body>
        </Card>
        <Card variant={'default'}>
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'
      <>
        <Card variant="tonal">
          <Card.Body>Content</Card.Body>
        </Card>
        <Card variant="default">
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should not transform when Card is not imported', () => {
    const input = stripIndent`
      import {Button} from '@workday/canvas-kit-react'
      <>
        <Button>Click me</Button>
      </>
    `;

    const expected = stripIndent`
      import {Button} from '@workday/canvas-kit-react'
      <>
        <Button>Click me</Button>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should not transform Card without variant prop', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'
      <>
        <Card>
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'
      <>
        <Card>
          <Card.Body>Content</Card.Body>
        </Card>
      </>
    `;
    expectTransform(input, expected);
  });
});
