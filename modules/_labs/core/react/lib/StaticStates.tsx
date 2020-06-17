import * as React from 'react';
import {useTheme, CanvasProvider, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';

export const StaticStates: React.FC = ({children}) => {
  const theme: EmotionCanvasTheme & {_staticStates?: boolean} = useTheme();
  theme._staticStates = true;

  return <CanvasProvider theme={theme}>{children}</CanvasProvider>;
};
