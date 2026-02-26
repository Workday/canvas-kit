import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const statusIndicatorsStyles = createStyles({
  '& > *': {
    margin: system.gap.sm,
  },
});

export const MaxWidth = () => {
  return (
    <div className={statusIndicatorsStyles}>
      <StatusIndicator
        label="Longer Than Normal Ellipsized Status"
        type={StatusIndicator.Type.Blue}
        maxWidth={250}
      />
      <OverflowTooltip>
        <StatusIndicator
          label="Overflow Tooltip On Hover/Focus Status"
          type={StatusIndicator.Type.Green}
          tabIndex={0}
        />
      </OverflowTooltip>
    </div>
  );
};
