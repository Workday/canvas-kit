import {expectTransformFactory} from './expectTransformFactory';
import transform from '../addPillLabel';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Pill', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {Pill} from '@workday/any-other-package'
            <>
                <Pill />
                <Pill />
                <Pill />
            </>
        `;

    const expected = stripIndent`
            import {Pill} from '@workday/any-other-package'
            <>
                <Pill />
                <Pill />
                <Pill />
            </>
        `;
    expectTransform(input, expected);
  });

  it('should not change if the only children of Pill is plain text', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <>
            <Pill>
              Hello World
            </Pill>
          </>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <>
            <Pill>
              Hello World
            </Pill>
          </>
      `;
    expectTransform(input, expected);
  });
  it('should wrap plain text in label if Pill.Icon is present', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <>
            <Pill>
              <Pill.Icon />
              Hello World
            </Pill>
          </>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <>
            <Pill>
              <Pill.Icon /><Pill.Label>Hello World</Pill.Label></Pill>
          </>
      `;
    expectTransform(input, expected);
  });
  it('should wrap text in label if Pill.IconButton is present and the text is rendered as an expression', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          const myVar = 'Hello World';
          <>
            <Pill>
              {myVar}
              <Pill.IconButton />
            </Pill>
          </>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          const myVar = 'Hello World';
          <>
            <Pill>
              <Pill.Label>{myVar}</Pill.Label>
              <Pill.IconButton />
            </Pill>
          </>
      `;
    expectTransform(input, expected);
  });
  it('should wrap text in label if Pill.IconButton is present and the text is rendered as an expression', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          const myVar = 'Hello World';
          <>
            <Pill
              margin="auto"
              marginTop="xxl"
              variant="readOnly"
              backgroundColor="soap100"
              data-automation-id="branding-banner-pill"
            >
              {getText('Some.Text')}
            </Pill>
          </>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          const myVar = 'Hello World';
          <>
            <Pill
              margin="auto"
              marginTop="xxl"
              variant="readOnly"
              backgroundColor="soap100"
              data-automation-id="branding-banner-pill"
            >
              {getText('Some.Text')}
            </Pill>
          </>
      `;
    expectTransform(input, expected);
  });

  // import {Pill} from '@workday/canvas-kit-preview-react/pill';
  // <>
  //   <Pill>
  //     <Pill.Label>{children}</Pill.Label>
  //     <Pill.Icon />
  //     <Pill.Icon />
  //     <Pill.Avatar />
  //     <Pill.IconButton />
  //     <Pill.Count />
  //   </Pill>
  //   <Pill>
  //     <Pill.Label>{'Some Name'}</Pill.Label>
  //     <Pill.Icon />
  //   </Pill>
  //   <Pill>
  //     {errors && <PillErrorIcon />}
  //     <Pill.Label>All Filters</Pill.Label>
  //     <Pill.Count>{num}</Pill.Count>
  //   </Pill>
  // </>;
  //   it('should rename rename hasError to error and handle ternary with variable', () => {
  //     const input = stripIndent`
  //         import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
  //         const myBool = true;
  //         <>
  //             <TextInput hasError={myBool} />
  //         </>
  //     `;

  //     const expected = stripIndent`
  //         import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
  //         const myBool = true;
  //         <>
  //             <TextInput error={myBool ? "error" : undefined} />
  //         </>
  //     `;
  //     expectTransform(input, expected);
  //   });
  //   it('should change main package canvas imports', () => {
  //     const input = stripIndent`
  //         import {TextInput, TextArea, FormField} from '@workday/canvas-kit-preview-react'
  //         <>
  //             <TextInput hasError={true} />
  //             <TextArea hasError={true} />
  //             <FormField hasError={true} />
  //         </>
  //     `;

  //     const expected = stripIndent`
  //         import {TextInput, TextArea, FormField} from '@workday/canvas-kit-preview-react'
  //         <>
  //             <TextInput error="error" />
  //             <TextArea error="error" />
  //             <FormField error="error" />
  //         </>
  //     `;
  //     expectTransform(input, expected);
  //   });

  //   it('should change renamed FormField', () => {
  //     const input = stripIndent`
  //         import {TextInput as CanvasTextInput} from '@workday/canvas-kit-preview-react/text-input'
  //         import {TextArea as CanvasTextArea} from '@workday/canvas-kit-preview-react/text-area'
  //         import {FormField as CanvasForm} from '@workday/canvas-kit-preview-react/form-field'

  //         <>
  //             <CanvasTextInput hasError={true} />
  //             <CanvasTextArea hasError={true} />
  //             <CanvasForm hasError={true} />
  //         </>
  //     `;

  //     const expected = stripIndent`
  //         import {TextInput as CanvasTextInput} from '@workday/canvas-kit-preview-react/text-input'
  //         import {TextArea as CanvasTextArea} from '@workday/canvas-kit-preview-react/text-area'
  //         import {FormField as CanvasForm} from '@workday/canvas-kit-preview-react/form-field'

  //         <>
  //             <CanvasTextInput error="error" />
  //             <CanvasTextArea error="error" />
  //             <CanvasForm error="error" />
  //         </>
  //     `;
  //     expectTransform(input, expected);
  //   });

  //   it('should change styled FormField', () => {
  //     const input = stripIndent`
  //         import {FormField} from '@workday/canvas-kit-preview-react/form-field'
  //         const StyledForm = styled(FormField)({color: "#000"});
  //         <StyledForm hasError={true} />
  //     `;

  //     const expected = stripIndent`
  //         import {FormField} from '@workday/canvas-kit-preview-react/form-field'
  //         const StyledForm = styled(FormField)({color: "#000"});
  //         <StyledForm error="error" />
  //     `;
  //     expectTransform(input, expected);
  //   });

  //   it('should rename rename hasError to error and handle ternary with variable', () => {
  //     const input = stripIndent`
  //         import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
  //         const myBool = true;
  //         <>
  //             <TextInput hasError={myBool} />
  //         </>
  //     `;

  //     const expected = stripIndent`
  //         import {TextInput} from '@workday/canvas-kit-preview-react/text-input'
  //         const myBool = true;
  //         <>
  //             <TextInput error={myBool ? "error" : undefined} />
  //         </>
  //     `;
  //     expectTransform(input, expected);
  //   });

  //   it('should not rename hasError prop for other components', () => {
  //     const input = stripIndent`
  //         import {TextInput, MyOtherComponent} from '@workday/canvas-kit-preview-react'
  //         const myBool = true;
  //         <>
  //             <MyOtherComponent hasError={true} />
  //             <TextInput hasError={myBool} />
  //         </>
  //     `;

  //     const expected = stripIndent`
  //         import {TextInput, MyOtherComponent} from '@workday/canvas-kit-preview-react'
  //         const myBool = true;
  //         <>
  //             <MyOtherComponent hasError={true} />
  //             <TextInput error={myBool ? "error" : undefined} />
  //         </>
  //     `;
  //     expectTransform(input, expected);
  //   });
});
