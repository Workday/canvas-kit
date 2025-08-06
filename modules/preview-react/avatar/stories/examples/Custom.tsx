import {BaseAvatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';

const customStyles = createStyles({
  cursor: 'pointer',
  span: {
    cursor: 'pointer',
  },
});

export const Custom = () => {
  return (
    <BaseAvatar
      cs={customStyles}
      as="button"
      variant="purple"
      size="large"
      onClick={() => alert('clicked')}
    >
      <BaseAvatar.Name name="John Doe" />
    </BaseAvatar>
  );
};
