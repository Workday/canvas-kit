import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const Basic = () => {
  return (
    <Toast>
      <Toast.Icon icon={checkIcon} color="greenApple400" />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Body>
    </Toast>
  );
};
