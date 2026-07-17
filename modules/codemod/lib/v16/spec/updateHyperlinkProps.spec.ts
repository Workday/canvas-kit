import {stripIndent} from 'common-tags';

import transform from '../updateHyperlinkProps';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('updateHyperlinkProps', () => {
  it('should convert variant="standalone" to type="standalone"', () => {
    const input = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant="standalone" href="#link">Link</Hyperlink>
    `;

    const expected = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink href="#link" type="standalone">Link</Hyperlink>
    `;
    expectTransform(input, expected);
  });

  it('should convert variant="standaloneInverse" to variant="inverse" type="standalone"', () => {
    const input = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant="standaloneInverse" href="#link">Link</Hyperlink>
    `;

    const expected = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant="inverse" href="#link" type="standalone">Link</Hyperlink>
    `;
    expectTransform(input, expected);
  });

  it('should transform ExternalHyperlink props', () => {
    const input = stripIndent`
      import {ExternalHyperlink} from '@workday/canvas-kit-react/button'
      <>
        <ExternalHyperlink variant="standalone" href="#a" iconLabel="Opens new window">A</ExternalHyperlink>
        <ExternalHyperlink variant="standaloneInverse" href="#b" iconLabel="Opens new window">B</ExternalHyperlink>
      </>
    `;

    const expected = stripIndent`
      import {ExternalHyperlink} from '@workday/canvas-kit-react/button'
      <>
        <ExternalHyperlink href="#a" iconLabel="Opens new window" type="standalone">A</ExternalHyperlink>
        <ExternalHyperlink
          variant="inverse"
          href="#b"
          iconLabel="Opens new window"
          type="standalone">B</ExternalHyperlink>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should transform aliased imports', () => {
    const input = stripIndent`
      import {Hyperlink as Link} from '@workday/canvas-kit-react/button'
      <Link variant="standalone" href="#link">Link</Link>
    `;

    const expected = stripIndent`
      import {Hyperlink as Link} from '@workday/canvas-kit-react/button'
      <Link href="#link" type="standalone">Link</Link>
    `;
    expectTransform(input, expected);
  });

  it('should transform package root imports', () => {
    const input = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react'
      <Hyperlink variant="standalone" href="#link">Link</Hyperlink>
    `;

    const expected = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react'
      <Hyperlink href="#link" type="standalone">Link</Hyperlink>
    `;
    expectTransform(input, expected);
  });

  it('should not transform when Hyperlink is not imported', () => {
    const input = stripIndent`
      import {Button} from '@workday/canvas-kit-react'
      <Button variant="standalone">Click me</Button>
    `;

    const expected = stripIndent`
      import {Button} from '@workday/canvas-kit-react'
      <Button variant="standalone">Click me</Button>
    `;
    expectTransform(input, expected);
  });

  it('should handle variant={"standaloneInverse"} expression values', () => {
    const input = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant={'standaloneInverse'} href="#link">Link</Hyperlink>
    `;

    const expected = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant="inverse" href="#link" type="standalone">Link</Hyperlink>
    `;
    expectTransform(input, expected);
  });

  it('should transform styled-wrapped components', () => {
    const input = stripIndent`
      import {styled} from '@emotion/styled';
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      const StyledLink = styled(Hyperlink)({color: '#000'});
      <StyledLink variant="standalone" href="#link">Link</StyledLink>
    `;

    const expected = stripIndent`
      import {styled} from '@emotion/styled';
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      const StyledLink = styled(Hyperlink)({color: '#000'});
      <StyledLink href="#link" type="standalone">Link</StyledLink>
    `;
    expectTransform(input, expected);
  });

  it('should not duplicate type="standalone" if already present', () => {
    const input = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant="standalone" type="standalone" href="#link">Link</Hyperlink>
    `;

    const expected = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink type="standalone" href="#link">Link</Hyperlink>
    `;
    expectTransform(input, expected);
  });

  it('should overwrite type="inline" when converting variant="standalone"', () => {
    const input = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink variant="standalone" type="inline" href="#link">Link</Hyperlink>
    `;

    const expected = stripIndent`
      import {Hyperlink} from '@workday/canvas-kit-react/button'
      <Hyperlink type="standalone" href="#link">Link</Hyperlink>
    `;
    expectTransform(input, expected);
  });
});
