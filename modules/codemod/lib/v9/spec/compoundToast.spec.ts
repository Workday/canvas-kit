import {expectTransformFactory} from './expectTransformFactory';
import transform from '../compoundToast';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Toast', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = `import {Toast} from '@workday/some-other-library'`;
    const expected = `import {Toast} from '@workday/some-other-library'`;

    expectTransform(input, expected);
  });

  it('should ignore Toast from other packages', () => {
    const input = stripIndent`
      import {Toast} from '@workday/some-other-library'

      <Toast fixed="true" />
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/some-other-library'

      <Toast fixed="true" />
    `;

    expectTransform(input, expected);
  });

  it('should restructure Toast default usage with props', () => {
    const input = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';

      <Toast>
        Your workbook was successfully processed.
      </Toast>
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';

      import { checkIcon } from "@workday/canvas-system-icons-web";

      <Toast>
        <Toast.Icon color="greenApple400" icon={checkIcon} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
      </Toast>

    `;

    expectTransform(input, expected);
  });

  it('should restructure Toast usage with onClose props', () => {
    const input = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';

      <Toast onClose={handleClose}>
        Your workbook was successfully processed.
      </Toast>
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';

      import { checkIcon } from "@workday/canvas-system-icons-web";

      <Toast>
        <Toast.Icon color="greenApple400" icon={checkIcon} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
        <Toast.Close onClose={handleClose} />
      </Toast>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Toast usage with onActionClick and actionText props', () => {
    const input = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';

      <Toast onClose={handleClose} actionText="View More Details" onActionClick={handleActionClick}>
        Your workbook was successfully processed.
      </Toast>
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';

      import { checkIcon } from "@workday/canvas-system-icons-web";

      <Toast mode="dialog">
        <Toast.Icon color="greenApple400" icon={checkIcon} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
          <Toast.Link onClick={handleActionClick}>View More Details</Toast.Link>
        </Toast.Body>
        <Toast.Close onClose={handleClose} />
      </Toast>

    `;

    expectTransform(input, expected);
  });

  it('should restructure Toast usage with error icon', () => {
    const input = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';
      import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
      import {colors} from '@workday/canvas-kit-react/tokens';

      <Toast iconColor={colors.cinnamon500} icon={exclamationCircleIcon}>
        There was an error with your workbook.
      </Toast>
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast';
      import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
      import {colors} from '@workday/canvas-kit-react/tokens';

      <Toast>
        <Toast.Icon color={colors.cinnamon500} icon={exclamationCircleIcon} />
        <Toast.Body>
          <Toast.Message>There was an error with your workbook.</Toast.Message>
        </Toast.Body>
      </Toast>

    `;

    expectTransform(input, expected);
  });
});
