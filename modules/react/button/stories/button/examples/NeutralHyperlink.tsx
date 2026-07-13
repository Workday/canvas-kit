import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.md,
});

export const NeutralLink = () => (
  <div className={containerStyles}>
    <Hyperlink variant="neutral" href="#neutral-hyperlink">
      Neutral Hyperlink
    </Hyperlink>
    <ExternalHyperlink
      variant="neutral"
      href="#neutral-external-hyperlink"
      iconLabel="Opens new window"
    >
      Neutral External Hyperlink
    </ExternalHyperlink>
  </div>
);
