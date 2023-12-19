import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameHasErrorPreview';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameHasError', () => {
  it('should rename hasError to error and set the value to "error" for FormField, TextInput and TextArea', () => {
    const input = stripIndent`
        import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
        import {TextArea} from '@workday/canvas-kit-preview-react/text-area'
        import {FormField} from '@workday/canvas-kit-preview-react/form-field'
        <>
            <TextInput hasError={true} />
            <TextArea hasError={true} />
            <FormField hasError={true} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
        import {TextArea} from '@workday/canvas-kit-preview-react/text-area'
        import {FormField} from '@workday/canvas-kit-preview-react/form-field'
        <>
            <TextInput error="error" />
            <TextArea error="error" />
            <FormField error="error" />
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
  it.only('should rename rename hasError to error and handle ternary with variable', () => {
    const input = stripIndent`
        import {TextInput} from '@workday/canvas-kit-react/text-input'
        const myBool = true;
        <>
            <TextInput hasError={myBool} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput} from '@workday/canvas-kit-react/text-input'
        const myBool = true;
        <>
            <TextInput error={myBool ? "error" : undefined} />
        </>
    `;
    expectTransform(input, expected);
  });
});
