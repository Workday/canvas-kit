import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateExpandableAvatarProp';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Expandable', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {Expandable} from '@workday/any-other-package'
            <>
              <Expandable>Hello<Expandable.Icon/></Expandable>
              <Expandable />
              <Expandable />
            </>
        `;

    const expected = stripIndent`
            import {Expandable} from '@workday/any-other-package'
            <>
              <Expandable>Hello<Expandable.Icon/></Expandable>
              <Expandable />
              <Expandable />
            </>
        `;
    expectTransform(input, expected);
  });

  it('should change altText to name on Expandable.Avatar', () => {
    const input = stripIndent`
          import {Expandable} from '@workday/canvas-kit-react';
          <>
            <Expandable>
              <Expandable.Avatar altText="Avatar" />
              Hello World
            </Expandable>
          </>
      `;

    const expected = stripIndent`
          import {Expandable} from '@workday/canvas-kit-react';
          <>
            <Expandable>
              <Expandable.Avatar name="Avatar" />
              Hello World
            </Expandable>
          </>
      `;
    expectTransform(input, expected);
  });

  it('should still rename altText to name on Expandable.Avatar if Expandable is renamed at the import level', () => {
    const input = stripIndent`
          import {Expandable as MyExpandable} from '@workday/canvas-kit-react/expandable';
          <>
            <MyExpandable>
              <MyExpandable.Avatar altText="Avatar" />
            </MyExpandable>
          </>
      `;

    const expected = stripIndent`
          import {Expandable as MyExpandable} from '@workday/canvas-kit-react/expandable';
          <>
            <MyExpandable>
              <MyExpandable.Avatar name="Avatar" />
            </MyExpandable>
          </>
      `;
    expectTransform(input, expected);
  });

  it('should change styled Expandable', () => {
    const input = stripIndent`
        import {Expandable} from '@workday/canvas-kit-react/expandable'
        const StyledExpandable = styled(Expandable)({color: "#000"});
        <>
          <StyledExpandable>
            <StyledExpandable.Avatar altText="Avatar" />
          </StyledExpandable>
        </>
    `;

    const expected = stripIndent`
        import {Expandable} from '@workday/canvas-kit-react/expandable'
        const StyledExpandable = styled(Expandable)({color: "#000"});
        <>
          <StyledExpandable>
            <StyledExpandable.Avatar name="Avatar" />
          </StyledExpandable>
        </>
    `;
    expectTransform(input, expected);
  });
});
