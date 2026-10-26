import {Meta} from '@storybook/react';

import {sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {brandScopePrimaryOnly, primaryWithFocus} from '../../../../../utils/storybook/customThemes';
import {BrandingFixture} from './examples/BrandingFixture';

const rowStyles = createStyles({
  gap: system.gap.xl,
  flexWrap: 'wrap',
});

export default {
  title: 'Features/Theming',
} as Meta;

const comparisonRender = () => (
  <Flex cs={rowStyles}>
    <BrandingFixture label="Global (no scoped override)" />
    <BrandingFixture
      label="Scoped: sanaCanvasProviderTheme"
      scopedTheme={sanaCanvasProviderTheme}
    />
    <BrandingFixture label="Scoped: primary only" scopedTheme={brandScopePrimaryOnly} />
    <BrandingFixture label="Scoped: primary + focusOutline" scopedTheme={primaryWithFocus} />
  </Flex>
);

export const SanaCanvas = {
  name: 'Sana Canvas',
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side branding fixtures. The second column intentionally uses scoped `sanaCanvasProviderTheme` (may log the global-theme console warning in Storybook). Compare with Canvas using `?theme=canvas` in the URL.',
      },
    },
    chromatic: {disable: false},
  },
  render: comparisonRender,
};
