import {expectTransformFactory} from './expectTransformFactory';
import transform from '../restructureBreadcrumbs';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Breadcrumbs', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = `
      import { Breadcrumbs } from '../some-other-file'

      <Breadcrumbs.Nav aria-label="Some links">
      </Breadcrumbs.Nav>
    `;
    const expected = `
      import { Breadcrumbs } from '../some-other-file'

      <Breadcrumbs.Nav aria-label="Some links">
      </Breadcrumbs.Nav>
    `;

    expectTransform(input, expected);
  });

  it('should replace Breadcrumbs.Nav by Breadcrumbs', () => {
    const input = stripIndent`
      import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

      <Breadcrumbs.Nav aria-label="Some links">
        <Breadcrumbs.CollapsibleList maxWidth="100">
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link>link</Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
        </Breadcrumbs.CollapsibleList>
      </Breadcrumbs.Nav>
    `;

    const expected = stripIndent`
      import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

      <Breadcrumbs>
        <Breadcrumbs.List maxWidth="100" aria-label="Some links">
          <Breadcrumbs.Item>
            <Breadcrumbs.Link>link</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
    `;

    expectTransform(input, expected);
  });

  it('should replace Breadcrumbs.Nav by Breadcrumbs', () => {
    const input = stripIndent`
      import {Breadcrumbs as CanvasBreadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

      <CanvasBreadcrumbs.Nav aria-label="Some links">
        <CanvasBreadcrumbs.CollapsibleList maxWidth="100">
          {items}
        </CanvasBreadcrumbs.CollapsibleList>
      </CanvasBreadcrumbs.Nav>
    `;

    const expected = stripIndent`
      import {Breadcrumbs as CanvasBreadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

      <CanvasBreadcrumbs>
        <CanvasBreadcrumbs.List maxWidth="100" aria-label="Some links">
          {items}
        </CanvasBreadcrumbs.List>
      </CanvasBreadcrumbs>
    `;

    expectTransform(input, expected);
  });
});
