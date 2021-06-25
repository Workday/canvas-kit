import React from 'react';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Standalone = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Switch checked={checked} onChange={handleChange} />;
};
