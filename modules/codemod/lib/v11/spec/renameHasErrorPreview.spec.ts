import {stripIndent} from 'common-tags';

import transform from '../renameHasErrorPreview';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('renameHasError', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {TextInput} from '@workday/any-other-package'
            import {TextArea} from './text-area'
            import {FormField} from 'any-other-package'
            <>
                <TextInput hasError={true} />
                <TextArea hasError={true} />
                <FormField hasError={true} />
            </>
        `;

    const expected = stripIndent`
            import {TextInput} from '@workday/any-other-package'
            import {TextArea} from './text-area'
            import {FormField} from 'any-other-package'
            <>
                <TextInput hasError={true} />
                <TextArea hasError={true} />
                <FormField hasError={true} />
            </>
        `;
    expectTransform(input, expected);
  });

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
  it('should change main package canvas imports', () => {
    const input = stripIndent`
        import {TextInput, TextArea, FormField} from '@workday/canvas-kit-preview-react'
        <>
            <TextInput hasError={true} />
            <TextArea hasError={true} />
            <FormField hasError={true} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput, TextArea, FormField} from '@workday/canvas-kit-preview-react'
        <>
            <TextInput error="error" />
            <TextArea error="error" />
            <FormField error="error" />
        </>
    `;
    expectTransform(input, expected);
  });

  it('should change renamed FormField', () => {
    const input = stripIndent`
        import {TextInput as CanvasTextInput} from '@workday/canvas-kit-preview-react/text-input'
        import {TextArea as CanvasTextArea} from '@workday/canvas-kit-preview-react/text-area'
        import {FormField as CanvasForm} from '@workday/canvas-kit-preview-react/form-field'
        
        <>
            <CanvasTextInput hasError={true} />
            <CanvasTextArea hasError={true} />
            <CanvasForm hasError={true} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput as CanvasTextInput} from '@workday/canvas-kit-preview-react/text-input'
        import {TextArea as CanvasTextArea} from '@workday/canvas-kit-preview-react/text-area'
        import {FormField as CanvasForm} from '@workday/canvas-kit-preview-react/form-field'
        
        <>
            <CanvasTextInput error="error" />
            <CanvasTextArea error="error" />
            <CanvasForm error="error" />
        </>
    `;
    expectTransform(input, expected);
  });

  it('should change styled FormField', () => {
    const input = stripIndent`
        import {FormField} from '@workday/canvas-kit-preview-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm hasError={true} />
    `;

    const expected = stripIndent`
        import {FormField} from '@workday/canvas-kit-preview-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error="error" />
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

  it('should not rename hasError prop for other components', () => {
    const input = stripIndent`
        import {TextInput, MyOtherComponent} from '@workday/canvas-kit-preview-react'
        const myBool = true;
        <>
            <MyOtherComponent hasError={true} />
            <TextInput hasError={myBool} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput, MyOtherComponent} from '@workday/canvas-kit-preview-react'
        const myBool = true;
        <>
            <MyOtherComponent hasError={true} />
            <TextInput error={myBool ? "error" : undefined} />
        </>
    `;
    expectTransform(input, expected);
  });
});
