import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updatePillAvatarProp';
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
          <Pill>
            Hello World
          </Pill>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react/pill';
          <Pill>
            Hello World
          </Pill>
      `;
    expectTransform(input, expected);
  });

  it('should change altText to name on Pill.Avatar', () => {
    const input = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react';
          <Pill>
            <Pill.Avatar altText="Avatar" />
            Hello World
          </Pill>
      `;

    const expected = stripIndent`
          import {Pill} from '@workday/canvas-kit-preview-react';
          <Pill>
            <Pill.Avatar name="Avatar" />
            Hello World
          </Pill>
      `;
    expectTransform(input, expected);
  });

  it('should still rename altText to name on Pill.Avatar if Pill is renamed at the import level', () => {
    const input = stripIndent`
          import {Pill as MyPill} from '@workday/canvas-kit-preview-react';
          <MyPill>
            <MyPill.Avatar altText="Avatar" />
          </MyPill>
      `;

    const expected = stripIndent`
          import {Pill as MyPill} from '@workday/canvas-kit-preview-react';
          <MyPill>
            <MyPill.Avatar name="Avatar" />
          </MyPill>
      `;
    expectTransform(input, expected);
  });

  it('should change styled Pill', () => {
    const input = stripIndent`
        import {Pill} from '@workday/canvas-kit-preview-react/pill'
        const StyledPill = styled(Pill)({color: "#000"});
        <StyledPill>
          <StyledPill.Avatar altText="Avatar" />
        </StyledPill>
    `;

    const expected = stripIndent`
        import {Pill} from '@workday/canvas-kit-preview-react/pill'
        const StyledPill = styled(Pill)({color: "#000"});
        <StyledPill>
          <StyledPill.Avatar name="Avatar" />
        </StyledPill>
    `;
    expectTransform(input, expected);
  });
});
