import * as React from 'react';
import {useTheme, CanvasProvider, CanvasTheme} from '@workday/canvas-kit-react-common';

export const StaticStates: React.FC = ({children}) => {
  const theme: CanvasTheme & {_staticStates?: boolean} = useTheme();
  theme._staticStates = true;

  return <CanvasProvider theme={theme}>{children}</CanvasProvider>;
};
