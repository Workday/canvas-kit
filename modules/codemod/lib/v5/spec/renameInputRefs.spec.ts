import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameInputRefs';
const context = describe;

const expectTransform = expectTransformFactory(transform);

describe('renameInputRefs', () => {
  it('should not replace "inputRef" with "ref" on non-input components', () => {
    const input = `
      import {SomeOtherComponent} from '@workday/canvas-kit-react'

      <SomeOtherComponent inputRef={ref} />
    `;

    const expected = `
      import {SomeOtherComponent} from '@workday/canvas-kit-react'

      <SomeOtherComponent inputRef={ref} />
    `;

    expectTransform(input, expected);
  });

  context(
    'should replace "inputRef" with "ref" on input components which previously supported inputRef',
    () => {
      it('when imported with a default import', () => {
        const input = `
          import Checkbox from '@workday/canvas-kit-react/checkbox'
          import Radio from '@workday/canvas-kit-react/radio'
          import Switch from '@workday/canvas-kit-react/switch'
          import TextArea from '@workday/canvas-kit-react/text-area'
          import TextInput from '@workday/canvas-kit-react/text-input'

          <>
            <Checkbox inputRef={ref} />
            <Radio inputRef={ref} />
            <Switch inputRef={ref} />
            <TextArea inputRef={ref} />
            <TextInput inputRef={ref} />
          </>
        `;

        const expected = `
          import Checkbox from '@workday/canvas-kit-react/checkbox'
          import Radio from '@workday/canvas-kit-react/radio'
          import Switch from '@workday/canvas-kit-react/switch'
          import TextArea from '@workday/canvas-kit-react/text-area'
          import TextInput from '@workday/canvas-kit-react/text-input'

          <>
            <Checkbox ref={ref} />
            <Radio ref={ref} />
            <Switch ref={ref} />
            <TextArea ref={ref} />
            <TextInput ref={ref} />
          </>
        `;

        expectTransform(input, expected);
      });

      it('when imported with a named slash import', () => {
        const input = `
          import {Checkbox} from '@workday/canvas-kit-react/checkbox'
          import {ColorInput, ColorPreview} from '@workday/canvas-kit-react/color-picker'
          import {Radio} from '@workday/canvas-kit-react/radio'
          import {Switch} from '@workday/canvas-kit-react/switch'
          import {TextArea} from '@workday/canvas-kit-react/text-area'
          import {TextInput} from '@workday/canvas-kit-react/text-input'

          <>
            <Checkbox inputRef={ref} />
            <ColorInput inputRef={ref} />
            <ColorPreview inputRef={ref} />
            <Radio inputRef={ref} />
            <Switch inputRef={ref} />
            <TextArea inputRef={ref} />
            <TextInput inputRef={ref} />
          </>
        `;

        const expected = `
          import {Checkbox} from '@workday/canvas-kit-react/checkbox'
          import {ColorInput, ColorPreview} from '@workday/canvas-kit-react/color-picker'
          import {Radio} from '@workday/canvas-kit-react/radio'
          import {Switch} from '@workday/canvas-kit-react/switch'
          import {TextArea} from '@workday/canvas-kit-react/text-area'
          import {TextInput} from '@workday/canvas-kit-react/text-input'

          <>
            <Checkbox ref={ref} />
            <ColorInput ref={ref} />
            <ColorPreview ref={ref} />
            <Radio ref={ref} />
            <Switch ref={ref} />
            <TextArea ref={ref} />
            <TextInput ref={ref} />
          </>
        `;

        expectTransform(input, expected);
      });

      it('when imported with a named import from the main package', () => {
        const input = `
          import {
            Checkbox,
            ColorInput,
            ColorPreview,
            Radio,
            Switch,
            TextArea,
            TextInput,
          } from '@workday/canvas-kit-react'

          <>
            <Checkbox inputRef={ref} />
            <ColorInput inputRef={ref} />
            <ColorPreview inputRef={ref} />
            <Radio inputRef={ref} />
            <Switch inputRef={ref} />
            <TextArea inputRef={ref} />
            <TextInput inputRef={ref} />
          </>
        `;

        const expected = `
          import {
            Checkbox,
            ColorInput,
            ColorPreview,
            Radio,
            Switch,
            TextArea,
            TextInput,
          } from '@workday/canvas-kit-react'

          <>
            <Checkbox ref={ref} />
            <ColorInput ref={ref} />
            <ColorPreview ref={ref} />
            <Radio ref={ref} />
            <Switch ref={ref} />
            <TextArea ref={ref} />
            <TextInput ref={ref} />
          </>
        `;

        expectTransform(input, expected);
      });

      it('when renamed on the import', () => {
        const input = `
          import {
            Checkbox as CheckboxTest,
            ColorInput as ColorInputTest,
            ColorPreview as ColorPreviewTest,
            Radio as RadioTest,
            Switch as SwitchTest,
            TextArea as TextAreaTest,
            TextInput as TextInputTest,
          } from '@workday/canvas-kit-react'

          <>
            <CheckboxTest inputRef={ref} />
            <ColorInputTest inputRef={ref} />
            <ColorPreviewTest inputRef={ref} />
            <RadioTest inputRef={ref} />
            <SwitchTest inputRef={ref} />
            <TextAreaTest inputRef={ref} />
            <TextInputTest inputRef={ref} />
          </>
        `;

        const expected = `
          import {
            Checkbox as CheckboxTest,
            ColorInput as ColorInputTest,
            ColorPreview as ColorPreviewTest,
            Radio as RadioTest,
            Switch as SwitchTest,
            TextArea as TextAreaTest,
            TextInput as TextInputTest,
          } from '@workday/canvas-kit-react'

          <>
            <CheckboxTest ref={ref} />
            <ColorInputTest ref={ref} />
            <ColorPreviewTest ref={ref} />
            <RadioTest ref={ref} />
            <SwitchTest ref={ref} />
            <TextAreaTest ref={ref} />
            <TextInputTest ref={ref} />
          </>
        `;

        expectTransform(input, expected);
      });

      it('when styled using the styled function', () => {
        const input = `
          import {
            Checkbox,
            ColorInput,
            ColorPreview,
            Radio,
            Switch,
            TextArea,
            TextInput,
          } from '@workday/canvas-kit-react'

          const StyledCheckbox = styled(Checkbox)({});
          const StyledColorInput = styled(ColorInput)({});
          const StyledColorPreview = styled(ColorPreview)({});
          const StyledRadio = styled(Radio)({});
          const StyledSwitch = styled(Switch)({});
          const StyledTextArea = styled(TextArea)({});
          const StyledTextInput = styled(TextInput)({});

          <>
            <StyledCheckbox inputRef={ref} />
            <StyledColorInput inputRef={ref} />
            <StyledColorPreview inputRef={ref} />
            <StyledRadio inputRef={ref} />
            <StyledSwitch inputRef={ref} />
            <StyledTextArea inputRef={ref} />
            <StyledTextInput inputRef={ref} />
          </>
        `;

        const expected = `
          import {
            Checkbox,
            ColorInput,
            ColorPreview,
            Radio,
            Switch,
            TextArea,
            TextInput,
          } from '@workday/canvas-kit-react'

          const StyledCheckbox = styled(Checkbox)({});
          const StyledColorInput = styled(ColorInput)({});
          const StyledColorPreview = styled(ColorPreview)({});
          const StyledRadio = styled(Radio)({});
          const StyledSwitch = styled(Switch)({});
          const StyledTextArea = styled(TextArea)({});
          const StyledTextInput = styled(TextInput)({});

          <>
            <StyledCheckbox ref={ref} />
            <StyledColorInput ref={ref} />
            <StyledColorPreview ref={ref} />
            <StyledRadio ref={ref} />
            <StyledSwitch ref={ref} />
            <StyledTextArea ref={ref} />
            <StyledTextInput ref={ref} />
          </>
        `;

        expectTransform(input, expected);
      });
    }
  );
});
