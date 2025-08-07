import {BaseAvatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
// @ts-ignore
import avatarImage from './nicholas-avatar.png';

const customStyles = createStyles({
  cursor: 'pointer',
  width: '56px',
  height: '56px',
  backgroundColor: base.magenta300,
  color: base.magenta700,
  borderRadius: '50%',
  border: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  span: {
    cursor: 'pointer',
  },
});

export const Custom = () => {
  return (
    <BaseAvatar cs={customStyles} as="button" onClick={() => console.log('clicked')}>
      <BaseAvatar.Name name="John Doe" />
    </BaseAvatar>
  );
};
