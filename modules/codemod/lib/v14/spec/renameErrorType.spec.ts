import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameErrorTypeAlert';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('rename ErrorType.Alert to ErrorType.Caution', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {ErrorType} from 'any-other-package'
            <Component error={ErrorType.Alert} />
        `;

    const expected = stripIndent`
            import {ErrorType} from 'any-other-package'
            <Component error={ErrorType.Alert} />
        `;
    expectTransform(input, expected);
  });

  it('should rename alert to caution for ErrorType.Alert', () => {
    const input = stripIndent`
        import { ErrorType } from '@workday/canvas-kit-react';

        const errorType = ErrorType.Alert;
        someFunction(ErrorType.Alert);
        <Component error={ErrorType.Alert} />

        switch(errorType) {
          case ErrorType.Alert:
            // handle alert
            break;
        }
    `;

    const expected = stripIndent`
        import { ErrorType } from '@workday/canvas-kit-react';

        const errorType = ErrorType.Caution;
        someFunction(ErrorType.Caution);
        <Component error={ErrorType.Caution} />

        switch(errorType) {
          case ErrorType.Caution:
            // handle alert
            break;
        }
    `;
    expectTransform(input, expected);
  });
});
