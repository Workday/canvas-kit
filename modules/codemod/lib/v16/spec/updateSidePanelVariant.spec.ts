import {stripIndent} from 'common-tags';

import transform from '../updateSidePanelVariant';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('updateSidePanelVariant', () => {
  it('should convert variant="alternate" to variant="overlay" on package root imports', () => {
    const input = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react'
      <SidePanel variant="alternate">Content</SidePanel>
    `;

    const expected = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react'
      <SidePanel variant="overlay">Content</SidePanel>
    `;
    expectTransform(input, expected);
  });

  it('should convert variant="alternate" to variant="overlay" on slash imports', () => {
    const input = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      <SidePanel variant="alternate">Content</SidePanel>
    `;

    const expected = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      <SidePanel variant="overlay">Content</SidePanel>
    `;
    expectTransform(input, expected);
  });

  it('should transform aliased imports', () => {
    const input = stripIndent`
      import {SidePanel as Panel} from '@workday/canvas-kit-react/side-panel'
      <Panel variant="alternate">Content</Panel>
    `;

    const expected = stripIndent`
      import {SidePanel as Panel} from '@workday/canvas-kit-react/side-panel'
      <Panel variant="overlay">Content</Panel>
    `;
    expectTransform(input, expected);
  });

  it('should handle variant={"alternate"} expression values', () => {
    const input = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      <SidePanel variant={'alternate'}>Content</SidePanel>
    `;

    const expected = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      <SidePanel variant="overlay">Content</SidePanel>
    `;
    expectTransform(input, expected);
  });

  it('should transform styled-wrapped components', () => {
    const input = stripIndent`
      import styled from '@emotion/styled';
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      const StyledPanel = styled(SidePanel)({color: '#000'});
      <StyledPanel variant="alternate">Content</StyledPanel>
    `;

    const expected = stripIndent`
      import styled from '@emotion/styled';
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      const StyledPanel = styled(SidePanel)({color: '#000'});
      <StyledPanel variant="overlay">Content</StyledPanel>
    `;
    expectTransform(input, expected);
  });

  it('should transform styled-wrapped components from package root imports', () => {
    const input = stripIndent`
      import styled from '@emotion/styled';
      import {SidePanel} from '@workday/canvas-kit-react'
      const StyledPanel = styled(SidePanel)({color: '#000'});
      <StyledPanel variant="alternate">Content</StyledPanel>
    `;

    const expected = stripIndent`
      import styled from '@emotion/styled';
      import {SidePanel} from '@workday/canvas-kit-react'
      const StyledPanel = styled(SidePanel)({color: '#000'});
      <StyledPanel variant="overlay">Content</StyledPanel>
    `;
    expectTransform(input, expected);
  });

  it('should not transform variant="standard"', () => {
    const input = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      <SidePanel variant="standard">Content</SidePanel>
    `;

    const expected = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-react/side-panel'
      <SidePanel variant="standard">Content</SidePanel>
    `;
    expectTransform(input, expected);
  });

  it('should not transform when SidePanel is not imported', () => {
    const input = stripIndent`
      import {Button} from '@workday/canvas-kit-react'
      <Button variant="alternate">Click me</Button>
    `;

    const expected = stripIndent`
      import {Button} from '@workday/canvas-kit-react'
      <Button variant="alternate">Click me</Button>
    `;
    expectTransform(input, expected);
  });

  it('should not transform SidePanel imported from the preview package', () => {
    const input = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-preview-react/side-panel'
      <SidePanel variant="alternate">Content</SidePanel>
    `;

    const expected = stripIndent`
      import {SidePanel} from '@workday/canvas-kit-preview-react/side-panel'
      <SidePanel variant="alternate">Content</SidePanel>
    `;
    expectTransform(input, expected);
  });
});
