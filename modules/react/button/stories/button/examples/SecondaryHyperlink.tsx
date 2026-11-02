import {Hyperlink} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  backgroundColor: system.legacy.color.surface.info.default,
  padding: system.padding.md,
  display: 'inline-flex',
  gap: system.gap.md,
});

export const SecondaryLink = () => (
  <div className={containerStyles}>
    <Hyperlink variant="secondary" href="#secondary-hyperlink">
      Hyperlink
    </Hyperlink>
  </div>
);
