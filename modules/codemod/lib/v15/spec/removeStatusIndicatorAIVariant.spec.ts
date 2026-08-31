import {stripIndent} from 'common-tags';

import transform from '../removeStatusIndicatorAIVariant';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('removeStatusIndicatorAIVariant', () => {
  it('should update `variant="ai"` to `variant="blue"` when using slash imports', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'

      <StatusIndicator variant="ai">
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'

      <StatusIndicator variant="blue">
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    `;
    expectTransform(input, expected);
  });

  it('should update `variant="ai"` to `variant="blue"` when using package imports', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react'

      <StatusIndicator variant="ai">
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react'

      <StatusIndicator variant="blue">
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    `;
    expectTransform(input, expected);
  });

  it('should update `variant={"ai"}` to `variant="blue"` when using JSX expression', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'

      <StatusIndicator variant={'ai'}>
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'

      <StatusIndicator variant="blue">
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    `;
    expectTransform(input, expected);
  });

  it('should not transform when StatusIndicator is not imported', () => {
    const input = stripIndent`
      import {Divider} from '@workday/canvas-kit-preview-react/divider'

      <>
       <Divider></Divider>
      </>
    `;

    const expected = stripIndent`
      import {Divider} from '@workday/canvas-kit-preview-react/divider'

      <>
       <Divider></Divider>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should not transform StatusIndicator without variant prop', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'

      <StatusIndicator>
        <StatusIndicator.Label>Content</StatusIndicator.Label>
      </StatusIndicator>
    `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'

      <StatusIndicator>
        <StatusIndicator.Label>Content</StatusIndicator.Label>
      </StatusIndicator>
    `;
    expectTransform(input, expected);
  });
});
