import {Toast} from '@workday/canvas-kit-react/toast';
import {colors} from '@workday/canvas-kit-react/tokens';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';

export const ToastAlert = () => (
  <Toast mode="alert">
    <Toast.Icon icon={exclamationCircleIcon} color={colors.cinnamon500} />
    <Toast.Body>
      <Toast.Message>There was an error with your workbook.</Toast.Message>
    </Toast.Body>
  </Toast>
);
