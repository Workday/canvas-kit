import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

const statusIndicatorStyles = createStyles({
  maxWidth: px2rem(96),
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
