import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {base} from '@workday/canvas-tokens-web';

const statusIndicatorStyles = createStyles({
  maxWidth: base.size1200,
});

export const Overflow = () => {
  return (
    <OverflowTooltip>
      <StatusIndicator tabIndex={0} cs={statusIndicatorStyles}>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>
          Your workbook is currently in process of saving
        </StatusIndicator.Label>
      </StatusIndicator>
    </OverflowTooltip>
  );
};
