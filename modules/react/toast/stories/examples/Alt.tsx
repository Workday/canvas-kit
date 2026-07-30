import {Toast} from '@workday/canvas-kit-react/toast';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.alt.default,
  padding: system.padding.md,
});

export const Alt = () => {
  return (
    <div className={styles}>
      <Toast variant="alt">
        <Toast.Icon icon={checkIcon} color={system.color.brand.fg.positive.default} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
      </Toast>
    </div>
  );
};
