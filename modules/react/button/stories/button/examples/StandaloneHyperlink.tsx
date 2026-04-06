import {Hyperlink, ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x4,
});

export const StandaloneLink = () => (
  <div className={containerStyles}>
    <Hyperlink variant="standalone" href="#standalone-hyperlink">
      Standalone Hyperlink
    </Hyperlink>
    <ExternalHyperlink
      variant="standalone"
      href="#standalone-external-hyperlink"
      iconLabel="Opens new window"
    >
      Standalone External Hyperlink
    </ExternalHyperlink>
  </div>
);
