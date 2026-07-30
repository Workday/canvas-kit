import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {xIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const customStyles = createStyles({
  background: system.color.bg.alt.default,
  padding: system.padding.xl,
});

export const Alt = () => {
  return (
    <div className={customStyles}>
      <Tooltip title="Close" variant="alt">
        <TertiaryButton icon={xIcon} aria-label="Close" />
      </Tooltip>
    </div>
  );
};
