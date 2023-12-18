import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameHasErrorPreview';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameHasError', () => {
  it('should rename hasError to error and set the value to "error"', () => {
    const input = stripIndent`
        import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
        <>
            <TextInput hasError={true} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
        <>
            <TextInput error="error" />
        </>
    `;
    expectTransform(input, expected);
  });
  it('should rename rename hasError to error and handle ternary with variable', () => {
    const input = stripIndent`
        import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
        const myBool = true;
        <>
            <TextInput hasError={myBool} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
        const myBool = true;
        <>
            <TextInput error={myBool ? "error" : undefined} />
        </>
    `;
    expectTransform(input, expected);
  });
});
