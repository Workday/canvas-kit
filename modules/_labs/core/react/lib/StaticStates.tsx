import * as React from 'react';
import {useTheme} from './theming/useTheme';
import CanvasProvider from './CanvasProvider';
import {CanvasTheme} from './theming';

export const StaticStates: React.FC = ({children}) => {
  const theme: CanvasTheme & {_staticStates?: boolean} = useTheme();
  theme._staticStates = true;

  return <CanvasProvider theme={theme}>{children}</CanvasProvider>;
};
