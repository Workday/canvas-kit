import React from 'react';
import {Switch} from '@workday/canvas-kit-react/switch';

export const ErrorStandalone = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Switch checked={checked} error={Switch.ErrorType.Error} onChange={handleChange} />;
};
