import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Subtext} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {copyIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const flexContainer = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.xs,
  p: {
    margin: 0,
  },
});

export const InTooltip = () => {
  return (
    <Tooltip
      title={
        <div className={flexContainer}>
          <Subtext size="large">Copy to clipboard</Subtext>
          <KBD aria-keyshortcuts="Command+P">
            <KBD.Item>
              <KBD variant="plain">
                <KBD.Item>⌘</KBD.Item>
                <KBD.Item>C</KBD.Item>
              </KBD>
            </KBD.Item>
          </KBD>
        </div>
      }
    >
      <SecondaryButton icon={copyIcon} />
    </Tooltip>
  );
};
