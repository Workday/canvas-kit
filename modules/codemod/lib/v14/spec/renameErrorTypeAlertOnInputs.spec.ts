import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameErrorTypeAlertOnInputs';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('rename alert to caution on inputs', () => {
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

  it('should rename alert to caution for TextInput, Switch, and TextArea', () => {
    const input = stripIndent`
        import {TextInput, Switch, TextArea} from '@workday/canvas-kit-react'
        <>
          <TextInput error={TextInput.ErrorType.Alert} />
          <Switch error={Switch.ErrorType.Alert} />
          <TextArea error={TextArea.ErrorType.Alert} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput, Switch, TextArea} from '@workday/canvas-kit-react'
        <>
          <TextInput error={TextInput.ErrorType.Caution} />
          <Switch error={Switch.ErrorType.Caution} />
          <TextArea error={TextArea.ErrorType.Caution} />
        </>
    `;
    expectTransform(input, expected);
  });

  it('should change renamed TextInput, Switch, and TextArea', () => {
    const input = stripIndent`
        import {TextInput as CanvasTextInput, Switch as CanvasSwitch, TextArea as CanvasTextArea} from '@workday/canvas-kit-react'
        <>
          <CanvasTextInput error={CanvasTextInput.ErrorType.Alert} />
          <CanvasSwitch error={CanvasSwitch.ErrorType.Alert} />
          <CanvasTextArea error={CanvasTextArea.ErrorType.Alert} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput as CanvasTextInput, Switch as CanvasSwitch, TextArea as CanvasTextArea} from '@workday/canvas-kit-react'
        <>
          <CanvasTextInput error={CanvasTextInput.ErrorType.Caution} />
          <CanvasSwitch error={CanvasSwitch.ErrorType.Caution} />
          <CanvasTextArea error={CanvasTextArea.ErrorType.Caution} />
        </>
    `;
    expectTransform(input, expected);
  });

  it('should change styled TextInput, Switch and TextArea', () => {
    const input = stripIndent`
        import {TextInput, Switch, TextArea} from '@workday/canvas-kit-react'
        const StyledTextInput = styled(TextInput)({color: "#000"});
        const StyledSwitch = styled(Switch)({color: "#000"});
        const StyledTextArea = styled(TextArea)({color: "#000"});
        <>
          <StyledTextInput error={TextInput.ErrorType.Alert} />
          <StyledSwitch error={Switch.ErrorType.Alert} />
          <StyledTextArea error={TextArea.ErrorType.Alert} />
        </>
    `;

    const expected = stripIndent`
        import {TextInput, Switch, TextArea} from '@workday/canvas-kit-react'
        const StyledTextInput = styled(TextInput)({color: "#000"});
        const StyledSwitch = styled(Switch)({color: "#000"});
        const StyledTextArea = styled(TextArea)({color: "#000"});
        <>
          <StyledTextInput error={TextInput.ErrorType.Caution} />
          <StyledSwitch error={Switch.ErrorType.Caution} />
          <StyledTextArea error={TextArea.ErrorType.Caution} />
        </>
    `;
    expectTransform(input, expected);
  });
});
