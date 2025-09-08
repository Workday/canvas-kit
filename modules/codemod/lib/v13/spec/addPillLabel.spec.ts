import {expectTransformFactory} from './expectTransformFactory';
import transform from '../addPillLabel';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Pill', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {Pill} from '@workday/any-other-package'
            <>
                <Pill>Hello<Pill.Icon/></Pill>
                <Pill />
                <Pill />
            </>
        `;

    const expected = stripIndent`
            import {Pill} from '@workday/any-other-package'
            <>
                <Pill>Hello<Pill.Icon/></Pill>
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
  it('should not change if Pill.Label exists', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <>
            <Pill>
              <Pill.Label>Hello World</Pill.Label>
            </Pill>
          </>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <>
            <Pill>
              <Pill.Label>Hello World</Pill.Label>
            </Pill>
          </>
      `;
    expectTransform(input, expected);
  });

  it('should wrap plain text in label if Pill.Icon is present and imported from main Preview package', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react';
          <>
            <Pill>
              <Pill.Icon />
              Hello World
            </Pill>
          </>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react';
          <>
            <Pill>
              <Pill.Icon /><Pill.Label>Hello World</Pill.Label></Pill>
          </>
      `;
    expectTransform(input, expected);
  });

  it('should wrap plain text in label if Pill.Icon is present and Pill is renamed at the import level', () => {
    const input = stripIndent`
          import {Pill as MyPill} from '@workday/canvas-kit-preview-react';
          <>
            <MyPill>
              <MyPill.Icon />
              Hello World
            </MyPill>
          </>
      `;

    const expected = stripIndent`
          import {Pill as MyPill} from '@workday/canvas-kit-preview-react';
          <>
            <MyPill>
              <MyPill.Icon /><MyPill.Label>Hello World</MyPill.Label></MyPill>
          </>
      `;
    expectTransform(input, expected);
  });

  it('should change styled Pill', () => {
    const input = stripIndent`
        import {Pill} from '@workday/canvas-kit-preview-react/pill'
        const StyledPill = styled(Pill)({color: "#000"});
        <>
          <StyledPill>
            <StyledPill.Icon />
            Hello World
          </StyledPill>
        </>
    `;

    const expected = stripIndent`
        import {Pill} from '@workday/canvas-kit-preview-react/pill'
        const StyledPill = styled(Pill)({color: "#000"});
        <>
          <StyledPill>
            <StyledPill.Icon /><StyledPill.Label>Hello World</StyledPill.Label></StyledPill>
        </>
    `;
    expectTransform(input, expected);
  });

  it('should wrap plain text in label if Pill.Icon is present and Pill is renamed at the import level', () => {
    const input = stripIndent`
          import {Pill as MyPill} from '@workday/canvas-kit-preview-react';
          <>
            <MyPill>
              <MyPill.Icon />
              Hello World
            </MyPill>
          </>
      `;

    const expected = stripIndent`
          import {Pill as MyPill} from '@workday/canvas-kit-preview-react';
          <>
            <MyPill>
              <MyPill.Icon /><MyPill.Label>Hello World</MyPill.Label></MyPill>
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
});
