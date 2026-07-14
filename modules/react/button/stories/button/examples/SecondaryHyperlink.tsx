import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.md,
});

export const SecondaryLink = () => (
  <div className={containerStyles}>
    <Hyperlink variant="secondary" href="#secondary-hyperlink">
      Secondary Hyperlink
    </Hyperlink>
    <ExternalHyperlink
      variant="secondary"
      href="#secondary-external-hyperlink"
      iconLabel="Opens new window"
    >
      Secondary External Hyperlink
    </ExternalHyperlink>
    <Hyperlink variant="secondary" type="standalone" href="#secondary-standalone-hyperlink">
      Secondary Standalone Hyperlink
    </Hyperlink>
  </div>
);
