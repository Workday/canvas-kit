import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateFormFieldAlert';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('rename form field alert', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {FormField} from 'any-other-package'
            <FormField error={true} />
        `;

    const expected = stripIndent`
            import {FormField} from 'any-other-package'
            <FormField error={true} />
        `;
    expectTransform(input, expected);
  });

  it('should rename alert to caution', () => {
    const input = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        <FormField error="alert" />
    `;

    const expected = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        <FormField error="caution" />
    `;
    expectTransform(input, expected);
  });

  it('should change renamed FormField', () => {
    const input = stripIndent`
        import {FormField as CanvasForm} from '@workday/canvas-kit-react/form-field'
        <CanvasForm error="alert" />
    `;

    const expected = stripIndent`
        import {FormField as CanvasForm} from '@workday/canvas-kit-react/form-field'
        <CanvasForm error="caution" />
    `;
    expectTransform(input, expected);
  });

  it('should change styled FormField', () => {
    const input = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error="alert" />
    `;

    const expected = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error="caution" />
    `;
    expectTransform(input, expected);
  });
  it('should change expression container', () => {
    const input = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error={'alert'} />
    `;

    const expected = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error="caution" />
    `;
    expectTransform(input, expected);
  });
  it('should handle expressions', () => {
    const input = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error={hasError ? 'error' : 'alert'} />
    `;

    const expected = stripIndent`
        import {FormField} from '@workday/canvas-kit-react/form-field'
        const StyledForm = styled(FormField)({color: "#000"});
        <StyledForm error={hasError ? "error" : "caution"} />
    `;
    expectTransform(input, expected);
  });
});
