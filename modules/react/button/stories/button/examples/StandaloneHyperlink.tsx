import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.md,
});

export const StandaloneLink = () => (
  <div className={containerStyles}>
    <Hyperlink linkType="standalone" href="#standalone-hyperlink">
      Hyperlink
    </Hyperlink>
  </div>
);
