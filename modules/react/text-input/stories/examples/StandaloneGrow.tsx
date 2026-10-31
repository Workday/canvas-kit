import {useUniqueId} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const StandaloneGrow = () => {
  const id = useUniqueId();

  return (
    <div>
      <label htmlFor={id}>Street Address</label>
      <TextInput id={id} grow />
    </div>
  );
};
