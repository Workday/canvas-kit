import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateDisclosureShowHide';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('updateModelSignatures', () => {
  it('should remove the object wrapping of onShow data with ObjectMethods', () => {
    const input = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onShow({event}) {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onShow(event) {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });

  it('should remove the object wrapping of onShow data with ObjectProperty', () => {
    const input = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onShow: ({event}) => {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onShow: event => {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });

  it('should remove the object wrapping of onShow data with ObjectMethods', () => {
    const input = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onShow({event}) {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onShow(event) {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });

  it('should remove the object wrapping of onHide data with ObjectProperty', () => {
    const input = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onHide: ({event}) => {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

      const model = useDisclosureModel({
        onHide: event => {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });

  it('should remove the object wrapping of onShow for usePopupModel', () => {
    const input = stripIndent`
      import {usePopupModel} from '@workday/canvas-kit-react/popup';

      const model = usePopupModel({
        onShow({event}) {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {usePopupModel} from '@workday/canvas-kit-react/popup';

      const model = usePopupModel({
        onShow(event) {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });

  it('should remove the object wrapping of onShow for useModalModel', () => {
    const input = stripIndent`
      import {useModalModel} from '@workday/canvas-kit-react/modal';

      const model = useModalModel({
        onShow({event}) {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {useModalModel} from '@workday/canvas-kit-react/modal';

      const model = useModalModel({
        onShow(event) {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });

  it('should remove the object wrapping of onShow for useDialogModel', () => {
    const input = stripIndent`
      import {useDialogModel} from '@workday/canvas-kit-react/dialog';

      const model = useDialogModel({
        onShow({event}) {
          // implementation
        }
      });
    `;

    const expected = stripIndent`
      import {useDialogModel} from '@workday/canvas-kit-react/dialog';

      const model = useDialogModel({
        onShow(event) {
          // implementation
        }
      });
    `;

    expectTransform(input, expected);
  });
});
